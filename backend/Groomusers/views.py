from django.contrib.auth import authenticate, login, logout
from django.http import HttpResponse
from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework import status
from rest_framework.decorators import api_view, permission_classes
from rest_framework.permissions import IsAuthenticated
from django.contrib.auth import get_user_model
from django.http import HttpResponse
from django.views.decorators.csrf import csrf_exempt

User = get_user_model()

class RegisterView(APIView):
    def post(self, request, format=None):
        data = request.data

        username = data.get('username', None)
        password = data.get('password', None)
        name = data.get('name', None)
        email = data.get('email', None)
        team = data.get('team', None)

        if not all([username, password, name, email, team]):
            return Response({"error": "All fields are required"}, status=status.HTTP_400_BAD_REQUEST)

        if User.objects.filter(username=username).exists():
            return Response({"error": "Username is already taken"}, status=status.HTTP_400_BAD_REQUEST)

        user = User(username=username, name=name, email=email, team=team)
        user.set_password(password) # 비밀번호를 해시 처리하여 저장합니다.
        user.save()

        return Response({"success": f"User {username} registered successfully"}, status=status.HTTP_201_CREATED)

class LoginView(APIView):
    @csrf_exempt
    def post(self, request):
        username = request.data.get('username')
        password = request.data.get('password')

        if not all([username, password]):
            return Response({"error": "Both username and password are required"}, status=status.HTTP_400_BAD_REQUEST)

        user = authenticate(request, username=username, password=password)

        if user is None:
            return Response({"error": "Invalid username or password"}, status=status.HTTP_403_FORBIDDEN)

        login(request, user)
        return Response({"success": f"User {username} logged in"}, status=status.HTTP_200_OK)

# 로그아웃 뷰
class LogoutView(APIView):
    def post(self, request, format=None):
        logout(request)
        return HttpResponse("Logout successfully", status=status.HTTP_200_OK)

# 인증 확인 뷰
class CheckAuthentication(APIView):
    def get(self, request, format=None):
        if request.user.is_authenticated:
            return Response({"message": "Authenticated"}, status=status.HTTP_200_OK)
        else:
            return Response({"message": "Not Authenticated"}, status=status.HTTP_401_UNAUTHORIZED)
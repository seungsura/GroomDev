from django.shortcuts import render
from django.contrib.auth import authenticate, login
from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework import status
from django.contrib.auth import get_user_model
from django.views.decorators.csrf import csrf_exempt
from rest_framework.authtoken.models import Token
from django.http import HttpResponse


from django.contrib.auth.decorators import login_required
from django.contrib.auth import logout
from django.shortcuts import redirect, render

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

        # 토큰 생성 또는 기존 토큰 가져오기
        token = Token.objects.get_or_create(user=user)

        return Response({"token": token.key, "success": f"User {username} logged in"}, status=status.HTTP_200_OK)





#@login_required(login_url='Groomuser:login')
#def main_view(request):
    # 로그인한 사용자만 접근할 수 있는 뷰 로직 작성
#    return HttpResponse("successfully", status=status.HTTP_200_OK)

#@login_required
@csrf_exempt
def logout_view(request): 
    if request.method == 'POST':
        logout(request)
        return HttpResponse("Logout successfully", status=status.HTTP_200_OK)
    return HttpResponse("Method Not Allowed", status=status.HTTP_405_METHOD_NOT_ALLOWED)

    # return redirect('Groomuser:login')

from rest_framework.decorators import api_view, permission_classes
from rest_framework.permissions import IsAuthenticated

@api_view(['GET'])
@permission_classes([IsAuthenticated])
def check_authentication(request):
    # 인증된 사용자인 경우에만 응답을 반환합니다.
    return Response({"message": "Authenticated"}, status=200)

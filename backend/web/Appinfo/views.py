from rest_framework.views import APIView #Django REST Framework에서 제공하는 클래스로, API를 처리하기 위한 기본 뷰 클래스
from rest_framework.response import Response #Django REST Framework에서 제공하는 응답 객체, API 요청에 대한 응답 생성, 반환
from rest_framework import status #HTTP 응답 상태 코드를 정의하는 클래스
#from rest_framework.generics import ListAPIView #Django 모델에 대한 목록 조회 엔드포인트를 구현할 때 사용
from rest_framework import serializers
from .models import Appinfo, Projectinfo

class CreateApp(APIView):
    def post(self, request):
        username = request.data.get('username')
        projectname = request.data.get('projectname')
        appname = request.data.get('appname')
        appDescription = request.data.get('appDescription')

        if not all([username, projectname, appname, appDescription]):
            return Response({"error": "All fields (username, projectname, appname, appDescription) are required"}, status=status.HTTP_400_BAD_REQUEST)

        try:
            username = Projectinfo.objects.get(username=username)
            projectname = Projectinfo.objects.get(projectname=projectname)

        except Projectinfo.DoesNotExist:
            return Response({"error": "Invalid username"}, status=status.HTTP_400_BAD_REQUEST)
        except Projectinfo.DoesNotExist:
            return Response({"error": "Invalid projectname"}, status=status.HTTP_400_BAD_REQUEST)        

        app = Appinfo.objects.create(username=username, projectname=projectname, appname=appname, appDescription=appDescription)
        app.save()

        return Response({"message": "App created successfully"}, status=status.HTTP_201_CREATED)

# AppSerializer은 serializers.ModelSerializer를 상속받은 클래스로 Appinfo의 모델의 필드를 직렬화하는 역할

class AppSerializer(serializers.ModelSerializer):
    class Meta:
        model = Appinfo
        fields = ['id', 'username', 'projectname', 'appname', 'appDescription']

class GetApp(APIView):
    def post(self, request):
        username = request.data.get('username')
        projectname = request.data.get('projectname')

        try:
            project = Projectinfo.objects.get(username=username, projectname=projectname)
        except Projectinfo.DoesNotExist:
            return Response({"error": "Invalid username or projectname"}, status=status.HTTP_400_BAD_REQUEST)

        apps = Appinfo.objects.filter(username=project, projectname=project)

        serializer = AppSerializer(apps, many=True)
        return Response(serializer.data)
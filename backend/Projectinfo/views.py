from django.shortcuts import render
from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework import status
from .models import Projectinfo, Groomusers

class CreateProject(APIView):
    def post(self, request):
        username = request.data.get('username')
        projectname = request.data.get('projectname')
        description = request.data.get('description')

        if not all([username, projectname, description]):
            return Response({"error": "All fields (username, projectname, description) are required"}, status=status.HTTP_400_BAD_REQUEST)

        try:
            groom_user = Groomusers.objects.get(username=username)
        except Groomusers.DoesNotExist:
            return Response({"error": "Invalid username"}, status=status.HTTP_400_BAD_REQUEST)

        project = Projectinfo.objects.create(username=groom_user, projectname=projectname, description=description)
        project.save()

        return Response({"message": "Project created successfully"}, status=status.HTTP_201_CREATED)

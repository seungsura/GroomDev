from django.urls import path
from .views import CreateProject, GetProject

app_name = "Projectinfo"

urlpatterns = [
    path('createproject/', CreateProject.as_view(), name='createproject'),
    path('getproject/', GetProject.as_view(), name='getproject'),
]
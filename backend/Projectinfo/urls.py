from django.urls import path
from .views import CreateProject

app_name = "Projectinfo"

urlpatterns = [
    path('createproject/', CreateProject.as_view(), name='createproject'),
]
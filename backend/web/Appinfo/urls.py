from django.urls import path
from .views import CreateApp, GetApp

app_name = "Appinfo"

urlpatterns = [
    path('createapp/', CreateApp.as_view(), name='createapp'),
    path('getapp/', GetApp.as_view(), name='getapp'),
]
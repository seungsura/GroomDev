from django.urls import path
from .views import LoginView, RegisterView, LogoutView, CheckAuthentication
from django.contrib.auth import views as auth_views

app_name = "Groomuser"

urlpatterns = [
    path('login/', LoginView.as_view(), name='login'),
    path('register/', RegisterView.as_view(), name='register'),
    path('logout/', LogoutView.as_view(), name='logout'),
    path('check-authentication/', CheckAuthentication.as_view(), name='check-authentication'),
]
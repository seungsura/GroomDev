from django.urls import path
from .views import LoginView, RegisterView, logout_view
from django.contrib.auth import views as auth_views
from .views import check_authentication

app_name = "Groomuser"

urlpatterns = [
    path('login/', LoginView.as_view(), name='login'),
    path('register/', RegisterView.as_view(), name='register'),
    path('logout/', logout_view, name='logout'),
    path('check-authentication/', check_authentication, name='check-authentication'),
]
from django.contrib.auth.models import AbstractUser
from django.db import models

class Groomusers(AbstractUser):
    # username field (and password field) are already included in the AbstractUser
    name = models.CharField(max_length=255)
    email = models.EmailField(unique=True)
    team = models.CharField(max_length=255)

from django.db import models
from Groomusers.models import Groomusers

class Projectinfo(models.Model):
    username = models.ForeignKey(Groomusers, on_delete=models.CASCADE, related_name='projects')
    projectname = models.CharField(max_length=255)
    description = models.TextField()
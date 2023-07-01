from django.db import models
from Groomusers.models import Groomusers
from Projectinfo.models import Projectinfo

class Appinfo(models.Model):
    username = models.ForeignKey(Projectinfo, on_delete=models.CASCADE, related_name='projects')
    projectname = models.ForeignKey(Projectinfo, on_delete=models.CASCADE, related_name='apps')
    appname = models.CharField(max_length=255)
    appDescription = models.TextField()

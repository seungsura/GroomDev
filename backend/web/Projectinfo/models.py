from django.db import models
from Groomusers.models import Groomusers

class Projectinfo(models.Model):
    username = models.ForeignKey(Groomusers, on_delete=models.CASCADE, related_name='projects')
    projectname = models.CharField(max_length=255)
    description = models.TextField()

    # username마다 projectname이 달라야 함.
    # username이 다르면 projectname은 같을 수 있음.
    class Meta:
        unique_together = ('username', 'projectname')
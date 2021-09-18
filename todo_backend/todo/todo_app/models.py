from django.db import models
from django.contrib.auth.models import User

# Create your models here.

class Task(models.Model):
    title = models.CharField(max_length=50)
    desc = models.CharField(max_length=500)
    date = models.DateTimeField()
    user = models.ForeignKey(User, on_delete=models.CASCADE)
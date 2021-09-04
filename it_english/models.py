from django.db import models
from django.db.models.fields import EmailField

# Create your models here.

class UserModel(models.Model):
  name = models.CharField(max_length= 20)
  email = models.EmailField(max_length=254)
  password = models.CharField(max_length=50)
  secret_question = models.CharField(max_length=100)

class QuizModel(models.Model):
  quiz = models.CharField(max_length= 20)
  answer = models.CharField(max_length= 20)

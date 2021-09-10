from django.db import models
from django.db.models.deletion import CASCADE
from django.db.models.fields import EmailField

# Create your models here.

class UserModel(models.Model):
  name = models.CharField(max_length= 20)
  email = models.EmailField(max_length=254, unique=True)
  password = models.CharField(max_length=50)
  secret_question = models.CharField(max_length=100)

class AdministratorModel(models.Model):
  name = models.CharField(max_length= 20)
  email = models.EmailField(max_length=254, unique=True)
  password = models.CharField(max_length=50)

class QuizModel(models.Model):
  quiz = models.CharField(max_length= 200)
  op1 = models.CharField(max_length=200)
  op2 = models.CharField(max_length=200)
  op3 = models.CharField(max_length=200)
  op4 = models.CharField(max_length=200)
  answer = models.CharField(max_length= 200)
  administrator_id = models.ForeignKey(AdministratorModel, on_delete=models.CASCADE)

  def __str__(self):
    return self.quiz

class Quiz_levelModel(models.Model):
  level = models.CharField(max_length= 20)

class Quiz_quiz_levelModel(models.Model):
  quiz_level_id = models.ForeignKey(Quiz_levelModel, on_delete=models.CASCADE)
  quiz_id = models.ForeignKey(QuizModel, on_delete=models.CASCADE)

class Answer_historyModel(models.Model):
  user_id = models.ForeignKey(UserModel, on_delete=models.CASCADE)
  selectes_level = models.CharField(max_length = 20)

class Answer_detail_historyModel(models.Model):
  answer_history_id = models.ForeignKey(Answer_historyModel, on_delete=models.CASCADE)
  quiz_id = models.ForeignKey(QuizModel, on_delete=CASCADE)

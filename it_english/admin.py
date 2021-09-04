from django.contrib import admin
from .models import QuizModel, UserModel
# Register your models here.

admin.site.register(UserModel)
admin.site.register(QuizModel)

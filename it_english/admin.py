from django.contrib import admin
from .models import QuizModel, UserModel, AdministratorModel, Quiz_levelModel, Quiz_quiz_levelModel, Quiz_quiz_levelModel, Answer_historyModel, Answer_detail_historyModel
# Register your models here.

admin.site.register(UserModel)
admin.site.register(QuizModel)
admin.site.register(AdministratorModel)
admin.site.register(Quiz_levelModel)
admin.site.register(Quiz_quiz_levelModel)
admin.site.register(Answer_historyModel)
admin.site.register(Answer_detail_historyModel)

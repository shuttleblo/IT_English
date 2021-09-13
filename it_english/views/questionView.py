from django.contrib.auth import login
from django.shortcuts import render
from django.views.generic import TemplateView
from django.contrib.auth.mixins import LoginRequiredMixin
from django.http import HttpResponse

class q_answerTemplateView(LoginRequiredMixin,TemplateView):
    template_name = 'question/q_answer.html'
    login_url = '/login/'

class choiceTemplateView(LoginRequiredMixin,TemplateView):
    template_name = "question/choice.html"
    login_url = "/login/"

def result(request):
    return render(request, 'question/result.html')

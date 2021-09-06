from django.shortcuts import render
from django.views.generic import TemplateView
from django.contrib.auth.mixins import LoginRequiredMixin
from django.http import HttpResponse

def q_answer(request):
    return render(request,'question/q_answer.html',{})

class choiceTemplateView(LoginRequiredMixin,TemplateView):
    template_name = "question/choice.html"
    login_url = "/login/"

def result(request):
    return render(request, 'question/result.html')

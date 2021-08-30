from django.shortcuts import render, redirect
from django.http import HttpResponse

def q_answer(request):
    return render(request,'question/q_answer.html',{})

from it_english.models import QuizModel
from django.shortcuts import render, redirect
from django.http import HttpResponse


def word_top(request):
    lists = QuizModel.objects.all()
    return render(request, 'word/word_top.html',{"lists": lists})


def word_create(request):
    return render(request, 'word/word_create.html',{})


def word_edit(request):
    return render(request, 'word/word_edit.html',{})

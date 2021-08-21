from .forms import UserCreateForm
from django.shortcuts import render, redirect
from django.contrib.auth import login
from django.http import HttpResponse


def index(request):
    return HttpResponse("仮のトップページ")

def signup(request):
    if request.method == 'POST':
        form = UserCreateForm(request.POST)
        if form.is_valid():
            user_instance = form.save()
            login(request, user_instance)
            return redirect("it_english:index")
    else:
        form = UserCreateForm()

    context = {
        "form": form
    }
    return render(request, 'signup/signup.html', context)

def word_top(request):
    return render(request, 'word/word_top.html',{})


def word_create(request):
    return render(request, 'word/word_create.html',{})


def word_edit(request):
    return render(request, 'word/word_edit.html',{})

from django.contrib.auth.forms import UserCreationForm
from django.shortcuts import render, redirect
from django.contrib.auth import login
from django.http import HttpResponse


def index(request):
    return HttpResponse("仮のトップページ")

def signup(request):
    if request.method == 'POST':
        form = UserCreationForm(request.POST)
        if form.is_valid():
            user_instance = form.save()
            login(request, user_instance)
            return redirect("it_english:index")
    else:
        form = UserCreationForm()

    context = {
        "form": form
    }
    return render(request, 'signup/signup.html', context)

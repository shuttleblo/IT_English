from it_english.forms import LoginForm, UserCreateForm
from django.shortcuts import render, redirect
from django.views import View
from django.contrib.auth.models import User
from django.contrib.auth import login
from django.http import HttpResponse, response


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


class Account_login(View):
    def post(self, request, *arg, **kwargs):
        form = LoginForm(data=request.POST)
        if form.is_valid():
            username = form.cleaned_data.get('username')
            user = User.objects.get(username=username)
            login(request, user)
            return redirect('it_english:index')
        return render(request, 'login/login.html', {'form': form, })

    def get(self, request, *args, **kwargs):
        form = LoginForm(request.POST)
        return render(request, 'login/login.html', {'form': form, })


account_login = Account_login.as_view()

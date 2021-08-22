from django.urls import path

from it_english.views import accountView

app_name = "it_english"

urlpatterns = [
    path('', accountView.index, name='index'),
    path('signup/', accountView.signup, name='signup'),
    path('login/', accountView.Account_login.as_view(), name='login'),
]

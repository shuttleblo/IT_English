from django.urls import path
from django.urls.conf import include

from it_english.views import accountView,questionView

app_name = "it_english"

urlpatterns = [
    path('', accountView.index, name='index'),
    path('signup/', accountView.signup, name='signup'),
    path('login/', accountView.account_login, name='login'),
    path('choice/',questionView.choice, name='choice'),
]

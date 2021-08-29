from django.urls import path

from it_english.views import accountView,questionView

app_name = "it_english"

urlpatterns = [
    path('', accountView.index, name='index'),
    path('signup/', accountView.signup, name='signup'),
    path('login/', accountView.account_login, name='login'),
    path('choice/',questionView.choiceTemplateView.as_view(),name='choice'),
    path('result/',questionView.result,name='result'),
]

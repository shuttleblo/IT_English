from django.urls import path

from it_english.views import accountView

app_name = "it_english"

urlpatterns = [

    path('', accountView.index, name='index'),
    path('signup/', accountView.signup, name='signup'),
    path('login/', accountView.account_login, name='login'),
    path('word_top/', views.word_top, name='word_top'),
    path('word_create/', views.word_create, name='word_create'),
    path('word_edit/', views.word_edit, name='word_edit')

]

from django.urls import path

from it_english.views import accountView,questionView,word_edit_view

app_name = "it_english"

urlpatterns = [
    path('', accountView.index, name='index'),
    path('signup/', accountView.signup, name='signup'),
    path('login/', accountView.account_login, name='login'),
    path('choice/',questionView.choiceTemplateView.as_view(),name='choice'),
    # path('result/',questionView.result,name='result'),
    path('word_top/', word_edit_view.word_top, name='word_top'),
    path('word_create/', word_edit_view.word_create, name='word_create'),

    path('word_edit/', word_edit_view.word_edit, name='word_edit'),
    path('q_answer/',questionView.q_answer,name='q_answer'),
]

from django.urls import path
from django.urls.conf import include

from it_english.views import accountView, questionView, wordEditView, profileView,aboutUsView

app_name = "it_english"

urlpatterns = [
    path('', accountView.index, name='index'),
    path('signup/', accountView.signup, name='signup'),
    path('login/', accountView.account_login, name='login'),
    path('choice/',questionView.choiceTemplateView.as_view(), name='choice'),

    path('word_top/', wordEditView.word_top, name='word_top'),
    path('word_add/', wordEditView.word_add, name='word_add'),
    path('result/',questionView.result,name='result'),
    path('word_edit/', wordEditView.word_edit, name='word_edit'),
    path('q_answer/',questionView.q_answerTemplateView.as_view(),name='q_answer'),
    path('quiz', wordEditView.quiz, name='quiz'),
    path('profile/',profileView.comingsoon,name='comingsoon'),
    path('aboutus/',aboutUsView.authors,name='aboutus'),
]

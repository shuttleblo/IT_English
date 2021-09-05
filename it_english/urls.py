from django.urls import path

<<<<<<< HEAD
from it_english.views import accountView ,word_edit_view,questionView
=======
from it_english.views import accountView,questionView,word_edit_view
>>>>>>> 9c2324d9dc817d724bdc2b392fb397a5120755ed

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
<<<<<<< HEAD
    path('q_answer/',questionView.q_answer,name='q_answer')

=======
    path('q_answer/',questionView.q_answer,name='q_answer'),
>>>>>>> 9c2324d9dc817d724bdc2b392fb397a5120755ed
]

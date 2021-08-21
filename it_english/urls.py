from django.urls import path

from . import views

app_name =  "it_english"

urlpatterns = [
    path('', views.index, name='index'),
    path('signup/', views.signup, name='signup'),
    path('word_top/', views.word_top, name='word_top'),
    path('word_create/', views.word_create, name='word_create'),
    path('word_edit/', views.word_edit, name='word_edit')
]

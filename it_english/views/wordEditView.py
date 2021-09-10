
from it_english.models import QuizModel
from django.shortcuts import render, redirect
from django.http import HttpResponse


def word_top(request):
    lists = QuizModel.objects.all()
    return render(request, 'word/word_top.html',{"lists": lists})


def word_create(request):
    return render(request, 'word/word_create.html',{})


def word_edit(request):
    return render(request, 'word/word_edit.html',{})

def quiz(request):
    if request.method == 'POST':
        print(request.POST)
        quizzes = QuizModel.objects.all()
        score = 0
        wrong = 0
        correct = 0
        total = 0
        for q in quizzes:
            total += 1
            print(request.POST.get(q.quiz))
            print(q.answer)
            if q.ans == request.POST.get(q.question):
                score += 10
                correct += 1
            else:
                wrong += 1
        percent = score / (total * 10) * 100
        context = {
            'correct':correct,
            'percent':percent,
            'total':total,
        }
        return render(request, 'quiz/quiz.html', context)
    else:
        quizzes = QuizModel.objects.all()
        context = {
            'quizzes':quizzes
        }
        return render(request, 'quiz/quiz.html', context)



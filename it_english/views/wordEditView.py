
from it_english.forms import QuizAddForm
from it_english.models import QuizModel
from django.shortcuts import render, redirect
from django.http import HttpResponse


def word_top(request):
    lists = QuizModel.objects.all()
    return render(request, 'word/word_top.html',{"lists": lists})

def word_add(request):
    if request.user.is_staff:
        form = QuizAddForm
        if(request.method == 'POST'):
            form = QuizAddForm(request.POST)
            if(form.is_valid()):
                form.save()
                return redirect('quiz/word_add.html')
        context = {
            'form':form
        }
        return render(request, 'quiz/word_add.html',context)
    else:
        return redirect('quiz')

def word_edit(request):
    return render(request, 'quiz/word_edit.html',{})

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
            if q.answer == request.POST.get(q.quiz):
                score += 10
                correct += 1
            else:
                wrong += 1
        percent = score / (total * 10) * 100
        context = {
            'score':score,
            'percent':percent,
            'correct':correct,
            'wrong':wrong,
            'total':total,
        }
        return render(request, 'quiz/result.html', context)
    else:
        quizzes = QuizModel.objects.all()
        context = {
            'quizzes':quizzes
        }
        return render(request, 'quiz/quiz.html', context)

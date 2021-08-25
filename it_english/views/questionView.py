from django.shortcuts import render

def choice(request):
    return render(request, 'question/choice.html')

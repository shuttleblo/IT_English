from django.shortcuts import render

def comingsoon(request):
    return render(request, 'profile/comingsoon.html')

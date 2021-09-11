from pathlib import Path
from django.contrib import admin
from django.urls import path, include
from django.contrib.auth.views import LogoutView

urlpatterns = [
    path('admin/', admin.site.urls),
    path('', include('it_english.urls')),
    path('accounts/', include('django.contrib.auth.urls')),
    path('auth/', include('allauth.urls')),
]


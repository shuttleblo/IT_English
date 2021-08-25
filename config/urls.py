from django.contrib import admin
from django.urls import path, include

urlpatterns = [
    path('admin/', admin.site.urls),
    path('it_english/', include('it_english.urls')),
    path('it_english/', include('django.contrib.auth.urls')),
]

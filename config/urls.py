from django.contrib import admin
from django.urls import path, include

urlpatterns = [
    path('admin/', admin.site.urls),
    path('', include('it_english.urls')),
    path('accounts/', include('django.contrib.auth.urls')),
    # path('auth/', include('allauth.urls')),
]

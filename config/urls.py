from django.contrib import admin
from django.urls import path, include

urlpatterns = [
    path('admin/', admin.site.urls),
<<<<<<< HEAD
    path('', include('it_english.urls')),
=======
    path('it_english/', include('it_english.urls')),
    path('it_english/', include('django.contrib.auth.urls')),
>>>>>>> 8a35da390b365aad34ad2ee0380dfe96c960b53a
]

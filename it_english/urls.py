from django.urls import path

from . import views

app_name =  "it_english"

urlpatterns = [
    path("admin/",admin.site.urls),
]
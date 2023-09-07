from django.urls import path
from .views import index

urlpatterns = [
    path("", index),
    path("profile", index),
    path("shows", index),
    path("addshow", index),
]

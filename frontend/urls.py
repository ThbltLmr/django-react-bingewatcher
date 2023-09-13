from django.urls import path
from .views import index

urlpatterns = [
    path("activate/<uidb64>/<token>", index),
    path("addshow", index),
    path("", index),
    path("login", index),
    path("profile", index),
    path("reset_password", index),
    path("password/reset/confirm/<uidb64>/<token>", index),
    path("shows", index),
    path("signup", index),
]

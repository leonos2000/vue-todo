from django.urls import path

from .views import appView

urlpatterns = [
    path('', appView),
    path('login/', appView),
]
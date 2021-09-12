from django.urls import path

from .views import appView, putCsrfToken

urlpatterns = [
    path('', appView),
    path('login/', appView),
    path('csrf/', putCsrfToken)
]
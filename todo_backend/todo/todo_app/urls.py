from django.urls import path

from .views import appView, putCsrfToken, loginUser

urlpatterns = [
    path('', appView),
    path('login/', appView),
    path('csrf/', putCsrfToken),
    path('login/login/', loginUser),
]
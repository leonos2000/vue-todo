from django.urls import path, include

from .views import appView, putCsrfToken, loginUser, registerUser

urlpatterns = [
    path('', appView),
    path('login/', appView),
    path('csrf/', putCsrfToken),
    path('login/login/', loginUser),
    path('login/register/', registerUser)
]
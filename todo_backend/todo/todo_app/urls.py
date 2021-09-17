from django.urls import path, include, re_path

from .views import appView, putCsrfToken, loginUser, registerUser, activate

urlpatterns = [
    path('', appView),
    path('login/', appView),
    path('csrf/', putCsrfToken),
    path('login/login/', loginUser),
    path('login/register/', registerUser),
    path('login/activate/<uidb64>/<token>/', activate, name='activate'),
]
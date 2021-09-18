from django.urls import path, include, re_path

from .views import appView, loginUser, registerUser, activate, saveTask

urlpatterns = [
    path('', appView, name='default'),
    path('login/', appView),
    path('login/login/', loginUser),
    path('login/register/', registerUser),
    path('login/activate/<uidb64>/<token>/', activate, name='activate'),
    path('activate/', appView),
    path('saveTask/', saveTask),
]
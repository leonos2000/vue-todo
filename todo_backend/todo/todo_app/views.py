from django.shortcuts import render
from django.http import JsonResponse
from django.middleware import csrf

# Create your views here.

def appView(request):
    return render(request, 'base.html')

def putCsrfToken(request):
    token = csrf.get_token(request)
    return JsonResponse({'token': token})
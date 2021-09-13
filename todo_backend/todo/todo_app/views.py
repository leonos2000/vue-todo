from django.shortcuts import render
from django.http import JsonResponse
from django.middleware import csrf
from django.contrib.auth import authenticate, login

# Create your views here.

def appView(request):
    return render(request, 'base.html')

def putCsrfToken(request):
    token = csrf.get_token(request)
    return JsonResponse({'token': token})

def loginUser(request):
    if request.method == 'POST':
        print(request.POST.get('username'))
        print(request.POST.get('password'))

        user = authenticate(username=request.POST.get('username'), password=request.POST.get('password'))
        login(request, user)

    return JsonResponse({'status': 'Success'})
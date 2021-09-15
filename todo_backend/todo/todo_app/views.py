from django.shortcuts import render
from django.http import JsonResponse
from django.middleware import csrf
from django.contrib.auth import authenticate, login
from django.contrib.auth.models import User
import re

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

def registerUser(request):
    if request.method == 'POST':
        password = request.POST.get('password')
        print(f'password: {password}')
        email = request.POST.get('email')
        print(f'email: {email}')
        username = request.POST.get('username')
        print(f'username: {username}')

        if not re.search(r"^.*(?=.{8,40})(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[~!@#$%^&*()_+{}\":;'[\]]).*$", password):
            return JsonResponse({'status': 'password error'})
        if not re.search(r"^\w{4,20}$", username):
            return JsonResponse({'status': 'username error'})
        if not re.search(r"^\w{1,30}@.{3,30}$", email):
            return JsonResponse({'status': 'email error'})
        # user = User.objects.create_user(username=username,
        #                                 email=email,
        #                                 password=password)
            
    return JsonResponse({'status': 'success'})
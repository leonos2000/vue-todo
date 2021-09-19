import json
import datetime
import re

from django.shortcuts import redirect, render
from django.http import JsonResponse
from django.middleware import csrf
from django.contrib.auth import authenticate, login
from django.contrib.auth.models import User
from django.utils.http import urlsafe_base64_encode, urlsafe_base64_decode
from django.contrib.sites.shortcuts import get_current_site
from django.template.loader import render_to_string
from django.utils.encoding import force_bytes, force_text
from django.core.mail import send_mail

from urllib.parse import urlencode

from .tokens import account_activation_token
from .models import Task


def appView(request):
    pageType = request.GET.get('pageType')
    context = {
        'pageType': 'default' if pageType is None else pageType,
        'authenticated': True if request.user.is_authenticated else False,
    }
    return render(request, 'base.html', context={'json': context})

def getUserData(request):
    if request.user.is_authenticated:
        response = {
            'status': 'success',
            'username': request.user.username,
            'tasks': {}
            }
        for task in Task.objects.filter(user=request.user):
            response['tasks'][task.id] = {}
            response['tasks'][task.id]['title'] = task.title
            response['tasks'][task.id]['desc'] = task.desc
            response['tasks'][task.id]['timestamp'] = datetime.datetime.timestamp(task.date)*1000

        return JsonResponse(response)
    return JsonResponse({'status': 'error'})

def saveTask(request):
    if request.method == 'POST':
        print(request.user.id)
        if request.user.is_authenticated:
            task = Task()
            task.title = request.POST.get('title')
            task.desc = request.POST.get('desc')
            task.date = datetime.datetime.fromtimestamp(int(request.POST.get('timestamp'))/1000)
            task.user = request.user
            task.save()
            return JsonResponse({'status': 'success'})
        
    return JsonResponse({'status': 'error'})

def loginUser(request):
    if request.method == 'POST':
        print(request.POST.get('username'))
        print(request.POST.get('password'))

        user = authenticate(username=request.POST.get('username'), password=request.POST.get('password'))
        login(request, user)

        return JsonResponse({
            'status': 'success',
            'token': csrf.get_token(request)
            })
    return JsonResponse({'status': 'error'})

def registerUser(request):
    if request.method == 'POST':
        try:
            password = request.POST.get('password')
            email = request.POST.get('email')
            username = request.POST.get('username')
        except:
            return JsonResponse({'status': 'POST error'})

        if not re.search(r"^.*(?=.{8,40})(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[~!@#$%^&*()_+{}\":;'[\]]).*$", password):
            return JsonResponse({'status': 'password error'})
        if not re.search(r"^\w{4,20}$", username):
            return JsonResponse({'status': 'username error'})
        if not re.search(r"^\w{1,30}@.{3,30}$", email):
            return JsonResponse({'status': 'email error'})

        if User.objects.filter(username__iexact=username):
            return JsonResponse({'status': 'username exists'})
        if User.objects.filter(email__iexact=email):
            return JsonResponse({'status': 'email exists'})
        
        user = User.objects.create_user(username=username,
                                        email=email,
                                        password=password,
                                        is_active=False)

        current_site = get_current_site(request)
        message = render_to_string('email_token.html', {
                    'user': user,
                    'domain': current_site.domain,
                    'uid': urlsafe_base64_encode(force_bytes(user.pk)),
                    'token': account_activation_token.make_token(user),
                })

        send_mail('TODO account activation', message, None, ('leonpiotrczajka@gmail.com',))

    return JsonResponse({'status': 'success'})

def activate(request, uidb64, token):
    try:
        uid = force_text(urlsafe_base64_decode(uidb64))
        user = User.objects.get(pk=uid)
    except(TypeError, ValueError, OverflowError, User.DoesNotExist):
        user = None
    if user is None:
        pageType = 'badActivationLink'
    elif user.is_active:
        pageType = 'alreadyActivated'
    elif account_activation_token.check_token(user, token):
        user.is_active = True
        user.save()
        pageType = 'successfullyActivated'
    else:
        pageType = 'badActivationLink'
        
    query_string =  urlencode({'pageType': pageType})
    url = f'/login/?{query_string}'

    return redirect(url)
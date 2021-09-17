from django.shortcuts import render
from django.http import JsonResponse, HttpResponse
from django.middleware import csrf
from django.contrib.auth import authenticate, login, get_user_model
from django.contrib.auth.models import User
from django.utils.http import urlsafe_base64_encode, urlsafe_base64_decode
from django.contrib.sites.shortcuts import get_current_site
from django.template.loader import render_to_string
from django.utils.encoding import force_bytes, force_text
from django.core.mail import send_mail
import re

from .tokens import account_activation_token

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
                                        password=password)
        
        user.is_active = False

        current_site = get_current_site(request)
        message = render_to_string('email_token.html', {
                    'user': user,
                    'domain': current_site.domain,
                    'uid': urlsafe_base64_encode(force_bytes(user.pk)),
                    'token': account_activation_token.make_token(user),
                })
                
        send_mail('TODO aaccount activation', message, None, ('leonpiotrczajka@gmail.com',))

    return JsonResponse({'status': 'success'})

def activate(request, uidb64, token):
    try:
        uid = force_text(urlsafe_base64_decode(uidb64))
        print(f'wczytano uid: {uid}, token: {token}')
        user = User.objects.get(pk=uid)
    except(TypeError, ValueError, OverflowError, User.DoesNotExist):
        user = None
    print(account_activation_token.check_token(user, token))
    if user is not None and account_activation_token.check_token(user, token):
        user.is_active = True
        user.save()
        return HttpResponse('Thank you for your email confirmation. Now you can login your account.')
    else:
        return HttpResponse('Activation link is invalid!')
from django.shortcuts import render

# Create your views here.

def appView(request):
    return render(request, 'base.html')
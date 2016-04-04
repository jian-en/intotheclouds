from django.shortcuts import render
from django.http import (HttpResponse, HttpResponseBadRequest)
from django.views.decorators.csrf import csrf_exempt

from .models import Greeting
from hello.forms import PotentialCustomerForm
from hello.models import PotentialCustomer


# Create your views here.
def index(request):
    return render(request, 'index.html')


@csrf_exempt
def get_userinfo(request):
    if request.method == 'POST':
        form = PotentialCustomerForm(data=request.POST)

        if form.is_valid():
            PotentialCustomer.objects.create(**form.cleaned_data)
            return HttpResponse("ok")
        else:
            return HttpResponseBadRequest()
    else:
        return HttpResponseBadRequest()


def db(request):

    greeting = Greeting()
    greeting.save()

    greetings = Greeting.objects.all()

    return render(request, 'db.html', {'greetings': greetings})

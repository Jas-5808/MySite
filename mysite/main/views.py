from django.shortcuts import render
from django.http import JsonResponse


def index(request):
    return render(request, 'main/index.html')


def about(request):
    return render(request, 'main/about.html')


def marketPlace(request):
    return render(request, 'main/marketPlace.html')


def characters(request):
    return render(request, 'main/characters.html')


def send_json(request):

    data = [{'name': 'Peter', 'email': 'peter@example.org'},
            {'name': 'Julia', 'email': 'julia@example.org'}]

    return JsonResponse(data, safe=False)
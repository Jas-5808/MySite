from django.shortcuts import render


def index(request):
    return render(request, 'main/index.html')


def about(request):
    return render(request, 'main/about.html')


def marketPlace(request):
    return render(request, 'main/marketPlace.html')


def characters(request):
    return render(request, 'main/characters.html')
from django.http import HttpResponse


# Create your views here.


def home_view(request):
    response = HttpResponse("this is a response, bitch")
    return response

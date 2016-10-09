from django.http import HttpResponse
from nutritions.models import Nutritions
import json
import os


def nutritions(request):
    nutritions = os.open(os.getcwd() + 'nutritions.json')
    response = HttpResponse(nutritions)
    response["Access-Control-Allow-Origin"] = "http://localhost:3000"
    response["Content-Type"] = "application/json"
    return response

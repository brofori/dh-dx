from django.http import HttpResponse
from illnesses.models import Illnesses
import json


def illness_serializer(illness):
    illness = {
        'type': illness.type,
        'start_date': illness.start_date,
        'end_date': illness.end_date,
        'therapy': illness.therapy
    }
    return illness


def illness_detail(request, ill_id):
    illness = Illnesses.objects.first(ill_id)
    response = HttpResponse(json.dumps(illness_serializer(illness)))
    response["Access-Control-Allow-Origin"] = "localhost:3000"
    response["Content-Type"] = "application/json"
    return response

def illnesses(request):
    illness_list = Illnesses.objects.all()
    illness_list = [illness_serializer(illness) for illness in illness_list]
    response = HttpResponse(json.dumps(illness_list))
    response["Access-Control-Allow-Origin"] = "localhost:3000"
    response["Content-Type"] = "application/json"
    return response

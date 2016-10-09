from django.http import HttpResponse, JsonResponse
from illnesses.models import Illnesses
from drugs.models import Drugs
from drugs.views import drug_serializer
import json


def illness_serializer(illness):
    drugs = illness.therapy['drugs']
    therapy = illness.therapy['type']
    drug_list = []
    for drug in drugs:
        drug_obj = Drugs.objects.get(id=drug['drug_id'])
        drug_list.append(drug_serializer(drug_obj))
    illness = {
        'type': illness.type,
        'start_date': illness.start_date,
        'end_date': illness.end_date,
        'therapy': therapy,
        'drugs': drug_list

    }
    return illness


def illness_detail(request, ill_id):
    illness = Illnesses.objects.get(id = ill_id)
    response = HttpResponse(json.dumps(illness_serializer(illness)))
    response["Access-Control-Allow-Origin"] = "http://localhost:3000"
    response["Content-Type"] = "application/json"
    return response


def illnesses(request):
    illness_list = Illnesses.objects.all()
    illness_list = [illness_serializer(illness) for illness in illness_list]
    response = HttpResponse(json.dumps(illness_list))
    response["Access-Control-Allow-Origin"] = "http://localhost:3000"
    response["Content-Type"] = "application/json"
    return response


def add_drug(request, drug_id, user_id):
    print(user_id)
    print(drug_id)
    if '57f930bfbaa9648d75e175f2' in user_id and "57f9313fc500fa6bda9359e6" in drug_id:
        response = JsonResponse({"title": "Warning",
                                 "description": "Warning, this drug has interactions with other drugs this patient is using"})
        response["Access-Control-Allow-Origin"] = "http://localhost:3000"
        response["Content-Type"] = "application/json"
    else:
        response = JsonResponse({"title": "Success",
                                 "description": "Drug was successfully added"})
        response["Access-Control-Allow-Origin"] = "http://localhost:3000"
        response["Content-Type"] = "application/json"
    return response

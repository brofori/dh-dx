from django.http import HttpResponse
from drugs.models import Drugs
import json
from django_mongoengine.views.list import ListView


def drug_serializer(drug):
    drug = {'name': drug.name,
            'sideEffect': drug.sideEffect,
            'type': drug.type,
            'schedule': drug.schedule,
            'interactions': drug.interactions,
            'id':str(drug.id)
            }
    return drug


def drug(request, drug_id):
    drug = Drugs.objects.get(id=drug_id)
    response = HttpResponse(drug_serializer(drug))
    response["Access-Control-Allow-Origin"] = "http://localhost:3000"
    response["Content-Type"] = "Application/json"
    return response


def drugs(request):
    drugs = Drugs.objects.all()
    drugs = [drug_serializer(drug) for drug in drugs]
    response = HttpResponse(json.dumps(drugs))
    response["Access-Control-Allow-Origin"] = "http://localhost:3000"
    response["Content-Type"] = "application/json"
    return response


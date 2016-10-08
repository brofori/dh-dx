from django.http import HttpResponse
from drugs.models import Drugs
import json
from django_mongoengine.views.list import ListView


def drug_serializer(drug):
    return {'name': drug.name,
            'sideEffect': drug.sideEffect,
            'type': drug.type,
            'schedule': drug.schedule,
            'interactions': drug.interactions
            }


def drug(request, drug_id):
    drug = Drugs.objects.first(drug_id)
    return HttpResponse(drug)


def drugs(request):
    drugs = list(Drugs.objects.all())
    drugs = [drug_serializer(drug) for drug in drugs]
    return HttpResponse(drugs, content_type='application/json')

    # class GetDrugs(ListView):
    #     document = Drugs
    #     context_object_name = 'drug_list'
    #     def render_to_response(self):
    #         return self

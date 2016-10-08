from django.http import HttpResponse
from drugs.models import Drugs
import json
from django_mongoengine.views.list import ListView



def drug(request, drug_id):
    drug = Drugs.objects.first(drug_id)
    return HttpResponse(drug)


def drugs(request):
    drugs = list(Drugs.objects.all())
    drugs  = [list(drug) for drug in drugs]
    return HttpResponse(drugs, content_type='application/json')

# class GetDrugs(ListView):
#     document = Drugs
#     context_object_name = 'drug_list'
#     def render_to_response(self):
#         return self
from django.http import JsonResponse
from drugs.models import Drugs


def drug(request, drug_id):
    drug = Drugs.objects.first(drug_id)
    return JsonResponse(drug)


def drugs(request):
    drugs = Drugs.objects
    return JsonResponse(drugs,safe=False)

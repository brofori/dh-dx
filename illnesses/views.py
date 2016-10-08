from django.http import HttpResponse
from illnesses.models import Illnesses


def illness_detail(request,ill_id):
    illness = Illnesses.objects.first(ill_id)
    response = HttpResponse(illness, content_type='application/json')
    return response

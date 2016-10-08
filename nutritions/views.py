from django.http import JsonResponse
from nutritions.models import Nutritions


def nutrition(request, nutrition_id):
    nutrition = Nutritions.objects.first(nutrition_id)
    return JsonResponse(nutrition)


def nutritions(request):
    nutritions = Nutritions.objects.all()
    return JsonResponse(nutritions)

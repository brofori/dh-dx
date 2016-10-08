from django.http import HttpResponse


def illness_detail(request,ill_id):
    response = HttpResponse('bitch '+ill_id)
    return response

from django.http import HttpResponse


def activity_detail(request,act_id):
    response = HttpResponse('bitch '+act_id)
    return response

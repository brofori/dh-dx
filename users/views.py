from django.http import HttpResponse


def user_profile(request,user_id):
    response = HttpResponse('bitch '+user_id)
    return response

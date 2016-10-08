from django.http import HttpResponse


def user_profile(request, user_id):
    response = HttpResponse(str(user_id))
    return response

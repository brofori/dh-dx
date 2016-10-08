from django.http import HttpResponse
from users.models import User

def user_profile(request,user_id):
    user = User.objects.first(user_id)


    response = HttpResponse(user)
    response["Access-Control-Allow-Origin"] = "*"
    return response

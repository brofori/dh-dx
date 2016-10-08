from django.http import HttpResponse
from users.models import Users
from illnesses.models import Illnesses
from illnesses.views import illness_serializer
import json


def user_serializer(user):
    user = {
        'type': user.type,
        'start_date': user.start_date,
        'end_date': user.end_date,
        'therapy': user.therapy
    }
    return user


def users(request):
    users = Users.objects.all()
    users = [user_serializer(user) for user in users]
    response = HttpResponse(json.dumps(users))
    response["Access-Control-Allow-Origin"] = "http://localhost:3000"
    response["Content-Type"] = "application/json"
    return response


def user_profile(request, user_id):
    user = User.objects.first(user_id)

    response = HttpResponse(json.dumps(user_serializer(user)))
    response["Access-Control-Allow-Origin"] = "localhost:3000"
    response["Content-Type"] = "application/json"
    return response


def user_illness(request, user_id):
    illnesses = Illnesses.objects.find({'user_id': user_id})

    response = HttpResponse(json.dumps(illness_serializer(illnesses)))
    response["Access-Control-Allow-Origin"] = "localhost:3000"
    response["Content-Type"] = "application/json"
    return response

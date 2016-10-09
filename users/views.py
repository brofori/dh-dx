from django.http import HttpResponse
from users.models import Users
import json
from illnesses.models import Illnesses
from illnesses.views import illness_serializer
from activities.models import Activities
from activities.views import activities_serializer


def user_serializer(user):
    return {'email': user.email,
            'first_name': user.first_name,
            'last_name': user.last_name,
            'birthday': user.birthday,
            'gender': user.gender,
            'id':str(user.id)
            }


def user_profile(request, user_id):
    user = Users.objects.get(id=user_id).first()
    response = HttpResponse(user)
    response["Access-Control-Allow-Origin"] = "*"
    return response


def user_list(request):
    users = list(Users.objects.all())
    users = [user_serializer(user) for user in users]
    response = HttpResponse(json.dumps(users))
    response["Access-Control-Allow-Origin"] = "localhost:3000"
    response["Content-Type"] = "application/json"
    return response


def illnesses(request, user_id):
    illness_list = Illnesses.objects.all()
    illness_list = [illness_serializer(illness) for illness in illness_list if illness.user_id == user_id]
    response = HttpResponse(json.dumps(illness_list))
    response["Access-Control-Allow-Origin"] = "localhost:3000"
    response["Content-Type"] = "application/json"
    return response

def activities(request, user_id):
    illness_list = Activities.objects.all()
    illness_list = [activities_serializer(illness) for illness in illness_list if illness.user_id == user_id]
    response = HttpResponse(json.dumps(illness_list))
    response["Access-Control-Allow-Origin"] = "localhost:3000"
    response["Content-Type"] = "application/json"
    return response

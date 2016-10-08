from django.http import HttpResponse
from users.models import Users


def user_serializer(user):
    return {'email': user.email,
            'first_name': user.first_name,
            'last_name': user.last_name,
            'birthday': user.birthday,
            }


def user_profile(request, user_id):
    user = Users.objects.get(id=user_id).first()
    response = HttpResponse(user)
    response["Access-Control-Allow-Origin"] = "*"
    return response


def user_list(request):
    users = list(Users.objects.all())
    users = [user_serializer(user) for user in users]
    response = HttpResponse(users)
    response["Access-Control-Allow-Origin"] = "*"
    return response

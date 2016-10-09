from django.http import HttpResponse


def activities_serializer(activity):
    return {
        'name': activity.name,
        'type': activity.type,
        'time': activity.time,
        'user_id':activity.user_id,
        'used_calories': activity.used_calories
    }


def activity_detail(request, act_id):
    response = HttpResponse()
    return response

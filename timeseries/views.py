from django.http import JsonResponse
from timeseries.models import TimeSeries


def timeseries(request,start_date,end_date):
    measures = TimeSeries.objects(__raw__={'created_at': {
        '$gte': start_date,
        '$lt': end_date
    }})
    return JsonResponse(measures)
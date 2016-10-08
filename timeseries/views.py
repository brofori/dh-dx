from django.http import JsonResponse
from timeseries.models import TimeSeries




def timeseries(request,start_date,end_date):
    measures = TimeSeries.objects()
    return JsonResponse(measures)
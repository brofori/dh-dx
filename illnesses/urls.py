from django.conf.urls import url
from illnesses import views

urlpatterns = [
    url(regex=r'(?P<ill_id>\d+)/$',
        view=views.illness_detail,
        name='ill_detailview')
]
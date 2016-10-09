from django.conf.urls import url
from illnesses import views

urlpatterns = [
    url(regex=r'(?P<ill_id>[-\w.]+)/$',
        view=views.illness_detail),
    url(regex=r'',
        view=views.illnesses),
]
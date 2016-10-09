from django.conf.urls import url
from activities import views

urlpatterns = [
    url(regex=r'(?P<act_id>[-\w.]+)/$',view=views.activity_detail),
]
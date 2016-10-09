from django.conf.urls import url
from illnesses import views

urlpatterns = [
    url(regex=r'add/(?P<drug_id>[-\w.]+)/(?P<user_id>[-\w.]+)/$', view=views.add_drug),
    url(regex=r'(?P<ill_id>[-\w.]+)/$',
        view=views.illness_detail),
    url(regex=r'',
        view=views.illnesses),
]

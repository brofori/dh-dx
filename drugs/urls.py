from django.conf.urls import url
from drugs import views

urlpatterns = [
    url(regex=r'(?P<drug_id>[-\w.]+)/$', view=views.drug),
    url(regex=r'', view=views.drugs),
]

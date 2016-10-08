from django.conf.urls import url
from users import views

urlpatterns = [
    url(regex=r'(?P<drug_id>\d+)/$',view=views.drug),
    url(regex=r'', view=views.drugs),
]
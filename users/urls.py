from django.conf.urls import url
from users import views

urlpatterns = [
    url(regex=r'(?P<user_id>[-\w.]+)/illnesses/$', view=views.illnesses),
    url(regex=r'(?P<user_id>[-\w.]+)/activities/$', view=views.activities),
    url(regex=r'(?P<user_id>[-\w.]+)/$',view=views.user_profile),
    url(regex=r'$',view=views.user_list),
]
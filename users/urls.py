from django.conf.urls import url
from users import views

urlpatterns = [
    url(regex=r'(?P<user_id>\d+)/$',view=views.user_profile),
    url(regex=r'',view=views.users)
]
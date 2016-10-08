from django.conf.urls import url
from users import views

urlpatterns = [
    url(regex=r'$',
        view=views.user_list,
        name='user_listview'),
    url(regex=r'(?P<user_id>\d+)/$',
        view=views.user_profile,
        name='user_detailview')
]

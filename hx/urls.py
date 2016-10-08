from django.conf.urls import url
from hx import views

urlpatterns = [
url(regex=r'',
        view=views.HomepageView.as_view(),
        name='homepage_view'
        ),
]

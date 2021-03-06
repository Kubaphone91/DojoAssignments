from django.conf.urls import url
from . import views

urlpatterns = [
    url(r'^$', views.index, name='index'),
    url(r'^register$',views.register, name='register'),
    url(r'^login$', views.login, name='login'),
    url(r'^logout$', views.logout, name='logout'),
    url(r'^travels$', views.travels, name='travels'),
    url(r'^travels/add$', views.newTravel, name='newTravel'),
    url(r'^travels/create$', views.createTravel, name='createTravel'),
    url(r'^travels/destination/(?P<id>\d+)$', views.tripinfo, name='tripinfo'),
#    url(r'^travels/join$', views.join, name='join')

]

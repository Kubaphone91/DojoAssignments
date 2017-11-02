from django.conf.urls import url
from . import views

urlpatterns = [
    url(r'^$', views.index),
    url(r'^success$', views.success),
    url(r'^check$', views.check),
    url(r'^go_back$', views.go_back),
    url(r'^users/confirm/(?P<id>\d+)$', views.confirm),
    url(r'^users/destroy/(?P<id>\d+)$', views.destroy)
]

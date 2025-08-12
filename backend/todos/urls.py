from django.urls import path
from .views import TaskDetail,TaskViewSet

urlpatterns = [
    path('todos/',TaskViewSet.as_view(),name='todos-list'),
    path('todos/<int:pk>/', TodoDetail.as_view(), name='todo-detail'),
]

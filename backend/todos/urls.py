
from django.urls import path
from .views import TaskViewSet, TaskDetail

urlpatterns = [
    path('todos/', TaskViewSet.as_view({'get': 'list', 'post': 'create'}), name='todos-list'),
    path('todos/<int:pk>/', TaskDetail.as_view(), name='todo-detail'),
]

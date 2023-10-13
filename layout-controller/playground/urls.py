from django.urls import path
from . import views

# URLconfig
urlpatterns = [
    path('hello/', views.say_hello),
    path('project/', views.project),
    path('create-project/', views.create_project, name='create-project'),
    path('layouts/', views.layouts, name='layouts'),
    path('create-category/', views.create_category, name='create-category'),
    path('categories/', views.get_categories, name='categories'),
    path('layout/<int:layout_id>/', views.layout, name='get_layout'),
]


from django.urls import path
from base.views import order_views as views



urlpatterns = [
    
    path('', views.getOrders, name = 'orders-add'),
    path('add/', views.addOrderItems, name = 'orders-add'),
    path('myorders/', views.getMyOrders, name = 'orders-myorders'),
    
    path('<str:pk>/deliver/', views.updateOrderToDelivered, name = 'orders-delivered'),

    path('<str:pk>/', views.getOrderById, name = 'orders-add'),
    path('<str:pk>/pay/', views.updateOrderToPaid, name = 'orders-pay'),


]

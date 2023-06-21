from django.urls import path
from base.views import product_views as views



urlpatterns = [
    
    path('',views.getProducts,name = "products"),

    path('create/',views.createProduct,name = "create-products"),
    path('upload/',views.uploadImage,name = "upload-Image"),
    path('top/', views.getTopProducts, name='Top Products'),
    
    path('<str:pk>/reviews/',views.createProductReview,name = "product-review"),
    
    path('<str:pk>/',views.getProduct,name = "get-products"),


    path('update/<str:pk>/',views.updateProduct,name = "products-update"),
    path('delete/<str:pk>/',views.deleteProduct,name = "products-delete"),
]

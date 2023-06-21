from django.urls import path
from base.views import user_views as views



urlpatterns = [
    path('login/', views.MyTokenObtainPairView.as_view(),
         name='token_obtain_pair'),
    path('register/', views.registerUser, name='register-user'),
    path('profile/',views.getUserProfile,name = "users-profile-update"),
    path('profile/update/',views.updateUserProfile,
        name = "users-profile-update"),
    path('',views.getUsers,name = "users-profile"),

    path('<str:pk>/',views.getUsersById,name = "user"),
    path('update/<str:pk>/',views.updateUser,name = "users-update"),
    path('delete/<str:pk>/',views.deleteUser,name = "users-delete"),

    #always maintain the heirchy of the views specially for dynamic values.
]

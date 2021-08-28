from django.urls import path

from . import views


app_name = "image"

urlpatterns = [
    path("upload/", views.UploadImage.as_view(), name="upload_image_url")
]

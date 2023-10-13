from django.http import HttpResponse
from django.http import JsonResponse
from .logic.project import Project
from django.views.decorators.csrf import csrf_exempt
from .models import Category
from .models import Layout as LayoutModel
import json
import os
import glob


# Create your views here.
def say_hello(request):
    return HttpResponse("Hello world !")


@csrf_exempt
def create_category(request):
    if request.method == 'POST':
        try:
            # Get the data from the request
            data = json.loads(request.body)
            name = data.get('name')

            # Create a new Category instance and save it
            category = Category(name=name)
            category.save()

            # Return a success response
            return JsonResponse({'message': 'Category created successfully'})
        except Exception as e:
            return JsonResponse({'error': str(e)}, status=400)

    return JsonResponse({'error': 'Invalid request method'}, status=405)

def layout(request, layout_id):
    try:
        layout = LayoutModel.objects.get(id=layout_id)
        data = {
            'id': layout.id,
            'name': layout.name,
            'text_count': layout.text_count,
            'media_count': layout.media_count,
            'preview_img': layout.preview_img,
            'json_data': layout.json_data,
            'category': layout.category.name
        }
        return JsonResponse(data)
    except LayoutModel.DoesNotExist:
        return JsonResponse({'error': 'The layout does not exist'}, status=404)

def layouts(request):
    layouts = LayoutModel.objects.all()
    data = [{'id': layout.id, 'name': layout.name, 'text_count': layout.text_count} for layout in layouts]
    return JsonResponse(data, safe=False)

def get_categories(request):
    categories = Category.objects.all()
    data = [{'id': category.id, 'name': category.name} for category in categories]
    return JsonResponse(data, safe=False)

def project(request):
    project = Project()

    # Data
    project.name = "test"
    project.media_container = [
        "https://res.cloudinary.com/dr5jfzcjp/image/upload/v1692718271/fashion/JACK_JONES_ongoing_large_JJ_DNA_AW23-SS24_11b_SUPERIOR_xn9wkn.jpg",
        "https://res.cloudinary.com/dr5jfzcjp/image/upload/v1692715669/fashion/raf710790058_cwhite_v10020102wcf_10_a11odz.jpg",
        "https://res.cloudinary.com/dr5jfzcjp/image/upload/v1692357503/cld-sample-4.jpg",
        "https://res.cloudinary.com/dr5jfzcjp/image/upload/v1692357503/cld-sample-3.jpg",
        "https://res.cloudinary.com/dr5jfzcjp/image/upload/v1692357498/samples/smile.jpg",
        "https://res.cloudinary.com/dr5jfzcjp/image/upload/v1692357497/samples/balloons.jpg",
        "https://res.cloudinary.com/dr5jfzcjp/image/upload/v1692357484/samples/ecommerce/leather-bag-gray.jpg",
        "https://res.cloudinary.com/dr5jfzcjp/image/upload/v1692357479/samples/bike.jpg"]
    project.text = ["text01", "text02", "text03", "text04"]
    project.style = {
        "color": "#ff0000",
        "font": "arial",
    }

    project.create_video()
    return JsonResponse(project.source, safe=False)

@csrf_exempt
def create_project(request):
    if request.method == 'POST':
        try:
            # Parse the JSON data from the request body
            data = json.loads(request.body)
            # Handle the data as needed
            # ...
            new_project = Project()
            new_project.name = data["name"]
            new_project.media_container = data["media_container"]
            new_project.text = data["text"]
            new_project.style = data["style"]

            # Get layouts
            layouts = []
            for layout_id in data["layouts"]:
                layout = LayoutModel.objects.get(id=layout_id)
                layouts.append(layout.json_data)

            new_project.layouts = layouts
            new_project.create_video()

            return JsonResponse(new_project.source, safe=False, status=201)  # 201 Created
        except json.JSONDecodeError as e:
            return JsonResponse({"error": "Invalid JSON data"}, status=400)  # 400 Bad Request
    else:
        return JsonResponse({"error": "Method not allowed"}, status=405)  # Method Not Allowed for other HTTP methods
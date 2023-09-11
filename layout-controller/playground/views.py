from django.http import HttpResponse
from django.http import JsonResponse
from .logic.project import Project
from django.views.decorators.csrf import csrf_exempt
import json
import os
import glob


# Create your views here.
def say_hello(request):
    return HttpResponse("Hello world !")


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

def layouts(request):
    directory_path = os.path.join(os.path.dirname(os.path.abspath(__file__)), 'layouts')

    json_files = glob.glob(os.path.join(directory_path, '*.json'))
    files = [os.path.basename(file) for file in json_files]

    return JsonResponse({"files": files}, safe=False)

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
            new_project.layouts = data["layouts"]
            new_project.create_video()

            return JsonResponse(new_project.source, safe=False, status=201)  # 201 Created
        except json.JSONDecodeError as e:
            return JsonResponse({"error": "Invalid JSON data"}, status=400)  # 400 Bad Request
    else:
        return JsonResponse({"error": "Method not allowed"}, status=405)  # Method Not Allowed for other HTTP methods
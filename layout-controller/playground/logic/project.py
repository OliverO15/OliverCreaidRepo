import json
import uuid
from .scene import Scene


class Project:

    def __init__(self):
        self._id = uuid.uuid4()
        self.name = ""
        self.source = ""
        self.duration = 12
        self.scenes = []
        self.media_container = []
        self.text = []
        self.style = {}
        self.layouts = []

    def create_video(self):
        for i in range(4):
            self.generate_scene(round(self.duration / 4) * i, i+1, self.layouts[i])

        self.to_json()

    def generate_scene(self, start, track, layout):
        """Fill scenes with data"""
        scene = Scene(start, track, self.style, self.media_container, self.text, layout)
        scene.set_source()
        self.scenes.append(scene)

    def to_json(self):
        """Generate source"""
        # Scenes to dict
        scenes = []
        for scene in self.scenes:
            scenes.append(scene.source)

        source = {
            "output_format": "mp4",
            "width": 1280,
            "height": 720,
            "duration": self.duration,
            "elements": scenes
        }

        self.source = source

    def __str__(self):
        return self.source



def main():
    # Create test cases
    project = Project()

    # Data
    project.name = "test"
    project.media_container = ["image01.png", "image02.png", "video01.mp4", "video02.mp4",
                               "image03.png", "image04.png", "video03.mp4", "video04.mp4"]
    project.text = ["text01", "text02", "text03", "text04"]
    project.style = {
        "color": "#ff0000",
        "font": "arial",
    }

    project.create_video()
    print(project.source)

if __name__ == '__main__':
    main()






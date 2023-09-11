import json
import os
from .layout import Layout


class Scene:

    def __init__(self, time, track, style, media, text, layout):
        self._id = "01"
        self.time = time
        self.track = track
        self.style = style
        self.media_elements = media
        self.text_elements = text
        self.source = {}
        self.layout = self.select_layout(layout)

    def select_layout(self, layout_name):
        """Find and init layout"""
        # Get the absolute path of the current script
        script_dir = os.path.dirname(os.path.abspath(__file__))

        # Construct the relative path to the JSON file
        relative_path = os.path.join(script_dir, f'../layouts/{layout_name}')

        new_layout = Layout(self.style, self.media_elements, self.text_elements, relative_path)
        return new_layout

    def print_layout(self):
        """Print layout"""
        for element in self.layout.source:
            print(str(element))

    def set_source(self):
        """Set source"""
        elements = self.layout.source
        source = {
            "time": f"{self.time} s",
            "track": self.track,
            "type": "composition",
            "duration": "5 s",
            "elements": elements
        }

        self.source = source
        return source

    def __str__(self):
        return str(self.layout)


def main():
    media = ["image01.png", "image02.png", "video01.mp4", "video02.mp4"]
    text = ["text01"]
    style = {
        "color": "red",
        "font": "arial",
    }

    scene = Scene(1, 0, style, media, text)
    scene.set_source()
    print(scene.source)

if __name__ == '__main__':
    main()

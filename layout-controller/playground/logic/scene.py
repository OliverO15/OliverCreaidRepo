import json
import os
from .layout import Layout
# from ..models import Layout as LayoutModel


class Scene:

    def __init__(self, time, track, style, media, text, layout):
        self._id = "01"
        self.time = time
        self.track = track
        self.style = style
        self.media_elements = media
        self.text_elements = text
        self.source = {}
        self.layout = Layout(style, media, text, layout)

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

    scene = Scene(1, 0, style, media, text, "layout01.json")
    scene.set_source()
    print(scene.source)

if __name__ == '__main__':
    main()

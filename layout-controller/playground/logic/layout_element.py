import json

class LayoutElement:

    def __init__(self, element):
        self.layout_properties = element
        self.animation = None

    def set_source(self, source):
        """Set source in json"""
        self.layout_properties["source"] = source

        # Type Check
        if source.endswith(".mp4"):
            self.layout_properties["type"] = "video"
        elif source.endswith(".png"):
            self.layout_properties["type"] = "image"
        elif source.endswith(".jpg"):
            self.layout_properties["type"] = "image"

    def set_text(self, text, font, color):
        """Set text in json"""
        self.layout_properties["text"] = text
        self.layout_properties["font_family"] = font
        self.layout_properties["fill_color"] = color

    def set_shape(self, color):
        """Set shape in json"""
        self.layout_properties["fill_color"] = color

    def send_json(self):
        """Send json"""
        return self.layout_properties

    def set_animation(self):
        """Generate animation"""
        return None

    def __str__(self):
        return "idk"


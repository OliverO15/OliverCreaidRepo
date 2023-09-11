import json
from .layout_element import LayoutElement


class Layout:

    def __init__(self, style, media, text, json_source):
        self._id = "01"
        self.name = ""
        self.tags = []
        self.scene_assets = {
            "style": style,
            "media": media,
            "text": text
        }
        self.json = self.convert_source(json_source)
        self.source = self.generate_elements()

    def convert_source(self, file):
        """Convert json to layout"""
        # Open the JSON file for reading
        with open(file, 'r') as json_file:
            # Load the JSON data from the file into a Python dictionary
            data = json.load(json_file)
            return data

    def generate_elements(self):
        """Generate layout elements from json"""
        elements = self.json["elements"]
        ret_elements = []

        for element in elements:
            layout_element = LayoutElement(element)
            if element["type"] == "image" or element["type"] == "video":
                input_media = self.scene_assets["media"].pop(0)
                layout_element.set_source(input_media)
            elif element["type"] == "text":
                input_text = self.scene_assets["text"].pop(0)
                layout_element.set_text(input_text, self.scene_assets["style"]["font"], self.scene_assets["style"]["color"])
            elif element["type"] == "shape":
                layout_element.set_shape(self.scene_assets["style"]["color"])

            ret_elements.append(layout_element.send_json())

        return ret_elements


    def __str__(self):
        return str(self.source)


# json_file = "../layouts/layout01.json"
# layout = Layout("style", "media", "text", json_file)
#
# # print(layout)
# layout.generate_elements()


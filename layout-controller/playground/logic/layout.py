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
        self.json = json_source
        self.source = self.generate_elements()

    def generate_elements(self):
        """Generate layout elements from json"""
        elements = self.json["elements"]
        ret_elements = []

        for element in elements:
            layout_element = LayoutElement(element)
            if element["type"] == "image" or element["type"] == "video":
                input_media = self.scene_assets["media"].pop(0)
                layout_element.set_source(input_media)
                layout_element.set_animation('scale')
            elif element["type"] == "text":
                input_text = self.scene_assets["text"].pop(0)
                layout_element.set_text(input_text, self.scene_assets["style"]["font"], self.scene_assets["style"]["font_color"])
                layout_element.set_animation('text', True)
            elif element["type"] == "shape":
                layout_element.set_shape(self.scene_assets["style"]["main_color"])

            ret_elements.append(layout_element.send_json())

        return ret_elements


    def __str__(self):
        return str(self.source)










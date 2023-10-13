import json
from .animation import Animation
from ..models import Animation as AnimationModel


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

    def set_animation(self, type, direction=False):
        """Generate animation"""
        sel_anim = self._find_animation(type)
        if direction:
            x = self.layout_properties["x"].split("%")[0]
            y = self.layout_properties["x"].split("%")[0]
            sel_anim["direction"] = self._calc_animation_direction(float(x), float(y))
        self.layout_properties["animations"] = [sel_anim]


    def _find_animation(self, type):
        """Find animation"""
        animations_filtered = AnimationModel.objects.filter(type=type)
        randomized_animations = animations_filtered.order_by('?')
        animation = randomized_animations.first()

        return animation.json_data

    def _calc_animation_direction(self, x, y):
        """Calculate animation direction"""
        # Top Left
        if 0 < x < 25 and 0 < y < 25:
            return "right"
        # Top Center
        elif 25 < x < 65 and 0 < y < 25:
            return "down"
        # Top Right
        elif 65 < x and 0 < y < 25:
            return "left"
        # Center Left
        elif 0 < x < 25 and 25 < y < 65:
            return "right"
        # Center
        elif 25 < x < 65 and 25 < y < 65:
            return "up"
        # Center Right
        elif 65 < x and 25 < y < 65:
            return "left"
        # Bottom Left
        elif 0 < x < 25 and 65 < y:
            return "right"
        # Bottom Center
        elif 25 < x < 65 and 65 < y:
            return "up"
        # Bottom Right
        elif 65 < x and 65 < y:
            return "left"
        else:
            return "left"

    def __str__(self):
        return "idk"




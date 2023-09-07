// Logo Reveal
const logo_reveal = (logo, start, track) => {
    // Input Validation

    // Tempalte
    const template =  {
        "name": "EndSlide",
        "type": "composition",
        "track": track,
        "time": `${start} s`,
        "duration": "2 s",
        "elements": [
          {
            "id": "bae9506d-ea9f-44a8-8d7f-463dc0cc1f57",
            "type": "shape",
            "track": 1,
            "time": "0 s",
            "width": "100%",
            "height": "100%",
            "x_anchor": "50%",
            "y_anchor": "50%",
            "fill_color": "#333333",
            "path": "M 0 0 L 100 0 L 100 100 L 0 100 L 0 0 Z"
          },
          {
            "type": "image",
            "track": 2,
            "time": "0 s",
            "width": "31.25%",
            "height": "14.5833%",
            "clip": true,
            "animations": [
              {
                "easing": "linear",
                "type": "scale",
                "fade": false,
                "scope": "element",
                "end_scale": "105%",
                "start_scale": "100%"
              },
              {
                "time": "start",
                "duration": "1 s",
                "easing": "quadratic-out",
                "type": "wipe",
                "x_anchor": "100%"
              }
            ],
            "source": logo
          }
        ]
      };

    return template
}

module.exports = { logo_reveal };
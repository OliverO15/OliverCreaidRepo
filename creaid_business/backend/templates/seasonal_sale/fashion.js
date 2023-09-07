// Assets
const transition = require('../transitions');
const outro = require('../outro');

// Helper Functions
const getOptions = () => {
  const currOptions = {
    "Clean Two Images": "clean_twoImages",
    "One Pager 01": "onepager_01",
    "One Pager 02": "onepager_02",
  };

  return currOptions
}

// Templates
const clean_twoImages = (images, text, main_color, secondary_color, text_color) => {
  // Input Validation

  // Swipes
  const swipes = [
    "https://res.cloudinary.com/dr5jfzcjp/video/upload/v1692876685/fashion/Overlay_Swipe_TiltLeft_ped1cs.mp4"
  ];

  const sidebyside_swipe = (track, start, images, swipe, text) => {
      // Input Validation
  
      // Tempalte
      const template =   {
          "name": "sidebyside_swipe",
          "type": "composition",
          "track": track,
          "duration": "5 s",
          "time": `${start} s`,
          "elements": [
            {
              "type": "image",
              "track": 1,
              "time": "0 s",
              "dynamic": true,
              "x": "73.7723%",
              "width": "60.4091%",
              "height": "105.2882%",
              "x_scale": "90%",
              "y_scale": "90%",
              "animations": [
                {
                  "time": "start",
                  "duration": "5.6867 s",
                  "easing": "quadratic-out",
                  "type": "scale",
                  "fade": false,
                  "end_scale": "110%",
                  "start_scale": "120%"
                }
              ],
              "source": `${images[0]}`,
            },
            {
              "type": "image",
              "track": 2,
              "time": "0 s",
              "dynamic": true,
              "x": "21.9381%",
              "width": "54.0348%",
              "animations": [
                {
                  "time": "start",
                  "duration": "5.7057 s",
                  "type": "scale",
                  "fade": false,
                  "end_scale": "110%",
                  "start_scale": "100%"
                }
              ],
              "source": `${images[1]}`
            },
            {
              "type": "image",
              "track": 4,
              "time": "1 s",
              "dynamic": true,
              "x": "73.7723%",
              "y": "52.7379%",
              "width": "79.6897%",
              "height": "145.6516%",
              "x_scale": "90%",
              "y_scale": "90%",
              "source": `${images[0]}`,
            },
            {
              "type": "video",
              "track": 5,
              "time": "1 s",
              "duration": null,
              "mask_mode": "luma",
              "source": `${swipe}`,
            },
            {
              "type": "image",
              "track": 6,
              "time": "1 s",
              "dynamic": true,
              "x": "16.6159%",
              "width": "68.9179%",
              "height": "148.7051%",
              "source": `${images[1]}`
            },
            {
              "id": "880af54f-0c10-4364-a7af-c6cd4d445ab8",
              "type": "video",
              "track": 7,
              "time": "1 s",
              "duration": null,
              "mask_mode": "luma",
              "source": `${swipe}`,
            },
            {
              "id": "5e4cd138-3276-403c-a41b-dbec288f8814",
              "type": "text",
              "track": 8,
              "time": "1 s",
              "x": "4.4825%",
              "y": "64.7975%",
              "width": "43.6425%",
              "height": "28.5416%",
              "x_anchor": "0%",
              "y_anchor": "0%",
              "y_alignment": "100%",
              "fill_color": text_color,
              "shadow_color": "rgba(0,0,0,0.7)",
              "shadow_blur": "2 vmin",
              "shadow_x": "1 vmin",
              "shadow_y": "1 vmin",
              "animations": [
                {
                  "time": "start",
                  "duration": "0.65 s",
                  "easing": "cubic-bezier(0.56, 0.12, 0.46, 0.94)",
                  "type": "text-appear",
                  "split": "letter"
                }
              ],
              "text": text,
              "font_family": "Be Vietnam",
              "font_size_maximum": "12 vmin"
            }
          ]
      }
  
      return template
  }
  
  const left_big = (track, start, images, text) => {
      // Input Validation
  
      // Tempalte
      const template = {
          "name": "left_big",
          "type": "composition",
          "track": track,
          "duration": "5 s",
          "time": `${start} s`,
          "elements": [
            {
              "id": "17f491d6-ddcb-4732-ba23-bef21612f04b",
              "type": "image",
              "track": 1,
              "time": "0 s",
              "duration": "4.9672 s",
              "x": "78.7954%",
              "width": "42.4091%",
              "clip": true,
              "animations": [
                {
                  "easing": "cubic-bezier(0.4, 0.25, 0.54, 0.63)",
                  "type": "scale",
                  "scope": "element",
                  "start_scale": "105%",
                  "fade": false
                }
              ],
              "source": `${images[0]}`
            },
            {
              "id": "95c399b5-7499-4e0e-934d-99bf61fd844c",
              "type": "image",
              "track": 2,
              "time": "0 s",
              "duration": "4.9672 s",
              "x": "28.3494%",
              "y": "48.7851%",
              "width": "62.7044%",
              "height": "105.6695%",
              "animations": [
                {
                  "easing": "cubic-bezier(0.37, 0.25, 0.57, 0.68)",
                  "type": "scale",
                  "scope": "element",
                  "start_scale": "100%",
                  "end_scale": "110%",
                  "fade": false
                }
              ],
              "source": `${images[1]}`
            },
            {
              "id": "08e60b21-22e8-429b-a265-510db3c0f1e6",
              "type": "text",
              "track": 3,
              "time": "1 s",
              "x": "52.0645%",
              "y": "63.9642%",
              "width": "43.6425%",
              "height": "28.5416%",
              "x_anchor": "0%",
              "y_anchor": "0%",
              "x_alignment": "100%",
              "y_alignment": "100%",
              "fill_color": text_color,
              "shadow_color": "rgba(0,0,0,0.7)",
              "shadow_blur": "2 vmin",
              "shadow_x": "1 vmin",
              "shadow_y": "1 vmin",
              "animations": [
                {
                  "time": "start",
                  "duration": "0.65 s",
                  "easing": "cubic-bezier(0.56, 0.12, 0.46, 0.94)",
                  "type": "text-appear",
                  "split": "letter"
                }
              ],
              "text": text,
              "font_family": "Be Vietnam",
              "font_size_maximum": "12 vmin"
            }
          ]
        }
  
      return template
  }
  
  const right_big = (track, start, images, text) => {
      // Input Validation
  
      // Tempalte
      const template = {
          "name": "right_big",
          "type": "composition",
          "track": track,
          "duration": "5 s",
          "time": `${start} s`,
          "elements": [
            {
              "id": "4b06fdd6-4945-45ac-b75f-d86b2a0fd753",
              "type": "image",
              "track": 1,
              "time": "0 s",
              "x": "19.417%",
              "width": "42.4091%",
              "clip": true,
              "animations": [
                {
                  "easing": "cubic-bezier(0.4, 0.25, 0.54, 0.63)",
                  "type": "scale",
                  "scope": "element",
                  "start_scale": "105%",
                  "fade": false
                }
              ],
              "source": `${images[0]}`,
            },
            {
              "id": "fcf94e89-6d85-4671-8ed6-6425a99782aa",
              "type": "image",
              "track": 2,
              "time": "0 s",
              "x": "68.6478%",
              "y": "49.6653%",
              "width": "62.7044%",
              "height": "105.6695%",
              "animations": [
                {
                  "easing": "cubic-bezier(0.37, 0.25, 0.57, 0.68)",
                  "type": "scale",
                  "scope": "element",
                  "start_scale": "100%",
                  "end_scale": "110%",
                  "fade": false
                }
              ],
              "source": `${images[1]}`,
            },
            {
              "id": "5e4cd138-3276-403c-a41b-dbec288f8815",
              "type": "text",
              "track": 8,
              "time": "1 s",
              "x": "4.4825%",
              "y": "64.7975%",
              "width": "43.6425%",
              "height": "28.5416%",
              "x_anchor": "0%",
              "y_anchor": "0%",
              "y_alignment": "100%",
              "fill_color": text_color,
              "shadow_color": "rgba(0,0,0,0.7)",
              "shadow_blur": "2 vmin",
              "shadow_x": "1 vmin",
              "shadow_y": "1 vmin",
              "animations": [
                {
                  "time": "start",
                  "duration": "0.65 s",
                  "easing": "cubic-bezier(0.56, 0.12, 0.46, 0.94)",
                  "type": "text-appear",
                  "split": "letter"
                }
              ],
              "text": text,
              "font_family": "Be Vietnam",
              "font_size_maximum": "12 vmin"
            }
          ]
        }
  
      return template
  }
  
  const left_big_swipe = (track, start, images, swipe, text) => { 
      // Input Validation
  
      // Tempalte
      const template =   {
          "name": "left_big_swipe",
          "type": "composition",
          "track": track,
          "duration": "5 s",
          "time": `${start} s`,
          "elements": [
            {
              "id": "6eeb02e4-498f-4c7c-a6b1-aa1cac144f55",
              "type": "image",
              "track": 1,
              "time": "0 s",
              "dynamic": true,
              "x": "81.2627%",
              "y": "48.6013%",
              "width": "46.637%",
              "height": "112.4344%",
              "x_scale": "90%",
              "y_scale": "90%",
              "animations": [
                {
                  "time": "start",
                  "duration": "5.6867 s",
                  "easing": "quadratic-out",
                  "type": "scale",
                  "fade": false,
                  "end_scale": "110%",
                  "start_scale": "120%"
                }
              ],
              "source": `${images[0]}`,
            },
            {
              "id": "2a0a1765-cd27-4636-a701-8aab7f0e01d2",
              "type": "image",
              "track": 2,
              "time": "0 s",
              "dynamic": true,
              "x": "28.6501%",
              "width": "60.244%",
              "height": "112.5741%",
              "animations": [
                {
                  "time": "start",
                  "duration": "5.7057 s",
                  "type": "scale",
                  "fade": false,
                  "end_scale": "110%",
                  "start_scale": "100%"
                }
              ],
              "source": `${images[1]}`,
            },
            {
              "id": "36cf660d-7681-44ac-96f5-0f776e192e60",
              "type": "image",
              "track": 4,
              "time": "1 s",
              "duration": "4.65 s",
              "dynamic": true,
              "x": "78.3014%",
              "width": "74.7888%",
              "height": "128.6169%",
              "x_scale": "90%",
              "y_scale": "90%",
              "source": `${images[0]}`
            },
            {
              "id": "a85901ac-bf91-4739-a98c-4f117a3f89ce",
              "type": "video",
              "track": 5,
              "time": "1 s",
              "duration": "4.65 s",
              "x_scale": "-100%",
              "mask_mode": "luma",
              "source": swipe
            },
            {
              "id": "534d3b5f-e60c-4ca9-b7cc-7d2af4f8a839",
              "type": "image",
              "track": 6,
              "time": "1 s",
              "duration": "4.65 s",
              "dynamic": true,
              "x": "25.4485%",
              "y": "57.8501%",
              "width": "66.3064%",
              "height": "114.3694%",
              "animations": [
                {
                  "time": "start",
                  "duration": "4.5357 s",
                  "type": "scale",
                  "fade": false,
                  "end_scale": "110%",
                  "start_scale": "100%"
                }
              ],
              "source": `${images[1]}`,
            },
            {
              "id": "4a99a4d6-89e9-4f73-9ed9-c49f482d36f7",
              "type": "video",
              "track": 7,
              "time": "1 s",
              "duration": "4.65 s",
              "x_scale": "-100%",
              "mask_mode": "luma",
              "source": swipe
            },
            {
              "id": "f8e60c7d-2c27-4b96-8d92-f472a417a75e",
              "type": "text",
              "track": 7,
              "time": "1 s",
              "x": "52.5294%",
              "y": "7.2975%",
              "width": "43.6425%",
              "height": "28.5416%",
              "x_anchor": "0%",
              "y_anchor": "0%",
              "x_alignment": "100%",
              "fill_color": text_color,
              "shadow_color": "rgba(0,0,0,0.7)",
              "shadow_blur": "2 vmin",
              "shadow_x": "1 vmin",
              "shadow_y": "1 vmin",
              "animations": [
                {
                  "time": "start",
                  "duration": "0.65 s",
                  "easing": "cubic-bezier(0.56, 0.12, 0.46, 0.94)",
                  "type": "text-appear",
                  "split": "letter"
                }
              ],
              "text": text,
              "font_family": "Be Vietnam",
              "font_size_maximum": "12 vmin"
            }
          ]
        };
  
      return template
  }

  // Generate Video
  const generateVideo = () => {
    let time = 0;
    let selectedImage = 0;
    let scenes = [];

    const templates = [
      (i, time, selectedImage, text) => sidebyside_swipe(i + 1, time, [images[selectedImage], images[selectedImage + 1]], getRandomItem(swipes), text[i]),
      (i, time, selectedImage, text) => left_big(i + 1, time, [images[selectedImage], images[selectedImage + 1]], text[i]),
      (i, time, selectedImage, text) => right_big(i + 1, time, [images[selectedImage], images[selectedImage + 1]], text[i]),
      (i, time, selectedImage, text) => left_big_swipe(i + 1, time, [images[selectedImage], images[selectedImage + 1]], getRandomItem(swipes), text[i])
    ];

    const getRandomItem = (list) => {
      const randomIndex = Math.floor(Math.random() * list.length);
      return list[randomIndex];
  }
  
    for (let i = 0; i < 4; i++) {
        // Add Scene Random
        // const randomSceneIndex = Math.floor(Math.random() * templates.length);
        // const randomSceneFunction = templates[randomSceneIndex];
        // scenes.push(randomSceneFunction(i, time, selectedImage, text));

        // Add Scene Manual
        const manualSceneFunction = templates[i];
        scenes.push(manualSceneFunction(i, time, selectedImage, text));
  
        time += 2.5;
        selectedImage += 2;
  
        // Add Transition
        if (i != 4 - 1) {
            scenes.push(transition.normal_transition(time, i + 3, 150));
        }
    }

    return scenes;
  }

  return generateVideo();

};

const onepager_01 = (images, text, main_color, secondary_color, text_color) => {
  // Input Validation

  // Tempalte
  const template = [{
    "id": "cb01f029-ec65-4ad7-9236-fceca35f5a4e",
    "type": "image",
    "track": 1,
    "time": "0 s",
    "duration": "3.495 s",
    "x": "58.0901%",
    "width": "55.5358%",
    "clip": true,
    "animations": [
      {
        "easing": "linear",
        "type": "scale",
        "fade": false,
        "scope": "element",
        "end_scale": "105%",
        "start_scale": "100%"
      }
    ],
    "source": images[0]
  },
  {
    "id": "252249f1-35ce-4a05-9fd2-0f093315f748",
    "type": "image",
    "track": 1,
    "time": "2.495 s",
    "duration": "3.67 s",
    "x": "58.9262%",
    "y": "49.8901%",
    "width": "57.2082%",
    "clip": true,
    "animations": [
      {
        "time": "0 s",
        "duration": "1 s",
        "transition": true,
        "type": "wipe",
        "fade": false,
        "x_anchor": "100%"
      },
      {
        "time": "start",
        "duration": "3.647 s",
        "easing": "linear",
        "type": "scale",
        "fade": false,
        "scope": "element",
        "end_scale": "110%",
        "start_scale": "100%"
      }
    ],
    "source": images[1]
  },
  {
    "id": "41d7e597-97e8-4a20-b31b-dd436cb3f252",
    "type": "image",
    "track": 1,
    "time": "4.995 s",
    "duration": "3.637 s",
    "x": "58.9262%",
    "y": "49.8901%",
    "width": "57.2082%",
    "clip": true,
    "animations": [
      {
        "time": "0 s",
        "duration": "1.17 s",
        "transition": true,
        "type": "wipe",
        "fade": false
      },
      {
        "time": "start",
        "duration": "3.647 s",
        "easing": "linear",
        "type": "scale",
        "fade": false,
        "scope": "element",
        "end_scale": "110%",
        "start_scale": "100%"
      }
    ],
    "source": images[2]
  },
  {
    "id": "6bc288dc-5576-4e87-9cab-03a83505dd5d",
    "type": "image",
    "track": 1,
    "time": "7.502 s",
    "x": "58.9262%",
    "y": "49.8901%",
    "width": "57.2082%",
    "clip": true,
    "animations": [
      {
        "time": "0 s",
        "duration": "1.13 s",
        "transition": true,
        "type": "wipe",
        "fade": false,
        "x_anchor": "0%",
        "end_angle": "90°",
        "start_angle": "90°"
      },
      {
        "time": "start",
        "duration": "3.647 s",
        "easing": "linear",
        "type": "scale",
        "fade": false,
        "scope": "element",
        "end_scale": "110%",
        "start_scale": "100%"
      }
    ],
    "source": images[3]
  },
  {
    "id": "a8c92ad1-d513-421d-a017-653e7518ecd5",
    "name": "Box_Left",
    "type": "shape",
    "track": 2,
    "dynamic": true,
    "x": "15.1611%",
    "width": "30.3221%",
    "height": "100%",
    "x_anchor": "50%",
    "y_anchor": "50%",
    "fill_color": main_color,
    "path": "M 0 0 L 100 0 L 100 100 L 0 100 L 0 0 Z"
  },
  {
    "id": "ec6d2d0e-c3d6-46b8-8a84-7d7c67e66b13",
    "name": "Box_TopRight",
    "type": "shape",
    "track": 3,
    "time": "0 s",
    "duration": "10 s",
    "dynamic": true,
    "x": "92.929%",
    "y": "12.8571%",
    "width": "14.142%",
    "height": "25.7143%",
    "x_anchor": "50%",
    "y_anchor": "50%",
    "fill_color": secondary_color,
    "path": "M 0 0 L 100 0 L 100 100 L 0 100 L 0 0 Z"
  },
  {
    "id": "5465470b-9c4a-4371-9106-519bc49ae101",
    "name": "Box_Right",
    "type": "shape",
    "track": 4,
    "time": "0 s",
    "dynamic": true,
    "x": "92.929%",
    "y": "62.8571%",
    "width": "14.142%",
    "height": "74.2857%",
    "x_anchor": "50%",
    "y_anchor": "50%",
    "fill_color": main_color,
    "path": "M 0 0 L 100 0 L 100 100 L 0 100 L 0 0 Z"
  },
  {
    "id": "49d8e8ca-c6eb-49af-848d-cd2316bf9755",
    "name": "Frame",
    "type": "shape",
    "track": 5,
    "time": "0 s",
    "duration": "10 s",
    "dynamic": true,
    "x": "58.09%",
    "y": "49.8901%",
    "width": "55.5358%",
    "height": "97.1427%",
    "x_anchor": "50%",
    "y_anchor": "50%",
    "stroke_color": secondary_color,
    "stroke_width": "3 vmin",
    "stroke_join": "miter",
    "path": "M 0 0 L 100 0 L 100 100 L 0 100 L 0 0 Z"
  },
  {
    "id": "686e9620-a645-4850-9b75-5088c00e4365",
    "name": "MiddleMessage",
    "type": "composition",
    "track": 6,
    "time": "1.7 s",
    "x": "58.0901%",
    "y": "86.6052%",
    "width": "25.8929%",
    "height": "11.1111%",
    "animations": [
      {
        "time": "start",
        "duration": "1.24 s",
        "easing": "cubic-bezier(0.29, 0.52, 0.58, 0.9)",
        "type": "slide",
        "direction": "90°"
      }
    ],
    "elements": [
      {
        "id": "07c903aa-9d82-4796-a1e5-bdef544c6444",
        "type": "shape",
        "track": 1,
        "time": "0 s",
        "dynamic": true,
        "width": "100%",
        "height": "100%",
        "x_anchor": "50%",
        "y_anchor": "50%",
        "fill_color": "rgba(255,255,255,0.3)",
        "stroke_color": secondary_color,
        "stroke_width": "1 vmin",
        "path": "M 0 0 L 100 0 L 100 100 L 0 100 L 0 0 Z"
      },
      {
        "id": "48d294f6-8e75-40ad-9ae6-1a422b6a17c8",
        "type": "text",
        "track": 2,
        "time": "0 s",
        "dynamic": true,
        "x": "8.7532%",
        "y": "7.8575%",
        "width": "82.4937%",
        "height": "83.1115%",
        "x_anchor": "0%",
        "y_anchor": "0%",
        "x_alignment": "50%",
        "y_alignment": "50%",
        "fill_color": text_color,
        "text": text[1],
        "font_family": "Alata"
      }
    ]
  },
  {
    "id": "a5a8b549-ac7b-47e7-befa-3523b62081ff",
    "type": "text",
    "track": 7,
    "dynamic": true,
    "x": "89.3237%",
    "y": "31.7723%",
    "width": 92.2948,
    "height": 345.3017,
    "x_anchor": "0%",
    "y_anchor": "0%",
    "x_alignment": "50%",
    "fill_color": text_color,
    "animations": [
      {
        "time": "start",
        "duration": "1 s",
        "easing": "quadratic-out",
        "type": "text-wave",
        "split": "letter",
        "overlap": "50%"
      }
    ],
    "text": text[2],
    "font_family": "Alata",
    "font_size": "7 vmin"
  },
  {
    "id": "37571776-0567-4a2c-8de7-8cd8b46127c9",
    "type": "text",
    "track": 8,
    "dynamic": true,
    "x": "88.4582%",
    "y": "85.5062%",
    "width": "9.654%",
    "height": "9.4402%",
    "x_anchor": "0%",
    "y_anchor": "0%",
    "x_alignment": "50%",
    "fill_color": text_color,
    "animations": [
      {
        "time": "start",
        "duration": "1 s",
        "easing": "quadratic-out",
        "type": "text-reveal",
        "axis": "x",
        "split": "line",
        "x_anchor": "0%"
      }
    ],
    "text": text[3],
    "font_family": "Alata"
  },
  {
    "id": "12e050ef-05fe-46d3-910d-48deb55c91ba",
    "type": "text",
    "track": 9,
    "dynamic": true,
    "x": "2.8438%",
    "y": "6.3009%",
    "width": "22.8895%",
    "height": "13.1769%",
    "x_anchor": "0%",
    "y_anchor": "0%",
    "fill_color": text_color,
    "animations": [
      {
        "time": "start",
        "duration": "1 s",
        "easing": "quadratic-out",
        "type": "text-slide",
        "scope": "element",
        "split": "line",
        "distance": "200%",
        "direction": "right",
        "background_effect": "disabled"
      }
    ],
    "text": text[0],
    "font_family": "Alata"
  },
  {
    "id": "f9f7ce33-9c54-4ec4-bd8b-753f009f1550",
    "type": "text",
    "track": 10,
    "time": "0 s",
    "duration": "10 s",
    "dynamic": true,
    "x": "3.7163%",
    "y": "25.7143%",
    "width": "22.8895%",
    "height": "24.6067%",
    "x_anchor": "0%",
    "y_anchor": "0%",
    "fill_color": text_color,
    "animations": [
      {
        "time": "start",
        "duration": "1 s",
        "easing": "quadratic-out",
        "type": "text-slide",
        "scope": "element",
        "split": "line",
        "distance": "200%",
        "direction": "up",
        "background_effect": "disabled"
      }
    ],
    "text": text[1],
    "font_family": "Alata",
    "font_size_maximum": "5 vmin"
  },
  {
    "id": "3d176089-68f9-4339-82b6-1d715edcb358",
    "type": "shape",
    "track": 11,
    "time": "0 s",
    "duration": "10 s",
    "dynamic": true,
    "x": "15.1611%",
    "y": "87.1429%",
    "width": "30.3222%",
    "height": "25.7143%",
    "x_anchor": "50%",
    "y_anchor": "50%",
    "fill_color": secondary_color,
    "path": "M 0 0 L 100 0 L 100 100 L 0 100 L 0 0 Z"
  }];

  // Generate video
  return template
}

const onepageer_02 = (images, text, main_color, secondary_color, text_color) => {};

const twoImageBanner_01 = (images, text, main_color, secondary_color, text_color) => {};

const threeImageBanner_01 = (images, text, main_color, secondary_color, text_color) => {};

module.exports = { getOptions, clean_twoImages, onepager_01};
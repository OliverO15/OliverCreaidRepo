import './scripts.js'

const playButton = document.getElementById('test-button');
const stopButton = document.getElementById('stop');
const timeButton = document.getElementById('newTime');
let preview; 
const previewJson = {
    "output_format": "mp4",
    "width": 1280,
    "height": 720,
    "frame_rate": "25 fps",
    "duration": "12 s",
    "snapshot_time": "3.67 s",
    "elements": [
      {
        "id": "f999727d-8052-4292-a5f3-a7f7a2efe311",
        "name": "Music",
        "type": "audio",
        "track": 1,
        "time": "0 s",
        "duration": null,
        "source": "023a8bb2-aa65-4dea-937a-b6ab3dd9cd3e"
      },
      {
        "id": "dee5248b-116c-45b8-9b45-1b5860ad5449",
        "name": "Scene01",
        "type": "composition",
        "track": 2,
        "time": "0 s",
        "duration": "5.02 s",
        "dynamic": true,
        "x": "52.3862%",
        "elements": [
          {
            "id": "0dac167e-ca39-414b-8d88-1b08c8489bd6",
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
            "source": "78b17991-392b-4d52-800a-1565e9e319d1"
          },
          {
            "id": "abdac66f-7330-41e2-8d45-5d9ba358d386",
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
            "source": "5f2cbeb7-3073-4a88-8afd-c17fbaf13214"
          },
          {
            "id": "0a66ff12-44c6-4639-8e26-b07b737a7762",
            "type": "image",
            "track": 3,
            "time": "0 s",
            "dynamic": true,
            "x": "73.7723%",
            "y": "52.7379%",
            "width": "79.6897%",
            "height": "145.6516%",
            "x_scale": "90%",
            "y_scale": "90%",
            "source": "78b17991-392b-4d52-800a-1565e9e319d1"
          },
          {
            "id": "e9037eab-81cb-4c3d-ae94-e0adc12ac56c",
            "type": "video",
            "track": 4,
            "time": "0 s",
            "duration": null,
            "mask_mode": "luma",
            "source": "0eddf357-cbda-4e6a-b783-ef9367fa24f6"
          },
          {
            "id": "af8ad52f-c0d9-489a-a49d-a8da228c68d6",
            "type": "image",
            "track": 5,
            "time": "0 s",
            "dynamic": true,
            "x": "16.6159%",
            "width": "68.9179%",
            "height": "148.7051%",
            "source": "5f2cbeb7-3073-4a88-8afd-c17fbaf13214"
          },
          {
            "id": "880af54f-0c10-4364-a7af-c6cd4d445ab8",
            "type": "video",
            "track": 6,
            "time": "0 s",
            "duration": null,
            "mask_mode": "luma",
            "source": "0eddf357-cbda-4e6a-b783-ef9367fa24f6"
          },
          {
            "id": "507d1608-c794-4ac9-b15c-a9a9fb24e4dc",
            "name": "Right_LowerThird",
            "type": "text",
            "track": 7,
            "time": "1 s",
            "duration": "4.02 s",
            "x": "56.9676%",
            "y": "63.5965%",
            "width": "36.8143%",
            "height": "29.1471%",
            "x_anchor": "0%",
            "y_anchor": "0%",
            "x_alignment": "100%",
            "y_alignment": "100%",
            "fill_color": "#ffffff",
            "shadow_color": "rgba(0,0,0,0.25)",
            "shadow_blur": "1.5 vmin",
            "shadow_x": "0.5 vmin",
            "shadow_y": "0.5 vmin",
            "animations": [
              {
                "time": "start",
                "duration": "1 s",
                "easing": "quadratic-out",
                "type": "text-slide",
                "scope": "split-clip",
                "split": "line",
                "direction": "left"
              }
            ],
            "text": "Vetrarvörur mættar í verslanir",
            "font_family": "DM Sans",
            "font_size_maximum": "9 vmin"
          },
          {
            "id": "7627fabe-9882-4c8d-8476-6bd534c708f3",
            "type": "video",
            "track": 8,
            "time": "0.65 s",
            "duration": "1 s",
            "x": "48.8281%",
            "y": "51.0416%",
            "width": "123.6719%",
            "height": "119.5834%",
            "opacity": "50%",
            "blend_mode": "screen",
            "source": "31b74e2b-7cf8-4549-a35b-316d1a539d02"
          }
        ]
      },
      {
        "id": "8ea00372-3a4b-47d0-8181-120e0f004d9a",
        "name": "Scene02",
        "type": "composition",
        "track": 3,
        "time": "2.504 s",
        "duration": "4.9672 s",
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
                "fade": false,
                "scope": "element",
                "start_scale": "105%"
              }
            ],
            "source": "f7930a75-c370-4460-af64-6eef46ddc547"
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
                "fade": false,
                "scope": "element",
                "end_scale": "110%",
                "start_scale": "100%"
              }
            ],
            "source": "2604d253-8dfd-43ad-82aa-c404518494b7"
          },
          {
            "id": "83c3030e-ba31-4658-9421-194e2e9405ec",
            "name": "Left_LowerThird",
            "type": "text",
            "track": 3,
            "time": "0.9472 s",
            "duration": "4.02 s",
            "x": "5.4051%",
            "y": "63.8048%",
            "width": "36.8143%",
            "height": "29.1471%",
            "x_anchor": "0%",
            "y_anchor": "0%",
            "y_alignment": "100%",
            "fill_color": "#ffffff",
            "shadow_color": "rgba(0,0,0,0.25)",
            "shadow_blur": "1.5 vmin",
            "shadow_x": "0.5 vmin",
            "shadow_y": "0.5 vmin",
            "animations": [
              {
                "time": "start",
                "duration": "1 s",
                "easing": "quadratic-out",
                "type": "text-slide",
                "scope": "split-clip",
                "split": "line",
                "direction": "right"
              }
            ],
            "text": "Allt að 50% afsláttur",
            "font_family": "DM Sans",
            "font_size_maximum": "9 vmin"
          }
        ]
      },
      {
        "id": "a1ba5e68-4f5f-4075-8b4c-bb5f5d9482a0",
        "name": "Swipe01",
        "type": "video",
        "track": 4,
        "time": "2.504 s",
        "duration": "3 s",
        "mask_mode": "luma",
        "source": "2bfb5b61-1e31-4f5d-bddc-a3ca2fbef41f",
        "speed": "150%"
      },
      {
        "id": "41740206-0bd1-4b06-a6a6-df557d6e6f29",
        "name": "Scene03",
        "type": "composition",
        "track": 4,
        "time": "5 s",
        "duration": "5 s",
        "shadow_color": "rgba(0,0,0,0.25)",
        "elements": [
          {
            "id": "4b06fdd6-4945-45ac-b75f-d86b2a0fd753",
            "type": "image",
            "track": 1,
            "time": "0 s",
            "duration": "5 s",
            "x": "19.417%",
            "width": "42.4091%",
            "clip": true,
            "animations": [
              {
                "easing": "cubic-bezier(0.4, 0.25, 0.54, 0.63)",
                "type": "scale",
                "fade": false,
                "scope": "element",
                "start_scale": "105%"
              }
            ],
            "source": "2f791fb6-125e-49ab-b525-5be53326f42a"
          },
          {
            "id": "fcf94e89-6d85-4671-8ed6-6425a99782aa",
            "type": "image",
            "track": 2,
            "time": "0 s",
            "duration": "5 s",
            "x": "68.6478%",
            "y": "49.6653%",
            "width": "62.7044%",
            "height": "105.6695%",
            "animations": [
              {
                "easing": "cubic-bezier(0.37, 0.25, 0.57, 0.68)",
                "type": "scale",
                "fade": false,
                "scope": "element",
                "end_scale": "110%",
                "start_scale": "100%"
              }
            ],
            "source": "f2bd9f98-4d0a-4d8d-80db-be5ab21f091a"
          },
          {
            "id": "4a378fb3-451c-4f49-9fb6-25e181aab3e7",
            "name": "Right_LowerThird",
            "type": "text",
            "track": 3,
            "time": "1 s",
            "duration": "4 s",
            "x": "56.9676%",
            "y": "63.5965%",
            "width": "36.8143%",
            "height": "29.1471%",
            "x_anchor": "0%",
            "y_anchor": "0%",
            "x_alignment": "100%",
            "y_alignment": "100%",
            "fill_color": "#ffffff",
            "shadow_color": "rgba(0,0,0,0.25)",
            "shadow_blur": "1.5 vmin",
            "shadow_x": "0.5 vmin",
            "shadow_y": "0.5 vmin",
            "animations": [
              {
                "time": "start",
                "duration": "1 s",
                "easing": "quadratic-out",
                "type": "text-slide",
                "scope": "split-clip",
                "split": "line",
                "direction": "left"
              }
            ],
            "text": "Verslaðu á netinu",
            "font_family": "DM Sans",
            "font_size_maximum": "9 vmin"
          }
        ]
      },
      {
        "id": "1e7574c4-7f3d-4aa1-b76b-d1cb78166948",
        "name": "Swipe02",
        "type": "video",
        "track": 5,
        "time": "5 s",
        "duration": "2 s",
        "mask_mode": "luma",
        "source": "f05f9f0d-6cfb-4416-84b4-7d6af5d152b6",
        "speed": "150%"
      },
      {
        "id": "b192fcd0-7886-4acf-81dd-9f648bc51682",
        "name": "Scene04",
        "type": "composition",
        "track": 5,
        "time": "7.4712 s",
        "duration": "5 s",
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
            "source": "dd94e7e4-34f2-455f-9ab6-5276fd096a3c"
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
            "source": "a1550c0c-f199-462b-b8a2-439e3490eb83"
          },
          {
            "id": "36cf660d-7681-44ac-96f5-0f776e192e60",
            "type": "image",
            "track": 3,
            "time": "1 s",
            "dynamic": true,
            "x": "78.3014%",
            "width": "74.7888%",
            "height": "128.6169%",
            "x_scale": "90%",
            "y_scale": "90%",
            "source": "40564885-65f0-44e6-9498-090f3250fb9d"
          },
          {
            "id": "a85901ac-bf91-4739-a98c-4f117a3f89ce",
            "type": "video",
            "track": 4,
            "time": "1 s",
            "duration": null,
            "x_scale": "-100%",
            "mask_mode": "luma",
            "source": "0eddf357-cbda-4e6a-b783-ef9367fa24f6"
          },
          {
            "id": "534d3b5f-e60c-4ca9-b7cc-7d2af4f8a839",
            "type": "image",
            "track": 5,
            "time": "1 s",
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
            "source": "e0192b2b-ad80-4e99-a0bb-4829e7ec4123"
          },
          {
            "id": "4a99a4d6-89e9-4f73-9ed9-c49f482d36f7",
            "type": "video",
            "track": 6,
            "time": "1 s",
            "duration": null,
            "x_scale": "-100%",
            "mask_mode": "luma",
            "source": "0eddf357-cbda-4e6a-b783-ef9367fa24f6"
          },
          {
            "id": "00a059a6-fd1e-46b4-b33d-0f25f6575bdd",
            "name": "Left_LowerThird",
            "type": "text",
            "track": 7,
            "time": "1 s",
            "duration": "4.02 s",
            "x": "5.4051%",
            "y": "63.8048%",
            "width": "36.8143%",
            "height": "29.1471%",
            "x_anchor": "0%",
            "y_anchor": "0%",
            "y_alignment": "100%",
            "fill_color": "#ffffff",
            "shadow_color": "rgba(0,0,0,0.25)",
            "shadow_blur": "1.5 vmin",
            "shadow_x": "0.5 vmin",
            "shadow_y": "0.5 vmin",
            "animations": [
              {
                "time": "start",
                "duration": "1 s",
                "easing": "quadratic-out",
                "type": "text-slide",
                "scope": "split-clip",
                "split": "line",
                "direction": "right"
              }
            ],
            "text": "Fullkomið í skólann",
            "font_family": "DM Sans",
            "font_size_maximum": "9 vmin"
          }
        ]
      },
      {
        "id": "480545bc-6671-4fde-9a3f-513f51650db8",
        "name": "Swipe03",
        "type": "video",
        "track": 6,
        "time": "7.4712 s",
        "duration": "2 s",
        "mask_mode": "luma",
        "source": "47065cbf-222c-4ef1-aafd-a6da1551afcd",
        "speed": "150%"
      },
      {
        "id": "f4a86d53-3de4-4951-a7b6-7f4687752716",
        "name": "EndSlide",
        "type": "composition",
        "track": 7,
        "time": "9.982 s",
        "duration": "2.018 s",
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
            "id": "dbfb0527-d89d-4541-9bd4-165b42f7eb32",
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
            "source": "dd11871b-e082-4d7c-bd04-11a985dc682a"
          }
        ]
      },
      {
        "id": "facd148e-4d45-44ef-a9e3-353eec444636",
        "type": "video",
        "track": 8,
        "time": "2.504 s",
        "duration": "1 s",
        "opacity": "40%",
        "blend_mode": "screen",
        "source": "3484bf43-9ad7-4cad-923b-6fe8067b93be"
      },
      {
        "id": "cac48cf5-1a79-4498-bf3f-268f46e080f1",
        "type": "video",
        "track": 8,
        "time": "5 s",
        "duration": "1 s",
        "opacity": "40%",
        "blend_mode": "screen",
        "source": "e21ddd81-7a0a-430b-8727-196b78c249d0"
      },
      {
        "id": "d9b7760f-855a-4944-b46f-9e3d85f65653",
        "type": "video",
        "track": 8,
        "time": "7.4712 s",
        "duration": "1 s",
        "opacity": "40%",
        "blend_mode": "screen",
        "source": "f938d1b5-371b-4f8a-952c-ccb5e2c0beaa"
      },
      {
        "id": "1a609c16-ad98-4290-be96-c00b927b187a",
        "type": "video",
        "track": 8,
        "time": "9.982 s",
        "duration": "2 s",
        "mask_mode": "luma",
        "source": "65adb6a3-a416-4555-bf5e-6c18dac99056",
        "speed": "150%"
      },
      {
        "id": "3a3d129c-4c12-4b0c-8a42-63da89c63ce9",
        "type": "text",
        "track": 9,
        "time": "0 s",
        "duration": "10 s",
        "x": "68.0894%",
        "y": "4.7488%",
        "width": "28.0673%",
        "height": "5.0243%",
        "x_anchor": "0%",
        "y_anchor": "0%",
        "x_alignment": "100%",
        "fill_color": "#ffffff",
        "shadow_color": "rgba(0,0,0,0.25)",
        "shadow_blur": "1.5 vmin",
        "shadow_x": "0.5 vmin",
        "shadow_y": "0.5 vmin",
        "text": "boozt.com",
        "font_family": "DM Sans"
      }
    ]
  };

playButton.addEventListener('click', function() {
    preview = startPreview(previewJson, 'test-preview-container');

    preview.onReady = async () => {
        await preview.setSource(previewJson);
        preview.play();
    }
});

stopButton.addEventListener('click', function() {
    preview.pause();
});

timeButton.addEventListener('click', function() {
    preview.setTime(5);
});
const express = require('express');
const axios = require('axios');
const cors = require("cors");
const bodyParser = require('body-parser');

const app = express();

const apiPath = "/api/";
const version = "v1";

const port = 3000;

app.use(bodyParser.json());
app.use(cors());
app.use(function (req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept"
  );
  next();
});

// Helper Functions
const getRandomItem = (list) => {
    const randomIndex = Math.floor(Math.random() * list.length);
    return list[randomIndex];
}

// Generate Video

const Creatomate = require('creatomate');
const fs = require('fs');
const fashion = require('./templates/seasonal_sale/fashion');
const transition = require('./templates/transitions');
const outro = require('./templates/outro');

// Generate Video
// const apiKey = 'ceeb48a2b0234a74b11078feacba0279832d3905f828e0782d462ee19450ec905fd9411e60bb60ffa3f6adfc0e8653f7';
const apiKey = '468b5d54950d46fc8ca16bb54fc25d16e422daeb6320f97c9d628a5da8ac14fe373a74c3c58ed4426eb2274f46b7e9f1';

let scenes = []

// Assets
const images = [
    "https://res.cloudinary.com/dr5jfzcjp/image/upload/v1692715669/fashion/raf710790058_cwhite_v10020102wcf_10_a11odz.jpg",
    "https://res.cloudinary.com/dr5jfzcjp/image/upload/v1692715667/fashion/raf710766778_clafayetteblue_v10487153rb2_10_fp56rx.jpg",
    "https://res.cloudinary.com/dr5jfzcjp/image/upload/v1692357504/cld-sample-5.jpg",
    "https://res.cloudinary.com/dr5jfzcjp/image/upload/v1692357503/cld-sample-4.jpg",
    "https://res.cloudinary.com/dr5jfzcjp/image/upload/v1692357502/cld-sample-2.jpg",
    "https://res.cloudinary.com/dr5jfzcjp/image/upload/v1692357498/samples/smile.jpg",
    "https://res.cloudinary.com/dr5jfzcjp/image/upload/v1692357496/samples/two-ladies.jpg",
    "https://res.cloudinary.com/dr5jfzcjp/image/upload/v1692357482/samples/people/bicycle.jpg"
];

const logo = "https://drive.google.com/file/d/17hL7pbTPoBVnWQlGJMe9N12AnIQrGXse/view?usp=sharing";

const fashionTemplates = {
    "clean_twoImages": (images, titles, main_color, secondary_color, text_color) => fashion.clean_twoImages(images, titles, main_color, secondary_color, text_color),
    "onepager_01": (images, titles, main_color, secondary_color, text_color) => fashion.onepager_01(images, titles, main_color, secondary_color, text_color)
};

// Requests
app.get(apiPath + version + '/:type', (req, res) => {
    let scenes = [];
    const titles = [ 'test', 'test 2', 'test 3', 'test 4' ];
    const text_color = "#ffffff";
    const main_color = "#000000";
    const secondary_color = "#ffffff";

    // scenes = fashion.onepager_01(images, titles, main_color, secondary_color, text_color);
    const selectedTemplate = fashionTemplates[req.params.type];
    scenes = selectedTemplate(images, titles, main_color, secondary_color, text_color);

    const source = {
        "output_format": "mp4",
        "width": 1280,
        "height": 720,
        "frame_rate": 25,
        "duration": "10 s",
        "elements": scenes
    }

    res.status(200).send(source);
});

app.get(apiPath + version + '/options/:type', (req, res) => {
    const options = fashion.getOptions();
    
    return res.status(200).send(options);
});

app.post(apiPath + version + '/preview/:type', (req, res) => {
    const { style, titles, main_color, secondary_color, text_color } = req.body;
    let scenes = [];

    // scenes = fashion.onepager_01(images, titles, main_color, secondary_color, text_color);
    const selectedTemplate = fashionTemplates[req.params.type];
    scenes = selectedTemplate(images, titles, main_color, secondary_color, text_color);

    const source = {
        "output_format": "mp4",
        "width": 1280,
        "height": 720,
        "frame_rate": 25,
        "duration": "10 s",
        "elements": scenes
    }

    res.status(200).send(source);
});

app.post(apiPath + version + '/create', (req, res) => {
    const { style, text, main_color, secondary_color, text_color } = req.body;
    scenes = [];
    // populateScenes(4, text, main_color, secondary_color, text_color);
    scenes = fashion.onepager_01(images, text, main_color, secondary_color, text_color);

    const source = {
        "output_format": "mp4",
        "width": 1280,
        "height": 720,
        "frame_rate": 25,
        "duration": "10 s",
        "elements": scenes
    }

    const url = 'https://api.creatomate.com/v1/renders';
    const data = {
        "source": source
    }
    const headers = {
    'Content-Type': 'application/json', // Set the content type header
    'Authorization': `Bearer ${apiKey}`// Set your authorization header
    };

    // Send to Creatomate
    axios.post(url, data, { headers })
    .then(response => {
      console.log('Response:', response.data);
      return res.status(200).send(response.data);
    })
    .catch(error => {
      console.error('Error:', error);
      return res.status(400).send('Error:', error);
    });
});

app.get(apiPath + version + '/status/:id', (req, res) => {
    const url = 'https://api.creatomate.com/v1/renders/';
    const id = req.params.id;

    const headers = {// Set the content type header
        'Authorization': `Bearer ${apiKey}`// Set your authorization header
        };

    axios.get(url + id, { headers })
    .then(response => {
        console.log(response.data);
        return res.status(200).send(response.data);
    })
    .catch(error => {
        console.error('Axios Error:', error);
        return res.status(400).send('Axios Error:', error);
    });
});


app.listen(port, () => {
    console.log('Express app listening on port ' + port);
});
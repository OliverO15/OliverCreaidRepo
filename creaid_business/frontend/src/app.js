import axios from 'axios';
import { ENV_VARS } from '../confing';
import _ from 'lodash';


// Update Colors
const updateColorPicker = (type) => {
    let colorHexInput;
    let colorPickerInput;
    
    if (type === 'main') {
        colorHexInput = document.getElementById("mainColorHex");
        colorPickerInput = document.getElementById("mainColorPicker");
    } else if (type === 'secondary') {
        colorHexInput = document.getElementById("secondaryColorHex");
        colorPickerInput = document.getElementById("secondaryColorPicker");
    } else if (type === 'text') {
        colorHexInput = document.getElementById("textColorHex");
        colorPickerInput = document.getElementById("textColorPicker");
    }
    
    let hexValue = colorHexInput.value;
    colorPickerInput.value = hexValue;
};

const updateHexCode = (type) => {
    let colorHexInput;
    let colorPickerInput;
    
    if (type === 'main') {
        colorHexInput = document.getElementById("mainColorHex");
        colorPickerInput = document.getElementById("mainColorPicker");
    } else if (type === 'secondary') {
        colorHexInput = document.getElementById("secondaryColorHex");
        colorPickerInput = document.getElementById("secondaryColorPicker");
    } else if (type === 'text') {
        colorHexInput = document.getElementById("textColorHex");
        colorPickerInput = document.getElementById("textColorPicker");
    }
    
    let hexValue = colorPickerInput.value;
    colorHexInput.value = hexValue;
};

const title01 = document.getElementById("title01");
const title02 = document.getElementById("title02");
const title03 = document.getElementById("title03");
const title04 = document.getElementById("title04");

const titles = [title01.value, title02.value, title03.value, title04.value];

const getTitles = () => {
    const title01 = document.getElementById("title01");
    const title02 = document.getElementById("title02");
    const title03 = document.getElementById("title03");
    const title04 = document.getElementById("title04");

    return [title01.value, title02.value, title03.value, title04.value];
}

const getAvailableStyles = () => {
    const selectedProduct = document.getElementById("productType").value;

    axios.get('http://localhost:3000/api/v1/options/' + selectedProduct)
    .then(response => {
        // Handle the successful response

        const dropdown = document.getElementById("adStyle");

        while (dropdown.firstChild) {
            dropdown.removeChild(dropdown.firstChild);
          }
        // Loop through the array and create new option elements
        for (const key in response.data) {
            if (response.data.hasOwnProperty(key)) {
              const value = response.data[key];
              const newOption = document.createElement("option");
              newOption.value = value;
              newOption.text = key;
              dropdown.appendChild(newOption);
            }
        }
        console.log(response.data);
        setUpPreview();
    })
    .catch(error => {
        // Handle any errors
        console.error(error);
    });
};

getAvailableStyles();

// Generate Video
const apiUrl = 'http://localhost:3000/api/v1/create';
const statusUrl = 'http://localhost:3000/api/v1/status/';
let interval;
let isLoading = false;

const generateVideo = async () => {
    const selectedStyle = document.getElementById("adStyle").value;
    const main_color = document.getElementById("mainColorHex").value;
    const secondary_color = document.getElementById("secondaryColorHex").value;
    const text_color = document.getElementById("textColorHex").value;

    //Perform a POST request to the url
    try {
        const response = await axios.post(
            apiUrl,
        {
            style: selectedStyle,
            text: getTitles(),
            main_color: main_color,
            secondary_color: secondary_color,
            text_color: text_color
        }
        );
        //When successful, print the received data
        console.log("Successfully written: ", response.data);
        console.log('Data:', response.data);
        console.log(response.data[0].id);
        startInterval(response.data[0].id, response.data[0].url);
    } catch (error) {
        //When unsuccessful, print the error.
        console.log(error);
    }
}

const getStatus = (id, url) => {
    fetch(statusUrl + id)
        .then(response => {
        if (!response.ok) {
        throw new Error(`HTTP error! Status: ${response.status}`);
        }
        return response.json(); // Parse the response body as JSON
        })
        .then(data => {
        console.log(data.status);
        if (data.status == "succeeded") {
            clearInterval(interval); // Stop the interval once status is "complete"
            console.log('Request is complete.');
            isLoading = false;
            displayVideo(url);
        } else {
            isLoading = true;
            displayVideo("");
        }
        })
        .catch(error => {
        console.error('Fetch Error:', error);
        });
}

const startInterval = (id, url) => {
    getStatus(id, url); // Perform the initial check
  
    // Start the interval to check every 2 seconds
    interval = setInterval(() => {
    getStatus(id, url);
    }, 2000);
  }

// Display Video

const displayVideo = (videoUrl) => {
    const newVideo = document.getElementById('video_player');
    newVideo.innerHTML = ''

    if (isLoading) {
        newVideo.innerHTML += `
        <img src="assets/icons/video.gif" alt="A GIF image">
        `
    } else {
        newVideo.innerHTML += `
        <video width="480" height="270" controls>
            <source src="${videoUrl}" type="video/mp4">
            Your browser does not support the video tag.
        </video>
        `
    }
}

const styleDropdown = document.getElementById("adStyle");

// Preview
import { Preview } from '@creatomate/preview';

// Once the SDK is ready, load a template from the project
const previewSetUp = false;
let source = {};
let preview;

const setUpPreview = () => {
    console.log("loading new..");
    // The following assumes that you have a HTML element like this: <div id="container"></div>
    const containerElement = document.getElementById('video_player');
    const main_color = document.getElementById("mainColorHex").value;
    const secondary_color = document.getElementById("secondaryColorHex").value;
    const text_color = document.getElementById("textColorHex").value;

    // Initialize a preview to be spawned within the container
    preview = new Preview(containerElement, 'player', ENV_VARS.NEXT_PUBLIC_VIDEO_PLAYER_TOKEN);
    const apiUrl = `http://localhost:3000/api/v1/preview/${styleDropdown.value}`;

    if (!previewSetUp) {
        preview.onReady = async () => {
            //Perform a POST request to the url
            try {
                const response = await axios.post(
                    apiUrl,
                {
                    titles: getTitles(),
                    main_color: main_color,
                    secondary_color: secondary_color,
                    text_color: text_color
                });
    
                // You can also load a video from JSON:
                await preview.setSource(response.data);
                source = response.data;
    
                console.log(source.elements[0].elements[6].text);
    
            } catch (error) {
                //When unsuccessful, print the error.
                console.log(error);
            }
        };
    } else {
        preview.onReady = async () => {
            currTitles = getTitles();
            source.elements[0].elements[6].text = currTitles[0]; //Title 1

            await preview.setSource(source);

            console.log(source.elements[0].elements[6].text);
        };
    }
}

const updatPreview = async () => {
    const currTitles = getTitles();
    const main_color = document.getElementById("mainColorHex").value;
    const secondary_color = document.getElementById("secondaryColorHex").value;
    const text_color = document.getElementById("textColorPicker").value;
    // source.elements[0].elements[6].text = currTitles[0]; //Title 1

    // await preview.setSource(source);
    const modifications = {
        "5e4cd138-3276-403c-a41b-dbec288f8814.text": currTitles[0],
        "5e4cd138-3276-403c-a41b-dbec288f8814.fill_color": text_color,
        "08e60b21-22e8-429b-a265-510db3c0f1e6.text": currTitles[1],
        "08e60b21-22e8-429b-a265-510db3c0f1e6.fill_color": text_color,
        "5e4cd138-3276-403c-a41b-dbec288f8815.text": currTitles[2],
        "5e4cd138-3276-403c-a41b-dbec288f8815.fill_color": text_color,
        "f8e60c7d-2c27-4b96-8d92-f472a417a75e.text": currTitles[3],
        "f8e60c7d-2c27-4b96-8d92-f472a417a75e.fill_color": text_color,
    };

    await preview.setModifications(modifications);
}



styleDropdown.addEventListener("change", setUpPreview);
title01.addEventListener("change", updatPreview);
title02.addEventListener("change", updatPreview);
title03.addEventListener("change", updatPreview);
title04.addEventListener("change", updatPreview);

const colorHexInput = document.getElementById("mainColorHex");
const colorPickerInput = document.getElementById("mainColorPicker");

// colorHexInput.addEventListener("input", )


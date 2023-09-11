import { Preview } from '@creatomate/preview';
import axios from 'axios';

const url = 'http://127.0.0.1:8000/playground/create-project/';
const button = document.getElementById('get-preview');
const containerElement = document.getElementById('container');
const dummyData = {
    "name": "test",
    "media_container": [
        "https://res.cloudinary.com/dr5jfzcjp/image/upload/v1692718271/fashion/JACK_JONES_ongoing_large_JJ_DNA_AW23-SS24_11b_SUPERIOR_xn9wkn.jpg",
        "https://res.cloudinary.com/dr5jfzcjp/image/upload/v1692715669/fashion/raf710790058_cwhite_v10020102wcf_10_a11odz.jpg",
        "https://res.cloudinary.com/dr5jfzcjp/image/upload/v1692357503/cld-sample-4.jpg",
        "https://res.cloudinary.com/dr5jfzcjp/image/upload/v1692357503/cld-sample-3.jpg",
        "https://res.cloudinary.com/dr5jfzcjp/image/upload/v1692357498/samples/smile.jpg",
        "https://res.cloudinary.com/dr5jfzcjp/image/upload/v1692357497/samples/balloons.jpg",
        "https://res.cloudinary.com/dr5jfzcjp/image/upload/v1692357484/samples/ecommerce/leather-bag-gray.jpg",
        "https://res.cloudinary.com/dr5jfzcjp/image/upload/v1692357479/samples/bike.jpg",
        "https://res.cloudinary.com/dr5jfzcjp/image/upload/v1692357497/samples/balloons.jpg",
        "https://res.cloudinary.com/dr5jfzcjp/image/upload/v1692357484/samples/ecommerce/leather-bag-gray.jpg",
        "https://res.cloudinary.com/dr5jfzcjp/image/upload/v1692357479/samples/bike.jpg"
    ],
    "text": ["text01", "text02", "text03", "text04"],
    "style": {
        "color": "#ff0000",
        "font": "arial"
    },
    "layouts": [
        "layout01.json",
        "layout02.json",
        "layout01.json",
        "layout02.json",
    ]
};

let layouts = [];

const fillLayoutContainer = (numLayouts) => {
    const container = document.getElementById('layout-selection-container');

    for (let i = 0; i < numLayouts; i++) {
        container.innerHTML += `
            <div class="scene-container" data-scene-number="${i}">
                <div class="layout-thumbnail">
                    <img src="https://res.cloudinary.com/dr5jfzcjp/image/upload/v1692718271/fashion/JACK_JONES_ongoing_large_JJ_DNA_AW23-SS24_11b_SUPERIOR_xn9wkn.jpg" alt="layout">
                </div>
                <select class="layout-dropdown" data-scene-dropdown="${i}">
                    <!-- Populate the options dynamically with JavaScript -->
                </select>
                <div class="text-inputs">
                    <!-- Text input elements will be added here dynamically -->
                </div>
            </div>
        `;
    }
};

fillLayoutContainer(4);

// GET layout options from database and fill dropdown
const getLayouts = async () => {
    const layoutUrl = 'http://127.0.0.1:8000/playground/layouts/';

    axios.get(layoutUrl)
    .then((response) => {
        if (response.status === 200) {
            console.log(response.data);
            // Handle the response data
            layouts = response.data.files;
            console.log(layouts);
            populateDropdowns();
        } else {
            throw new Error(`HTTP error! Status: ${response.status}`);
        }
    })
    .catch((error) => {
        console.error('Error:', error);
        // Handle any errors
    });
};

const preview = async () => {
    axios.post(url, dummyData, {
        headers: {
            'Content-Type': 'application/json',
        },
    })
    .then((response) => {
        if (response.status === 201) {
            console.log(response.data);
            startPreview(response.data);
            // Handle the response data
        } else {
            throw new Error(`HTTP error! Status: ${response.status}`);
        }
    })
    .catch((error) => {
        console.error('Error:', error);
        // Handle any errors
    });
};

const startPreview = async (data) => {
    const preview = new Preview(containerElement, 'player', "public-29s5yb0fh57o1e4mt3ljs0g6");
    preview.onReady = async () => {
        await preview.setSource(data);
        await preview.play();
    };
};

button.addEventListener('click', preview);

// Function to populate a specific dropdown based on scene number
function populateDropdown(sceneNumber) {
    const container = document.querySelector(`[data-scene-number="${sceneNumber}"]`);
    const dropdown = container.querySelector('.layout-dropdown');
    dropdown.innerHTML = ''; // Clear existing options// Clear existing options

    layouts.forEach((layout) => {
        const option = document.createElement('option');
        option.value = layout;
        option.textContent = layout;
        option.dataset.maxTextElements = 1;

        // Select random layout
        const randomLayout = Math.floor(Math.random() * layouts.length);
        option.selected = (randomLayout === 0);
        
        dropdown.appendChild(option);
    });

    // Create text input elements based on maxTextElements
    const maxTextElements = container.querySelector('.layout-dropdown').options[0].getAttribute('data-max-text-elements');
    const textInputsContainer = container.querySelector('.text-inputs');

    for (let i = 0; i < maxTextElements; i++) {
        const textInput = document.createElement('input');
        textInput.type = 'text';
        textInput.name = `text-${sceneNumber}-${i}`;
        textInput.placeholder = `Text ${i + 1}`;
        textInputsContainer.appendChild(textInput);
    }

    // Add an event listener to the populated dropdown
    dropdown.addEventListener('change', function () {
        const selectedLayoutId = this.value;
        const maxTextElements = this.options[this.selectedIndex].getAttribute('data-max-text-elements');
        dummyData.layouts[sceneNumber] = selectedLayoutId;

        // Clear existing text inputs
        const textInputsContainer = document.querySelector(`[data-scene-number="${sceneNumber}"] .text-inputs`);
        textInputsContainer.innerHTML = '';

        // Create text input elements based on maxTextElements
        for (let i = 0; i < maxTextElements; i++) {
            const textInput = document.createElement('input');
            textInput.type = 'text';
            textInput.name = `text-${sceneNumber}-${i}`;
            textInput.placeholder = `Text ${i + 1}`;
            textInputsContainer.appendChild(textInput);
        }

        // Perform actions based on the selected layout and sceneNumber
        console.log(`Scene ${sceneNumber} - Selected Layout ID: ${selectedLayoutId}`);
    });

    // Change dummy data texts based on text inputs
    const textInputs = container.querySelectorAll('.text-inputs input');
    textInputs.forEach((textInput) => {
        textInput.addEventListener('keyup', function () {
            const textNumber = this.name.split('-')[2];
            dummyData.text[sceneNumber] = this.value;
            console.log(`Scene ${sceneNumber} - Text ${textNumber}: ${this.value}`);
        });
    }
    );
}

// Populate all dropdowns based on the number of scenes
const populateDropdowns = () => {
    const sceneContainers = document.querySelectorAll('.scene-container');
    sceneContainers.forEach((container) => {
        const sceneNumber = container.getAttribute('data-scene-number');
        populateDropdown(sceneNumber);
    });
};

getLayouts().then(() => {
    // Call populateDropdowns after layouts have been retrieved
    populateDropdowns();
});











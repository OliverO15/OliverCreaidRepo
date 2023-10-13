// import { Preview } from '@creatomate/preview';
// import axios from 'axios';
// Import the functions you need from the SDKs you need
// import { initializeApp } from "firebase/app";
// import { getAnalytics } from "firebase/analytics";
// import { getStorage, ref, uploadBytes, getDownloadURL } from "firebase/storage";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
// const firebaseConfig = {
//   apiKey: "AIzaSyDBvehu_4a1-XtBXwxml3UZaYZZbLw6kFo",
//   authDomain: "creaidplayground.firebaseapp.com",
//   projectId: "creaidplayground",
//   storageBucket: "creaidplayground.appspot.com",
//   messagingSenderId: "60172461108",
//   appId: "1:60172461108:web:fe3d12d1a06d2b43c35661",
//   measurementId: "G-272MXJ5G1L"
// };

// Initialize Firebase
// const app = initializeApp(firebaseConfig);
// const analytics = getAnalytics(app);
// const storage = getStorage(app);

// const mainColor = document.getElementById('color-primary');
// const secondaryColor = document.getElementById('color-secondary');
// const fontFamily = document.getElementById('font-family');
// const fontColor = document.getElementById('font-color');
// const textInput = document.getElementById('speech-text');

// const url = 'http://127.0.0.1:8000/playground/create-project/';
// const button = document.getElementById('get-preview');
// const speech_button = document.getElementById('generate-speech');
// const containerElement = document.getElementById('container');
// const dummyData = {
//     "name": "test",
//     "media_container": [
//         "https://res.cloudinary.com/dr5jfzcjp/image/upload/v1692718271/fashion/JACK_JONES_ongoing_large_JJ_DNA_AW23-SS24_11b_SUPERIOR_xn9wkn.jpg",
//         "https://res.cloudinary.com/dr5jfzcjp/image/upload/v1692715669/fashion/raf710790058_cwhite_v10020102wcf_10_a11odz.jpg",
//         "https://res.cloudinary.com/dr5jfzcjp/image/upload/v1692357503/cld-sample-4.jpg",
//         "https://res.cloudinary.com/dr5jfzcjp/image/upload/v1692357503/cld-sample-3.jpg",
//         "https://res.cloudinary.com/dr5jfzcjp/image/upload/v1692357498/samples/smile.jpg",
//         "https://res.cloudinary.com/dr5jfzcjp/image/upload/v1692357497/samples/balloons.jpg",
//         "https://res.cloudinary.com/dr5jfzcjp/image/upload/v1692357484/samples/ecommerce/leather-bag-gray.jpg",
//         "https://res.cloudinary.com/dr5jfzcjp/image/upload/v1692357479/samples/bike.jpg",
//         "https://res.cloudinary.com/dr5jfzcjp/image/upload/v1692357497/samples/balloons.jpg",
//         "https://res.cloudinary.com/dr5jfzcjp/image/upload/v1692357484/samples/ecommerce/leather-bag-gray.jpg",
//         "https://res.cloudinary.com/dr5jfzcjp/image/upload/v1692357479/samples/bike.jpg"
//     ],
//     "text": [["text01"], ["text02"], ["text03"], ["text04"]],
//     "style": {
//         "main_color": mainColor.value,
//         "secondary_color": secondaryColor.value,
//         "font": "arial",
//         "font_color": fontColor.value

//     },
//     "layouts": [1, 2, 3, 4]
// };

// let layouts = [];
// let speech_url = "";

// const fillLayoutContainer = (numLayouts) => {
//     const container = document.getElementById('layout-selection-container');

//     for (let i = 0; i < numLayouts; i++) {
//         container.innerHTML += `
//             <div class="scene-container" data-scene-number="${i}">
//                 <div class="layout-thumbnail">
//                     <img src="https://res.cloudinary.com/dr5jfzcjp/image/upload/v1692718271/fashion/JACK_JONES_ongoing_large_JJ_DNA_AW23-SS24_11b_SUPERIOR_xn9wkn.jpg" alt="layout">
//                 </div>
//                 <select class="layout-dropdown" data-scene-dropdown="${i}">
//                     <!-- Populate the options dynamically with JavaScript -->
//                 </select>
//                 <div class="text-inputs">
//                     <!-- Text input elements will be added here dynamically -->
//                 </div>
//             </div>
//         `;
//     }
// };

// fillLayoutContainer(4);

// // GET layout options from database and fill dropdown
// const getLayouts = async () => {
//     const layoutUrl = 'http://127.0.0.1:8000/playground/layouts/';

//     axios.get(layoutUrl)
//     .then((response) => {
//         if (response.status === 200) {
//             console.log(response.data);
//             // Handle the response data
//             // for (let i = 0; i < response.data.length; i++) {
//             //     layouts.push(response.data[i].name);
//             // }
//             layouts = response.data;
//             console.log(layouts)
//             populateDropdowns();
//         } else {
//             throw new Error(`HTTP error! Status: ${response.status}`);
//         }
//     })
//     .catch((error) => {
//         console.error('Error:', error);
//         // Handle any errors
//     });
// };

// const preview = async () => {
//     console.log(dummyData.text);
//     let speech = {};
    
//     if(speech_url != "") {
//         speech = {
//             "type": "audio",
//             "track": 10,
//             "source": `${speech_url}`
//         };
//     }

//     console.log(speech);

//     axios.post(url, dummyData, {
//         headers: {
//             'Content-Type': 'application/json',
//         },
//     })
//     .then((response) => {
//         if (response.status === 201) {
//             console.log(response.data);
//             if(speech_url != "") {
//                 response.data.elements.push(speech);
//             }
//             startPreview(response.data);
//             // Handle the response data
//         } else {
//             throw new Error(`HTTP error! Status: ${response.status}`);
//         }
//     })
//     .catch((error) => {
//         console.error('Error:', error);
//         // Handle any errors
//     });
// };

// const startPreview = async (data) => {
//     const preview = new Preview(containerElement, 'player', "public-29s5yb0fh57o1e4mt3ljs0g6");
//     preview.onReady = async () => {
//         await preview.setSource(data);
//         await preview.play();
//     };
// };

// button.addEventListener('click', preview);

// // Function to populate a specific dropdown based on scene number
// function populateDropdown(sceneNumber) {
//     const container = document.querySelector(`[data-scene-number="${sceneNumber}"]`);
//     const dropdown = container.querySelector('.layout-dropdown');
//     dropdown.innerHTML = ''; // Clear existing options// Clear existing options

//     layouts.forEach((layout) => {
//         const option = document.createElement('option');
//         option.value = layout.id;
//         option.textContent = layout.name;
//         option.dataset.maxTextElements = layout.text_count;

//         // Select random layout
//         const randomLayout = Math.floor(Math.random() * layouts.length);
//         option.selected = (randomLayout === 0);
        
//         dropdown.appendChild(option);
//     });

//     // Create text input elements based on maxTextElements
//     const maxTextElements = container.querySelector('.layout-dropdown option:checked').attributes['data-max-text-elements'].value;
//     const textInputsContainer = container.querySelector('.text-inputs');

//     // Clear existing text inputs
//     let sceneTextData = [];

//     for (let i = 0; i < maxTextElements; i++) {
//         const textInput = document.createElement('input');
//         textInput.type = 'text';
//         textInput.name = `text-${sceneNumber}-${i}`;
//         textInput.placeholder = `Text ${i + 1}`;
//         textInput.value = 'Text ' + (sceneNumber);
//         sceneTextData.push(textInput.value);
//         console.log(sceneTextData);
//         textInputsContainer.appendChild(textInput);
//     }

//     const selectedLayoutId = container.querySelector('.layout-dropdown option:checked').value;
//     dummyData.text[sceneNumber] = sceneTextData;
//     dummyData.layouts[sceneNumber] = selectedLayoutId;

//     // Add an event listener to the populated dropdown
//     dropdown.addEventListener('change', function () {
//         const selectedLayoutId = this.value;
//         const maxTextElements = this.options[this.selectedIndex].getAttribute('data-max-text-elements');
//         dummyData.layouts[sceneNumber] = selectedLayoutId;

//         // Clear existing text inputs
//         const textInputsContainer = document.querySelector(`[data-scene-number="${sceneNumber}"] .text-inputs`);
//         textInputsContainer.innerHTML = '';

//         let sceneTextData = [];
//         // Create text input elements based on maxTextElements
//         for (let i = 0; i < maxTextElements; i++) {
//             const textInput = document.createElement('input');
//             textInput.type = 'text';
//             textInput.name = `text-${sceneNumber}-${i}`;
//             textInput.placeholder = `Text ${i + 1}`;
//             textInput.value = 'Text ' + (sceneNumber) + (i + 1);
//             sceneTextData.push(textInput.value);
//             console.log(sceneTextData);
//             textInputsContainer.appendChild(textInput);
//         }

//         dummyData.text[sceneNumber] = sceneTextData;

//         // Perform actions based on the selected layout and sceneNumber
//         console.log(`Scene ${sceneNumber} - Selected Layout ID: ${selectedLayoutId}`);

//         // Change dummy data texts based on text inputs
//         const textInputs = container.querySelectorAll('.text-inputs input');
//         textInputs.forEach((textInput) => {
//             textInput.addEventListener('keyup', function () {
//                 const textNumber = this.name.split('-')[2];
//                 dummyData.text[sceneNumber][textNumber] = this.value;
//                 console.log(dummyData.text[sceneNumber][textNumber]);
//                 console.log(`Scene ${sceneNumber} - Text ${textNumber}: ${this.value}`);
//             });
//         });
//     });

//     // Change dummy data texts based on text inputs
//     const textInputs = container.querySelectorAll('.text-inputs input');
//     textInputs.forEach((textInput) => {
//         textInput.addEventListener('keyup', function () {
//             const textNumber = this.name.split('-')[2];
//             dummyData.text[sceneNumber][textNumber] = this.value;
//             console.log(dummyData.text[sceneNumber][textNumber]);
//             console.log(`Scene ${sceneNumber} - Text ${textNumber}: ${this.value}`);
//         });
//     });
// }

// // Populate all dropdowns based on the number of scenes
// const populateDropdowns = () => {
//     const sceneContainers = document.querySelectorAll('.scene-container');
//     sceneContainers.forEach((container) => {
//         const sceneNumber = container.getAttribute('data-scene-number');
//         populateDropdown(sceneNumber);
//     });
// };

// getLayouts().then(() => {
//     // Call populateDropdowns after layouts have been retrieved
//     populateDropdowns();
// });

// // Style Change

// mainColor.addEventListener('change', function () {
//     dummyData.style.main_color = this.value;
//     console.log(dummyData.style.color);
// });

// secondaryColor.addEventListener('change', function () {
//     dummyData.style.secondary_color = this.value;
//     console.log(dummyData.style.color);
// });

// fontFamily.addEventListener('change', function () {
//     dummyData.style.font = this.value;
//     console.log(dummyData.style.font);
// });

// fontColor.addEventListener('change', function () {
//     dummyData.style.font_color = this.value;
//     console.log(dummyData.style.color);
// });


// // Text to Speech
// const elevenlabs_url = "https://api.elevenlabs.io/v1/text-to-speech/";
// const voice = "21m00Tcm4TlvDq8ikWAM";
// const apiKey = "b1c8089527b55c93ffc2bb656f10eb33";

// var sound = document.getElementById('audio');

// async function requestAudioAndUploadToFirebase() {
//     try {
//         let request = {
//             "text": textInput.value,
//             "voice": "en-US_AllisonVoice",
//             "download": true,
//             "accept": "audio/mpeg"
//         };
    
//         // Step 1: Generate audio using Elevenlaps
//         let container = await fetch("https://api.elevenlabs.io/v1/text-to-speech/21m00Tcm4TlvDq8ikWAM/stream", {
//             headers: {
//             'Accept': 'application/json',
//             'Content-Type': 'application/json',
//             'xi-api-key': apiKey
//             },
//             method: "POST",
//             body: JSON.stringify(request)
//         });

//         // Step 2: Decode the audio
//         let audioBlob = await decodeAudio(container.body);

//         // Step 3: Upload the audio to Firebase Storage
//         await uploadAudioToFirebase(audioBlob);
//         console.log("Audio uploaded to Firebase Storage");

  
//     } catch (error) {
//         console.error("Error:", error);
//     }
// }

// const decodeAudio = async (audioChunk) => {
//     let reader = audioChunk.getReader();
//     let chunks = [];
//     while (true) {
//       let { done, value } = await reader.read();
//       if (done) break;
//       chunks.push(value);
//     }
//     let blob = new Blob(chunks, { type: 'audio/mpeg' });

//     return blob;
// };

// const uploadAudioToFirebase = async (audioBlob) => {
//     const audioFileName = 'audio.mp3'; // Specify a filename for the audio

//     const storageRef = ref(storage, audioFileName);

//     // Upload the audio blob to Firebase Storage
//     uploadBytes(storageRef, audioBlob).then((snapshot) => {
//         console.log('Uploaded a blob or file!');
//         getDownloadURL(snapshot.ref).then((downloadURL) => {
//             console.log('File available at', downloadURL);
//             speech_url = downloadURL;
//         });
//     });
// };

// speech_button.addEventListener('click', async function () {
//     requestAudioAndUploadToFirebase();
// });

// const voiceId = "21m00Tcm4TlvDq8ikWAM"; // replace with your voice_id
// const model = 'eleven_monolingual_v1';
// const wsUrl = `wss://api.elevenlabs.io/v1/text-to-speech/${voiceId}/stream-input?model_id=${model}`;
// const socket = new WebSocket(wsUrl);
// let audioData = "";

// // 2. Initialize the connection by sending the BOS message
// socket.onopen = function (event) {
//     const bosMessage = {
//         "text": " ",
//         "voice_settings": {
//             "stability": 0.5,
//             "similarity_boost": true
//         },
//         "xi_api_key": apiKey, // replace with your API key
//     };

//     socket.send(JSON.stringify(bosMessage));

//     // 3. Send the input text message ("Hello World")
//     const textMessage = {
//         "text": "Hello World ",
//         "try_trigger_generation": true,
//     };

//     socket.send(JSON.stringify(textMessage));

//     // 4. Send the EOS message with an empty string
//     const eosMessage = {
//         "text": ""
//     };

//     socket.send(JSON.stringify(eosMessage));
// };

// // 5. Handle server responses
// socket.onmessage = async function (event) {
//     const response = JSON.parse(event.data);

//     console.log("Server response:", response);

//     if (response.audio) {
//         // decode and handle the audio data (e.g., play it)
//         // Step 2: Decode the audio
//         // Decode the base64 string
//         // const decodedAudioData = atob(response.audio);

//         // // Convert the decoded binary data into a Uint8Array
//         // const uint8Array = new Uint8Array(decodedAudioData.length);
//         // for (let i = 0; i < decodedAudioData.length; i++) {
//         //     uint8Array[i] = decodedAudioData.charCodeAt(i);
//         // }

//         // // Create a Blob from the Uint8Array
//         // const audioBlob = new Blob([uint8Array], { type: 'audio/mpeg' });

//         // // Step 3: Upload the audio to Firebase Storage
//         // await uploadAudioToFirebase(audioBlob);
//         // console.log("Audio uploaded to Firebase Storage");
//         audioData = response.audio;
//         console.log("Received audio chunk");
//     } else {
//         console.log("No audio data in the response");
//     }

//     if (response.isFinal) {
//         // the generation is complete
//         const decodedAudioData = atob(audioData);

//         // Convert the decoded binary data into a Uint8Array
//         const uint8Array = new Uint8Array(decodedAudioData.length);
//         for (let i = 0; i < decodedAudioData.length; i++) {
//             uint8Array[i] = decodedAudioData.charCodeAt(i);
//         }

//         // Create a Blob from the Uint8Array
//         const audioBlob = new Blob([uint8Array], { type: 'audio/mpeg' });

//         // Step 3: Upload the audio to Firebase Storage
//         await uploadAudioToFirebase(audioBlob);
//         console.log("Audio uploaded to Firebase Storage");
//     }

//     if (response.normalizedAlignment) {
//         // use the alignment info if needed
//         console.log(response.normalizedAlignment);
//     }
// };

// // Handle errors
// socket.onerror = function (error) {
//     console.error(`WebSocket Error: ${error}`);
// };

// // Handle socket closing
// socket.onclose = function (event) {
//     if (event.wasClean) {
//         console.info(`Connection closed cleanly, code=${event.code}, reason=${event.reason}`);
//     } else {
//         console.warn('Connection died');
//     }
// };



// Audio Recording
// Initialize variables
// let mediaRecorder;
// let audioChunks = [];

// const startButton = document.getElementById('startRecord');
// const stopButton = document.getElementById('stopRecord');
// const playButton = document.getElementById('playRecord');
// const audioPlayer = document.getElementById('audioPlayer');

// // Request access to the user's microphone
// navigator.mediaDevices.getUserMedia({ audio: true })
//     .then(function (stream) {
//         mediaRecorder = new MediaRecorder(stream);

//         // Event handler for when data is available
//         mediaRecorder.ondataavailable = function (e) {
//             if (e.data.size > 0) {
//                 audioChunks.push(e.data);
//             }
//         };

//         // Event handler for when recording is stopped
//         mediaRecorder.onstop = function () {
//             const audioBlob = new Blob(audioChunks, { type: 'audio/wav' });
//             const audioUrl = URL.createObjectURL(audioBlob);
//             audioPlayer.src = audioUrl;
//             playButton.disabled = false;
//         };

//         // Start recording
//         startButton.addEventListener('click', function () {
//             mediaRecorder.start();
//             startButton.disabled = true;
//             stopButton.disabled = false;
//         });

//         // Stop recording
//         stopButton.addEventListener('click', function () {
//             mediaRecorder.stop();
//             startButton.disabled = false;
//             stopButton.disabled = true;
//         });

//         // Play recorded audio
//         playButton.addEventListener('click', function () {
//             audioPlayer.play();
//         });
//     })
//     .catch(function (err) {
//         console.error('Error accessing microphone:', err);
//     });






// const toggleButton = document.getElementById('toggleButton');
// const modalLoading = document.getElementById('modal-preview-loading');

// toggleButton.addEventListener('click', () => {
//   // Toggle the 'animated' class to trigger the animation
//   modalLoading.classList.toggle('animated');

//   // Toggle the 'hidden' class to show/hide the element
//   modalLoading.classList.toggle('hidden');
// });


// Filter Stuff
// script.js
// const products = [
//     { name: 'Laptop', category: 'electronics', brand: 'apple', price: 1200 },
//     { name: 'Smartphone', category: 'electronics', brand: 'samsung', price: 800 },
//     { name: 'T-shirt', category: 'clothing', brand: 'nike', price: 25 },
//     { name: 'Running Shoes', category: 'clothing', brand: 'adidas', price: 80 },
//     { name: 'Book', category: 'books', brand: '', price: 15 },
//     { name: 'Headphones', category: 'electronics', brand: 'sony', price: 150 },
//     { name: 'Dress Shirt', category: 'clothing', brand: 'ralph-lauren', price: 60 },
//     { name: 'Tablet', category: 'electronics', brand: 'samsung', price: 400 },
//     { name: 'Sneakers', category: 'clothing', brand: 'nike', price: 70 },
//     { name: 'Ebook Reader', category: 'electronics', brand: 'amazon', price: 90 },
//     { name: 'Novel', category: 'books', brand: '', price: 12 },
//     { name: 'Smartwatch', category: 'electronics', brand: 'garmin', price: 250 },
//     { name: 'Jeans', category: 'clothing', brand: 'levis', price: 45 },
//     { name: 'Desktop PC', category: 'electronics', brand: 'dell', price: 800 },
//     { name: 'Hiking Boots', category: 'clothing', brand: 'columbia', price: 120 },
//     { name: 'Cookbook', category: 'books', brand: '', price: 18 },
//     { name: 'Camera', category: 'electronics', brand: 'canon', price: 600 },
//     { name: 'Sweater', category: 'clothing', brand: 'gap', price: 35 },
//     { name: 'External Hard Drive', category: 'electronics', brand: 'western-digital', price: 100 },
//     { name: 'Backpack', category: 'clothing', brand: 'north-face', price: 75 },
//     { name: 'Biography', category: 'books', brand: '', price: 20 },
//     { name: 'Gaming Console', category: 'electronics', brand: 'playstation', price: 300 },
//     { name: 'Sunglasses', category: 'clothing', brand: 'ray-ban', price: 100 },
//     { name: 'Printer', category: 'electronics', brand: 'hp', price: 80 },
//     { name: 'Swimsuit', category: 'clothing', brand: 'speedo', price: 30 },
//     { name: 'Mystery Novel', category: 'books', brand: '', price: 15 },
//     { name: 'Bluetooth Speaker', category: 'electronics', brand: 'jbl', price: 70 },
//     { name: 'Hoodie', category: 'clothing', brand: 'adidas', price: 50 },
//     { name: 'Monitor', category: 'electronics', brand: 'lg', price: 250 },
//     { name: 'Winter Jacket', category: 'clothing', brand: 'columbia', price: 100 },
//     { name: 'Science Fiction Book', category: 'books', brand: '', price: 20 },
//     // Add more products here
// ];

// const productList = document.getElementById('product-list');
// const categoryFilter = document.getElementById('category');
// const brandFilter = document.getElementById('brand');
// const priceFilter = document.getElementById('price');
// const loadMoreButton = document.getElementById('load-more');

// let displayedProducts = []; // Array to hold currently displayed products
// let displayLimit = 10; // Initial limit for displayed products

// // Function to render the product list based on filters and display limit
// function renderProductList() {
//     const selectedCategory = categoryFilter.value;
//     const selectedBrand = brandFilter.value;
//     const selectedPrice = priceFilter.value;

//     // Filter products based on selected criteria
//     const filteredProducts = products.filter(product => {
//         return (
//             (selectedCategory === '' || product.category === selectedCategory) &&
//             (selectedBrand === '' || product.brand === selectedBrand) &&
//             (selectedPrice === '' || checkPriceRange(product.price, selectedPrice))
//         );
//     });

//     // Reset the displayed products and limit when filters change
//     displayedProducts = filteredProducts.slice(0, displayLimit);

//     productList.innerHTML = '';

//     if (displayedProducts.length === 0) {
//         productList.innerHTML = '<li>No products match your criteria.</li>';
//     } else {
//         displayedProducts.forEach(product => {
//             const li = document.createElement('li');
//             li.classList.add('product');
//             li.innerHTML = `${product.name} - ${product.category} - ${product.brand} - $${product.price}`;
//             productList.appendChild(li);
//         });

//         // Show "Load More" button if there are more items to display
//         if (displayLimit < filteredProducts.length) {
//             loadMoreButton.style.display = 'block';
//         } else {
//             loadMoreButton.style.display = 'none';
//         }
//     }
// }

// // Function to load more items
// function loadMoreItems() {
//     displayLimit += 10;
//     renderProductList();
// }

// // Event listener for the "Load More" button
// loadMoreButton.addEventListener('click', loadMoreItems);

// // Event listeners for filter changes
// categoryFilter.addEventListener('change', function () {
//     displayLimit = 10; // Reset the display limit when filters change
//     renderProductList();
// });

// brandFilter.addEventListener('change', function () {
//     displayLimit = 10; // Reset the display limit when filters change
//     renderProductList();
// });

// priceFilter.addEventListener('change', function () {
//     displayLimit = 10; // Reset the display limit when filters change
//     renderProductList();
// });

// // Function to check if a product's price falls within the selected range
// function checkPriceRange(price, selectedPrice) {
//     const [min, max] = selectedPrice.split('-').map(Number);
//     if (max === 0) {
//         return price >= min;
//     } else {
//         return price >= min && price <= max;
//     }
// }

// // Initial rendering of the product list
// renderProductList();


// // Event listeners for filter changes
// categoryFilter.addEventListener('change', renderProductList);
// brandFilter.addEventListener('change', renderProductList);
// priceFilter.addEventListener('change', renderProductList);

// // Initial rendering of the product list
// renderProductList();


// document.getElementById('showToastBtn').addEventListener('click', function () {
//     var toast = document.getElementById('toast');
//     var progressBar = document.getElementById('progressBar');
//     var toastMessage = document.getElementById('toastMessage');

//     // Set the message
//     toastMessage.textContent = "This is a custom toast message.";

//     // Show the toast
//     toast.style.opacity = 1;

//     // Update progress bar
//     progressBar.style.width = '0%';

//     // Animate the progress bar
//     var duration = 4000; // 4 seconds in milliseconds
//     var interval = 100; // Update every 100 milliseconds
//     var startTime = Date.now();

//     function updateProgressBar() {
//         var currentTime = Date.now();
//         var elapsedTime = currentTime - startTime;
//         var progress = (elapsedTime / duration) * 100;
//         progressBar.style.width = progress + '%';

//         if (elapsedTime < duration) {
//             setTimeout(updateProgressBar, interval);
//         } else {
//             // Hide the toast when the progress is complete
//             toast.style.opacity = 0;
//         }
//     }

//     updateProgressBar();
// });


// /** Implementation of the presentation of the audio player */
// import lottieWeb from 'https://cdn.skypack.dev/lottie-web';

// const playIconContainer = document.getElementById('play-icon');
// const audioPlayerContainer = document.getElementById('audio-player-container');
// const seekSlider = document.getElementById('seek-slider');
// let playState = 'play';

// const playAnimation = lottieWeb.loadAnimation({
//   container: playIconContainer,
//   path: 'https://maxst.icons8.com/vue-static/landings/animated-icons/icons/pause/pause.json',
//   renderer: 'svg',
//   loop: false,
//   autoplay: false,
//   name: "Play Animation",
// });

// playAnimation.goToAndStop(14, true);

// playIconContainer.addEventListener('click', () => {
//     if(playState === 'play') {
//         audio.play();
//         seekSlider.style.display = 'block';
//         playAnimation.playSegments([14, 27], true);
//         requestAnimationFrame(whilePlaying);
//         playState = 'pause';
//     } else {
//         audio.pause();
//         seekSlider.style.display = 'none';
//         playAnimation.playSegments([0, 14], true);
//         cancelAnimationFrame(raf);
//         playState = 'play';
//     }
// });

// const showRangeProgress = (rangeInput) => {
//     if(rangeInput === seekSlider) audioPlayerContainer.style.setProperty('--seek-before-width', rangeInput.value / rangeInput.max * 100 + '%');
//     else audioPlayerContainer.style.setProperty('--volume-before-width', rangeInput.value / rangeInput.max * 100 + '%');
// }

// seekSlider.addEventListener('input', (e) => {
//     showRangeProgress(e.target);
// });





// /** Implementation of the functionality of the audio player */

// const audio = document.querySelector('audio');
// const durationContainer = document.getElementById('duration');
// const currentTimeContainer = document.getElementById('current-time');
// let raf = null;

// const calculateTime = (secs) => {
//     const minutes = Math.floor(secs / 60);
//     const seconds = Math.floor(secs % 60);
//     const returnedSeconds = seconds < 10 ? `0${seconds}` : `${seconds}`;
//     return `${minutes}:${returnedSeconds}`;
// }

// // const displayDuration = () => {
// //     durationContainer.textContent = calculateTime(audio.duration);
// // }

// const setSliderMax = () => {
//     seekSlider.max = Math.floor(audio.duration);
// }

// const displayBufferedAmount = () => {
//     const bufferedAmount = Math.floor(audio.buffered.end(audio.buffered.length - 1));
//     audioPlayerContainer.style.setProperty('--buffered-width', `${(bufferedAmount / seekSlider.max) * 100}%`);
// }

// const whilePlaying = () => {
//     seekSlider.value = Math.floor(audio.currentTime);
//     // currentTimeContainer.textContent = calculateTime(seekSlider.value);
//     audioPlayerContainer.style.setProperty('--seek-before-width', `${seekSlider.value / seekSlider.max * 100}%`);
//     raf = requestAnimationFrame(whilePlaying);
// }

// if (audio.readyState > 0) {
//     // displayDuration();
//     setSliderMax();
//     displayBufferedAmount();
// } else {
//     audio.addEventListener('loadedmetadata', () => {
//         // displayDuration();
//         setSliderMax();
//         displayBufferedAmount();
//     });
// }

// audio.addEventListener('progress', displayBufferedAmount);

// seekSlider.addEventListener('input', () => {
//     if(!audio.paused) {
//         cancelAnimationFrame(raf);
//     }
// });

// seekSlider.addEventListener('change', () => {
//     audio.currentTime = seekSlider.value;
//     if(!audio.paused) {
//         requestAnimationFrame(whilePlaying);
//     }
// });

const input = document.getElementById('dropdown-input');
const dropdownList = document.getElementById('dropdown-list');
const dropdownArrow = document.querySelector('.dropdown-arrow');
const dropdownItems = document.querySelectorAll('.dropdown-item');

input.addEventListener('focus', function () {
    dropdownList.style.display = 'block';
});

input.addEventListener('blur', function () {
    setTimeout(function () {
        dropdownList.style.display = 'none';
    }, 200); // Delay to handle clicks on the dropdown list
});

input.addEventListener('input', function () {
    const searchTerm = input.value.toLowerCase();

    dropdownItems.forEach(function (item) {
        const text = item.textContent.toLowerCase();
        if (text.includes(searchTerm)) {
            item.style.display = 'block';
        } else {
            item.style.display = 'none';
        }
    });
});

dropdownArrow.addEventListener('click', function () {
    dropdownList.style.display = (dropdownList.style.display === 'block') ? 'none' : 'block';
});

dropdownItems.forEach(function (item) {
    item.addEventListener('click', function () {
        input.value = item.textContent;
        input.setAttribute('data-selected-language', item.getAttribute('data-language'));
        dropdownList.style.display = 'none';

        // Access the selected value elsewhere in your code
        const selectedLanguage = input.getAttribute('data-selected-language');
        console.log('Selected Language:', selectedLanguage);
    });
});

// Set a default value when the page loads
input.value = "English"; // Change this to the default language of your choice
input.setAttribute('data-selected-language', 'English'); // Set the default selected language










import { Preview } from '@creatomate/preview'

export default function startPreview (previewJSON, elementId) {
    console.log('Startin Preview...');

    // The following assumes that you have a HTML element like this: <div id="container"></div>
    const containerElement = document.getElementById(elementId);

    // Initialize a preview to be spawned within the container
    const preview = new Preview(containerElement, 'player', 'public-29s5yb0fh57o1e4mt3ljs0g6');

    return preview;

    // Once the SDK is ready, load a template from the project
    // preview.onReady = async () => {
    //     // await preview.loadTemplate('fb3b2d97-1274-4bc4-9cb1-6c9881146ddd');
    
    //     // You can also load a video from JSON:
    //     await preview.setSource(previewJSON);
    // };
};


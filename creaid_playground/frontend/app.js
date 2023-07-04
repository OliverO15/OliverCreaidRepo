// Global Settings
let numChapters = 1;
let chaptersLength = 10;

// Init Data
const colors = [
    "#FF0000",
    "#00FF00",
    "#0000FF",
    "#FFFF00",
    "#FF00FF",
    "#00FFFF",
    "#FFA500",
    "#800080",
    "#008000",
    "#FFC0CB",
    "#A52A2A",
    "#808080"
];

const grayscaleCodes = [
    "#000000", // Black
    "#1a1a1a",
    "#333333",
    "#4d4d4d",
    "#666666",
    "#808080",
    "#999999",
    "#b3b3b3",
    "#cccccc",
    "#e6e6e6",
    "#ffffff" // White
  ];

const orangeCodes = [
"#FFA500",
"#FF9900",
"#FF8C00",
"#FF8000",
"#FF7300",
"#FF6600",
"#FF5900"
];

// Timeline Json
const data = 
{
    "timeline": {
        "tracks": []
    }
};

// Setting changes

const setChaptersButton = document.getElementById("changeNumChapters");
setChaptersButton.addEventListener("click", () => {
    const radioButtons = document.querySelectorAll('input[name="chapters"]');

    // Get selected radio button
    let selectedNum;
    for (const radioButton of radioButtons) {
        if (radioButton.checked) {
            selectedNum = radioButton.value;
            break;
        }
    }

    numChapters = parseInt(selectedNum);

    buildHTML();
    buildJSON();
});

const setChapterLenButton = document.getElementById("changeChapterLen");
setChapterLenButton.addEventListener("click", () => {
    chaptersLength = parseInt(document.getElementById("chapterLen").value);

    buildJSON();
});


// Functions

// Global
const stringifyJson = (data) => {
    // Convert JSON object to a formatted string
    const jsonString = JSON.stringify(data, null, 2);

    // Display the JSON string in the <pre> element
    const jsonDisplay = document.getElementById('json-display');
    jsonDisplay.textContent = jsonString;
};

const changeIntensity = (dropdownNum) => {
    const value = parseInt(document.getElementById(`intensity_dropdown_${dropdownNum}`).value);
    dropdownNum = parseInt(dropdownNum);

    changeIntensityHTML(dropdownNum, value);
    changeIntensityJSON(dropdownNum+1, value);
}


// HTML

const buildHTML = () => {
    clearHTML();

    for (let i = 0; i < numChapters; i++) {
        addChapterHTML(i);
    }
}

const clearHTML = () => {
    const dropdownTimeline = document.getElementById("dropdownTimeline");
    const videoTimeline = document.getElementById("videoTimeline");
    const transitionTimeline = document.getElementById("transitionTimeline");
    const textTimeline = document.getElementById("textTimeline");

    dropdownTimeline.innerHTML = '';
    videoTimeline.innerHTML = '';
    transitionTimeline.innerHTML = '';
    textTimeline.innerHTML = '';
}

const addChapterHTML = (id) => {
    const dropdownTimeline = document.getElementById("dropdownTimeline");
    const videoTimeline = document.getElementById("videoTimeline");
    const transitionTimeline = document.getElementById("transitionTimeline");
    const textTimeline = document.getElementById("textTimeline");

    dropdownTimeline.innerHTML += addDropdownHTML(id);
    videoTimeline.innerHTML += addVideoHTML(id, 2);
    transitionTimeline.innerHTML += addTransitionHTML(id);
    textTimeline.innerHTML += addTitleHTML(id);
}

const addDropdownHTML = (id) => {
    return `
    <select class="item" name="intensity" id="intensity_dropdown_${id}" onchange="changeIntensity('${id}')">
        <option value="2">Low</option>
        <option value="3">Mid</option>
        <option value="4">High</option>
    </select>
    `;
}

const addVideoHTML = (id, numVideos) => {
    videoElements = ``

    for (let i = 0; i < numVideos; i++) {
        videoElements += `
        <div id="video" style="background-color: ${colors[0]}"></div>
        `;
    }

    return `
    <div id="chapter_${id}" class="video_chapter">
        <div class="item" id="video_chapter_${id}">
            ${videoElements}
        </div>
    </div>
    `;
}

const addTransitionHTML = (id) => {
    // Empty if first chapter
    if (id == 0) {
        return `
        <div class="item" id="transition_${id}">
        `
    }

    return `
    <div class="item" id="transition_${id}">
        <div class="transition" style="background-color: ${grayscaleCodes[0]}"></div>
    </div>
    `;
}

const addTitleHTML = (id) => {
    return `
    <div class="item" id="title_${id}">
        <div class="title" style="background-color: ${orangeCodes[0]}"></div>
    </div>
    `;
}

const changeIntensityHTML = (id, value) => {
    chapter = document.getElementById(`video_chapter_${id}`);
    chapter.innerHTML = '';

    chapter.innerHTML = addVideoHTML(id, value);
}

buildHTML();

// JSON

const buildJSON = () => {
    data.timeline.tracks = [];

    // Add Text
    let curr_time = 0;
    data.timeline.tracks.push({"clips": []});

    for (let i = 0; i < numChapters; i++) {
        data.timeline.tracks[0].clips.push(addTextJSON(curr_time, 2));
        curr_time += chaptersLength;
    }

    // Add Videos and Transitions
    curr_time = 0;
    for (let i = 0; i < numChapters; i++) {
        data.timeline.tracks.push(addChaperJSON(i, 2, curr_time));
        curr_time += chaptersLength;
    }

    // Stringify JSON
    stringifyJson(data);
}

const addChaperJSON = (id, numVideos, start) => {
    // No Transition
    if (numChapters == 1  || id == numChapters -1) {
        retChapter = 
        {
            "clips": addVideosJSON(numVideos, start),
        };
        return retChapter;
    }

    // With Transition
    retChapter =
    {
        "clips": [addTransitionJSON(start + chaptersLength, 2), ...addVideosJSON(numVideos, start)],
    };
    return retChapter;
}

const addVideosJSON = (numVideos, start) => {

    const video_json = (start, length) => {
        return {
            "asset":{
                "type": "video",
                "src": colors[0],
            },
            "start": start,
            "length": length
        }
    }

    curr_time = start;
    ret_videos = [];

    for (let i = 0; i < numVideos; i++) {
        ret_videos.push(video_json(curr_time, chaptersLength / numVideos));
        curr_time += chaptersLength / numVideos;
    }

    return ret_videos;

}

const addTransitionJSON = (start, length) => {
    const transition_json = 
    {
        "asset": {
            "type": "luma",
            "src": grayscaleCodes[0]
        },
        "start": start,
        "length": length
    };

    return transition_json;
}

const addTextJSON = (start, length) => {
    const title_json = 
    {
        "asset": {
            "type":"title",
            "text":"Hello World",
            "style":"minimal"
        },
        "start":start + 1,
        "length":length,
        "transition":{
            "in":"fade",
            "out":"fade"
       }
    };

    return title_json;
}

const changeIntensityJSON = (id, value) => {
    data.timeline.tracks[id] = addChaperJSON(id + 1, value, (id - 1) * chaptersLength);

    stringifyJson(data);
}

buildJSON();
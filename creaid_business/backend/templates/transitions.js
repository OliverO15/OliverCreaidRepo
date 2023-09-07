// Assets
const transitions = [
    "https://res.cloudinary.com/dr5jfzcjp/video/upload/v1692718293/fashion/Swipe04_LUMA_vbywr8.mp4"
];

const getRandomItem = (list) => {
    const randomIndex = Math.floor(Math.random() * list.length);
    return list[randomIndex];
}

const normal_transition = (start, track, speed) => {
    // Input Validation

    // Tempalte
    const template =  {
        "type": "video",
        "track": track,
        "duration": "3 s",
        "time": `${start} s`,
        "mask_mode": "luma",
        "source": getRandomItem(transitions),
        "speed": `${speed}%`,
    };

    return template
}

module.exports = { normal_transition };
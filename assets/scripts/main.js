// // main.js

// globals
let volSlider = document.getElementById("volume-slider");
let volStr = document.getElementById("volume-number");
let sound = document.getElementById("horn-sound");
let honkBtn = document.getElementById("honk-btn");
let volImg = document.getElementById("volume-image"); 
let updateImg  = document.getElementById("audio-selection");
let soundImg = document.getElementById("sound-image");
let hornForm = document.getElementById("party-horn-form")


// when the slider changes, change the string value
function changeStrVal(){
    // change the string
    volStr.value = volSlider.value;
    if(volSlider.value > 100)
        volStr.value = 100;
    // adjust the volume
    sound.volume = volSlider.value / 100;
    updateVolImg();
}
// when the string value changes, change the bar
function changeSliderVal(){
    volSlider.value = volStr.value;
    if(volStr.value > 100)
        volSlider.value = 100;
    sound.volume = volSlider.value / 100;
    updateVolImg();
}

function updateVolImg(){
    // defult show the button
    honkBtn.disabled = false;

    // check which honk button to display based on volume (slider & str are the same)
    if(volStr.value == 0){
        honkBtn.disabled = true;
        volImg.src = "assets/media/icons/volume-level-0.svg";
    } else if(volStr.value > 66) // [67,100]
        volImg.src = "assets/media/icons/volume-level-3.svg";  //"../media/icons/volume-level-3.svg";
     else if(volStr.value < 34) // [1,33]
        volImg.src = "assets/media/icons/volume-level-1.svg";
     else // [34,66]
        volImg.src = "assets/media/icons/volume-level-2.svg";
}

function changeImg(){
    let airHornChecked = document.getElementById('radio-air-horn').checked;
    let carHornChecked = document.getElementById('radio-car-horn').checked;
    let partyHornChecked = document.getElementById('radio-party-horn').checked;

    if(airHornChecked){
        sound.src = "assets/media/audio/air-horn.mp3";
        soundImg.src = "assets/media/images/air-horn.svg";
    }

    if(carHornChecked){
        sound.src = "assets/media/audio/car-horn.mp3";
        soundImg.src = "assets/media/images/car.svg";
    }

    if(partyHornChecked){
        sound.src = "assets/media/audio/party-horn.mp3";
        soundImg.src = "assets/media/images/party-horn.svg";
    }
}

function makeNoise(event) {
    event.preventDefault();
    sound.play();
}

// events - when something changes it should trigger these
volSlider.addEventListener("input", changeStrVal);
volStr.addEventListener("input", changeSliderVal);
updateImg.addEventListener("change", changeImg);
hornForm.addEventListener("submit", makeNoise);
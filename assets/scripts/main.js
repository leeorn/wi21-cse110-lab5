// // main.js

// globals
let volSlider = document.getElementById("volume-slider");
let volStr = document.getElementById("volume-number");
let sound = document.getElementById("horn-sound") 


/*
TODO
- when the slider changes change tne string vale
- when the string value changes change the bar
- 
- 
- 
- 
*/

function updateVol(){

}

// when the slider changes, change the string value
function changeStrVal(){
    // change the string
    volStr.value = volSlider.value;
    // adjust the volume
    sound.volume = volSlider.value / 100;
    updateVol();
}
// when the string value changes, change the bar
function changeSliderVal(){
    volSlider.value = volStr.value;
    sound.volume = volSlider.value / 100;
    updateVol();
}



// events - when something changes it should trigger these
volSlider.addEventListener("input", changeStrVal);
volStr.addEventListener("input", changeSliderVal);
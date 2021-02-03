// // main.js

// globals
let volSlider = document.getElementById("volume-slider");
let volStr = document.getElementById("volume-number");
let sound = document.getElementById("horn-sound");
let honkBtn = document.getElementById("honk-btn");
let volImg = document.getElementById("volume-image"); 


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
    updateVolImg();
}
// when the string value changes, change the bar
function changeSliderVal(){
    volSlider.value = volStr.value;
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


// events - when something changes it should trigger these
volSlider.addEventListener("input", changeStrVal);
volStr.addEventListener("input", changeSliderVal);
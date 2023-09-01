
// Get the input elements
var minutesInput = document.getElementById("minutes");
var secondsInput = document.getElementById("seconds");

// Add event listeners to handle input
minutesInput.addEventListener("input", handleMinutesInput);
secondsInput.addEventListener("input", handleSecondsInput);

function handleMinutesInput() {
    var minutes = parseInt(minutesInput.value);
    
    if (isNaN(minutes)) {
        minutesInput.value = "";
    } else if (minutes < 0) {
        minutesInput.value = 59; // If the value is negative, reset to 59
    } else if (minutes > 59) {
        minutesInput.value = 0; // If the value is greater than 59, reset to 0
    }
}

function handleSecondsInput() {
    var seconds = parseInt(secondsInput.value);
    
    if (isNaN(seconds)) {
        secondsInput.value = "";
    } else if (seconds < 0) {
        secondsInput.value = 59; // If the value is negative, reset to 59
    } else if (seconds > 59) {
        secondsInput.value = 0; // If the value is greater than 59, reset to 0
    }
}
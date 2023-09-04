
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

//Date in JS

const date = new Date()


let day = date.getDate()
let month = date.getMonth() +1
let year = date.getFullYear()


let fullDate = `${day}-${month}-${year}`

console.log(fullDate);
console.log(date)

//Current Time in JS

function updateClock () {

const currentTime = new Date();
var resultElement = document.getElementById("clock")
const hours = currentTime.getHours();
const minutes = currentTime.getMinutes();
const seconds = currentTime.getSeconds();
const timeString = `${hours}:${minutes}:${seconds}`;

var result = timeString;

resultElement.innerHTML = result;

//console.log(`Current time: ${hours}:${minutes}:${seconds}`);

}
//update time every second


setInterval(updateClock, 1000);
updateClock();



//Take time and put it on an array and display it

// Initialize an empty array to store times
const timeArray = [];

// Function to get current time and add 25 minutes
function addTime() {
  const currentTime = new Date();
  const newTime = new Date(currentTime.getTime() + 25 * 60000); // 25 minutes in milliseconds
  timeArray.push(newTime);
  displayTimes();
}

// Function to display the times in the array
function displayTimes() {
  const timeList = document.getElementById('timeList');
  timeList.innerHTML = ''; // Clear previous entries

  for (const time of timeArray) {
    const listItem = document.createElement('li');
    listItem.textContent = time.toLocaleTimeString();
    timeList.appendChild(listItem);
  }
}

// Add a click event listener to the button
const addButton = document.getElementById('addButton');
addButton.addEventListener('click', addTime);
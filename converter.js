
// Created variable for entering temp value
var button = document.getElementById("tempButton");



// Function to capture and store temperature value

function getTemp() {
	console.log("getTemp");
	temperature = document.getElementById("tempInput").value;
      console.log("temperature", temperature);
   
}



// Convert temperature to Fahrenheit

function toFahrenheit() {
	convTemp = Math.floor(("temperature" * 1.8) + 32);
	console.log("to F = ", convTemp);
}

//Convert temperature to Celcius

function toCelcius() {
	convTemp = Math.floor(("temperature" -32) * .5556);
	console.log("to C = ", convTemp)
}

//Clear text in temp input field

function eraseText() {
    document.getElementById("tempInput").value = "";
}

//Listen for click in temp field, go to function to capture

button.addEventListener("click", getTemp);

document.getElementById("toFahr").addEventListener("click", toFahrenheit);

document.getElementById("toCelc").addEventListener("click", toCelcius);



// If the temperature is greater than 90F/32C the color of the converted temperature should be red.
// if (convTemp > 90 || convTemp > 32) {

// }
// If the temperature is less than 32F/0C the color of the converted temperature should be blue.
// if else (convTemp < 32 || convTemp < 0) {

// }

// For any other temperature, the color should be green.
// else () {

// }

// Popup displaying converted temp



// window.addEventListener("keyup", getTemp);

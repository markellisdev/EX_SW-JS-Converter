
var submit = document.getElementById("submit");

var clear = document.getElementById("clear");


<!-- // This function should determine which conversion should
// happen based on which radio button is selected. -->
function determineConverter (input) {
  // console.log("input = ", input);
  	
	var F = document.getElementById("F");

	var C = document.getElementById("C");

	// console.log("F and C", F, C);
	
	if (F.checked) {
		// console.log("F", F);
		toFahrenheit(input);
	}

	else if (C.checked) {
		// console.log("C", C);	
		toCelcius(input);		
	}

	else {
		// console.log("nothing")
		alert("Please select Fahrenheit or Celsius");
	}



}

function toCelcius (input) {
	// console.log("input", input);
	var outputTemp = ((input * 1.8) + 32);
	outputToDom(outputTemp, "F");
}

function toFahrenheit (input) {
	// console.log("input", input);
	var outputTemp = ((input - 32) * .5556);
	outputToDom(outputTemp, "C");

}


function checkInput (yes) {
	var input = document.getElementById("input").value;	
	//console.log(input.value)
	if (input) {
		determineConverter(input);
	}

	else {
		alert("Please enter a number before pressing submit");
	}

}

function outputToDom (outputTemp, type) {
	var output = document.getElementById("output");
	var fixed = outputTemp.toFixed(2);
	// console.log("outputTemp", fixed, type);
	if (type === "C") {

		if (outputTemp > 32) {
			output.innerHTML = "<p class='red'>" + "Your converted temperature is " + fixed + " degrees Celcius.</p>";
		}

		else if (outputTemp < 0) {
			output.innerHTML = "<p class='blue'>" + "Your converted temperature is " + fixed + " degrees Celcius.</p>";
		}

		else {
		output.innerHTML = "<p class='green'>" + "Your converted temperature is " + fixed + " degrees Celcius.</p>";
		}	
	}

	else if (type === "F") {

		if (outputTemp > 90) {
			output.innerHTML = "<p class='red'>" + "Your converted temperature is " + fixed + " degrees Fahrenheit.</p>";
		}

		else if (outputTemp < 32) {
			output.innerHTML = "<p class='blue'>" + "Your converted temperature is " + fixed + " degrees Fahrenheit.</p>";
		}

		else {
			output.innerHTML = "<p class='green'>" + "Your converted temperature is " + fixed + " degrees Fahrenheit.</p>";
		}	
		

	}

}

function resetForm (button) {
	// console.log("input", F);
	document.getElementById("F").checked = false;
	document.getElementById("C").checked = false;
	document.getElementById("input").value = "";
}

<!-- // Assign a function to be executed when the button is clicked -->
submit.addEventListener("click", checkInput);

clear.addEventListener("click", resetForm);
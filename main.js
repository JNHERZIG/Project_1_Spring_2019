// The purpose of this script is to calculate the score of the user on the Periodic Table of the Elements Quiz;
var i = 0;
var passingScore = 7;

function submitQuiz() {
	// Create variables for each response in form of ansElementName and set it equal to the value of the answer chosen by the client using document.querySelector to retrieve the information from the DOM
	var ansCarbon= document.querySelector("input[name='carbon']:checked").value;

	if (ansCarbon == "correct") {
		document.querySelector(".carbon").innerHTML = "Correct!";
		i++;
	} else {
		document.querySelector(".carbon").innerHTML = "Wrong";
	}

	// Check to see if Hydrogen is correct
	var ansHydrogen = document.querySelector("input[name='hydrogen']:checked").value;

	if (ansHydrogen == "correct") {
		document.querySelector(".hydrogen").innerHTML = "Correct!";
		i++;
	} else {
		document.querySelector(".hydrogen").innerHTML = "Wrong!";
	}
	

	// Check to see if Oxygen is correct
	var ansOxygen = document.querySelector("input[name='oxygen']:checked").value;

	if (ansOxygen == "correct") {
		document.querySelector(".oxygen").innerHTML = "Correct!";
		i++;
	} else {
		document.querySelector(".oxygen").innerHTML = "Wrong!";
	}

	// check to see if Xenon is correct
	var ansXenon = document.querySelector("input[name='xenon']:checked").value;

	if (ansXenon == "correct") {
		document.querySelector(".xenon").innerHTML = "Correct!";
		i++;
	} else {
		document.querySelector(".xenon").innerHTML = "Wrong!";
	}

	// Check to see if Silicon is correct
	var ansSilicon = document.querySelector("input[name='silicon']:checked").value;

	if (ansSilicon == "correct") {
		document.querySelector(".silicon").innerHTML = "Correct!";
		i++;
	} else {
		document.querySelector(".silicon").innerHTML = "Wrong!";
	}
	
	// Check to see if Nitrogen correct
	var ansNitrogen = document.querySelector("input[name='nitrogen']:checked").value;

	if (ansNitrogen == "correct") {
		document.querySelector(".nitrogen").innerHTML = "Correct!";
		i++;
	} else {
		document.querySelector(".nitrogen").innerHTML = "Wrong!";
	}

	// Check to see if Selenium is correct
	var ansSelenium = document.querySelector("input[name='selenium']:checked").value;

	if (ansSelenium == "correct") {
		document.querySelector(".selenium").innerHTML = "Correct!";
		i++;
	} else {
		document.querySelector(".selenium").innerHTML = "Wrong!";
	}

	// Check to see if Potassium is correct
	var ansPotassium = document.querySelector("input[name='potassium']:checked").value;

	if (ansPotassium == "correct") {
		document.querySelector(".potassium").innerHTML = "Correct!";
		i++;
	} else {
		document.querySelector(".potassium").innerHTML = "Wrong!";
	}

	// check to see if Phosphorus is correct
	var ansPhosphorus = document.querySelector("input[name='phosphorus']:checked").value;

	if (ansPhosphorus== "correct") {
		document.querySelector(".phosphorus").innerHTML = "Correct!";
		i++;
	} else {
		document.querySelector(".phosphorus").innerHTML = "Wrong!";
	}


	// Check to see if Rubidium correct
	var ansRubidium = document.querySelector("input[name='rubidium']:checked").value;

	if (ansRubidium == "correct") {
		document.querySelector(".rubidium").innerHTML = "Correct!";
		i++;
	} else {
		document.querySelector(".rubidium").innerHTML = "Wrong!";
	}
	
	if (i > 7) {
		document.querySelector(".score").innerHTML = "You passed!";
		document.querySelector(".numRight").innerHTML = i + "0%";
	} else {
		document.querySelector(".score").innerHTML = "You failed!";
		document.querySelector(".numRight").innerHTML = i + "0%";
	}
}

// Create an array that contains the letters of the alphabet
var alphabet = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];

//The stackLetter function should accept the array as the sole argument
function stackLetter() {
	for (var i = 0; i < alphabet.length; i++) {
		console.log(alphabet.slice(0,i)); //to slice array to show a ab abc..
		var row = " "; //create empty string to use below
		}
	for (var l = 0; l < alphabet.length; l++) {
	 	row += alphabet[l]; //add to row from array to split
		if (l % 3 == 0 && l != 0) {	//split by 3
		row += " "; //add empty space after each 3
		}
	console.log(row); //finished product
	}		
}

stackLetter(alphabet); //call the function to run it





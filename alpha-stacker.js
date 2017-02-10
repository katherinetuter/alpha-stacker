// Create an array that contains the letters of the alphabet
var alphabet = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];

//The stackLetter function should accept the array as the sole argument
function stackLetter() {
	for (var i = 0; i < alphabet.length; i++) {
		console.log(alphabet.slice(0,i));
		var row = " ";
		}
	for (var l = 0; l < alphabet.length; l++) {
	 	row += alphabet[l];
		if (l % 3 == 0 && l != 0) {	
		row += " ";
		}
	console.log(row);
	}		
}

stackLetter(alphabet);





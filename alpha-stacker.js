// Create an array that contains the letters of the alphabet
var alphabet = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];

// The stackLetter function should accept the array as the sole argument


function stackLetter(alphabet) {
   	var i;
    for (var i = 0; i <= alphabet.length; i + 1) {
    alphabet.push({num:i});
	console.log(alphabet);
	};	
};




function passValidator(pass) {
	let isValid = true;
  let digitCounter = 0;

  passLength();
  passType();
  hasTwoDigits();

  function passLength() {
	  if (pass.length < 6 || pass.length > 10) {
	  	isValid = false;
        console.log('Password must be between 6 and 10 characters');
	  }
  }

  function passType() {
	    for (let j = 0; j < pass.length; j++) { 
            let currentSymbol = pass[j];
            if (isNaN(+currentSymbol) && currentSymbol.toUpperCase() === currentSymbol.toLowerCase()) {
                isValid = false;
                console.log('Password must consist only of letters and digits');
                break;
            }
            }
  } 
    
  function hasTwoDigits() {
    let isValidPass = false;
    for (k = 0; k < pass.length; k++) {
        if (Number.isInteger(+pass[k])) {
           digitCounter++;
            if (digitCounter >= 2) {
	            isValidPass = true;
	            break;
            }
        }
    }
    if(!isValidPass) {
        isValid = false;
        console.log('Password must have at least 2 digits');
    }
  }

  if (isValid) {
    console.log('Password is valid');
  }

} 

function charachtersInRange(charOne, charTwo) {
  	let startNum = +charOne.charCodeAt(0);
    let endNum = +charTwo.charCodeAt(0);
    let output = '';
    
        if (startNum < endNum) {
            for (let i = startNum + 1; i < endNum; i++) {
            output += String.fromCharCode(i) + ' ';
            }
        } else {
            for (let j = endNum + 1; j < startNum; j++) {
            output += String.fromCharCode(j) + ' ';
            }
        }
		
	console.log(output);
}

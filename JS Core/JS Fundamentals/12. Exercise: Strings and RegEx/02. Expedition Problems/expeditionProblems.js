function solve() {
  let messageDevider = document.getElementById('str').value;
  let fullMessage = document.getElementById('text').value;
  let result = document.getElementById('result');

//extract the coordinates
let regex = /(east|north)[\s\S]*?(\d{2})[^,]*?,[^,]*?([\d]{6})/gi;
let m;
let north;
let east;

while ((m = regex.exec(fullMessage)) !== null) {
    let coord = m[1].toUpperCase();
        if (coord === 'NORTH') {
          north = `${m[2]}.${m[3]} N`;
		    } else if (coord === 'EAST') {
          east = `${m[2]}.${m[3]} E`;
        } 
}

//extract the message from the string
let regexMessage = new RegExp(`${messageDevider}(.*?)${messageDevider}`, 'g');
let message = regexMessage.exec(fullMessage)[1];
let outputMessage = `Message: ${message}`;

createP(north);
createP(east);
createP(outputMessage);

function createP(input) {
	let p = document.createElement('p');
	p.textContent = input;
	result.appendChild(p);
} 
}

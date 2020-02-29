function solve() {
  let inputArr = JSON.parse(document.getElementById('arr').value);
  let result = document.getElementById('result');
	
let specialKey = inputArr.shift();
let regex = new RegExp(`(\\s|^)${specialKey}\\s+([A-Z!#$%]{8,})(\\.|,|\\s|$)`, 'gi');

inputArr.forEach((line) => {
	let match;
	while ((match = regex.exec(line)) != null) {
   	 	let decodedMessage = match[2];
		if (decodedMessage.toUpperCase() === decodedMessage) {
		let encodedMessage = decodedMessage
			.toString()
			.split('')
			.map(symbol => {
				
				if (symbol === '!') {
					return symbol = 1;
				} else if (symbol === '%') {
					return symbol = 2;
				} else if (symbol === '#') {
					return symbol = 3;
				} else if (symbol === '$') {
					return symbol = 4;
				} else if (symbol.charCodeAt(0) > 64 && symbol.charCodeAt(0) < 91) {
					return symbol = symbol.toLowerCase();
				} else {
					return symbol;
				}
			})
			.join('');
		line = line.replace(decodedMessage, encodedMessage);
		}
	}
	createP(line);
});

function createP(input) {
	let p = document.createElement('p');
	p.textContent = input;
	result.appendChild(p);
}

}

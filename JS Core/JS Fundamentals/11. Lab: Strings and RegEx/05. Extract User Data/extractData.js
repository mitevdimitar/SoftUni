function solve() {
  let inputArr = JSON.parse(document.getElementById('arr').value);
  let result = document.getElementById('result');
inputArr.forEach(element => {
	let patern = /^([A-Z][a-z]* [A-Z][a-z]*) (\+359 \d \d{3} \d{d}|\+359-\d-\d{3}-\d{3}) ([a-z0-9]+@[a-z]+\.[a-z]{2,3})$/g;
	
	let name;
	let phone;
	let mail;
	let end = '- - -';
	let invalid = 'Invalid data';

	let match = patern.exec(element);
	console.log(match);
	if (match) {
		name = match[1];
		let firstLine = `Name: ${name}`;
		createP(firstLine);
		phone = match[2];
		let secondLine = `Phone Number: ${phone.trim()}`;
		createP(secondLine);
		mail = match[3];
		let thirdLine = `Email: ${mail.trim()}`;
		createP(thirdLine);
	} else {
		createP(invalid);
	}
	createP(end);
});

function createP(input) {
	let p = document.createElement('p');
	p.innerHTML = input;
	result.appendChild(p);
}
}

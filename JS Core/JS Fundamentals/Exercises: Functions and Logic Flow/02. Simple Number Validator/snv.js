function validate() {
    let button = document.querySelector('#exercise button');
let positionWeights = {
	0: 2,
	1: 4,
	2: 8,
	3: 5,
	4: 10,
	5: 9,
	6: 7,
	7: 3,
	8: 6
}

button.addEventListener('click', validateNumber);

function validateNumber() {
	let response = document.getElementById('response');
	let string = document.querySelector('#exercise input').value;
	let numArr = string.split('');
	let lastDigit = Number(numArr.pop());
	let sum = 0;
	for (let i = 0; i < numArr.length; i++) {
		sum += Number(numArr[i]) * positionWeights[i];
	}
	let reminder = sum % 11;
	if (reminder === 10) {
		reminder = 0;
	}
	if (reminder === lastDigit) {
		response.textContent = 'This number is Valid!';
	} else {
		response.textContent = 'This number is NOT Valid!';
	}
}
}

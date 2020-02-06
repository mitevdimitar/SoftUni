function validate() {
    let button = document.querySelector('#exercise button');
let positionWeights = [2, 4, 8, 5, 10, 9, 7, 3, 6];

button.addEventListener('click', validateNumber);

function validateNumber() {
	let response = document.getElementById('egn');
	let numArr = [];
	let year = document.getElementById('year').value;
	let month = document.getElementById('month');
	let date = document.getElementById('date').value;
	let code = document.getElementById('region').value;
	
	if (year >= 1900 && year <= 2100 && code >= 43 && code <= 999) {
		numArr.push(year[2], year[3]);
	let monthIndex = month.selectedIndex;
	let monthString = monthIndex.toString();
	digitChecker(monthString, numArr);
	
	digitChecker(date, numArr);	
	
	numArr.push(code[0], code[1]);

	if (document.getElementById('male').checked) {
		numArr.push('2');
	} else if (document.getElementById('female').checked) {
		numArr.push('1');
	}
	
	let sum = 0;
	for (let i = 0; i < numArr.length; i++) {
		sum += Number(numArr[i]) * positionWeights[i];
	}
	let reminder = sum % 11;
	if (reminder === 10) {
		reminder = 0;
	}
	
	numArr.push(reminder.toString());
	let egn = numArr.join('');
	response.textContent = `Your EGN is: ${egn}`;
	
	document.getElementById('year').value = '';
	month.selectedIndex = '0';
	document.getElementById('date').value = '';
	document.getElementById('male').checked = false;
	document.getElementById('female').checked = false;
	document.getElementById('region').value = '';
	}
	
	
}

function digitChecker(input, arr) {
	if (Number(input) < 10) {
		arr.push('0', input);	
	} else {
		arr.push(input[0], input[1]);	
	}
}

}

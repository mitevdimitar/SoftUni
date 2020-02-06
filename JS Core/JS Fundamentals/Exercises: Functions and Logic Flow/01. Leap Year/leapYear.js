function leapYear() {
    let button = document.getElementsByTagName("button")[0];
let heading = document.querySelector('#year h2');
let yearInfo = document.querySelector('#year div');
button.addEventListener('click', clicked);

function clicked() {
	let year = +document.getElementsByTagName('input')[0].value;
	if (checkLeapYear(year)) {
		heading.innerHTML = 'Leap Year';
	} else {
		heading.innerHTML = 'Not Leap Year';
	}
	yearInfo.innerHTML = year;
	document.getElementsByTagName('input')[0].value = '';
}

function checkLeapYear(year) {
	return ((year % 4 == 0) && (year % 100 != 0)) || (year % 400 == 0);
}
}

function solve() {
    let [infoString, command] = document.getElementById('str').value.split(', ');
    let result = document.getElementById('result');

    let namePattern = new RegExp(' ([A-Z]([A-Za-z]*))(-[A-Z][A-Za-z]*\\.)?(-[A-Z][A-Za-z]*) ', 'g');
	let airportPattern = new RegExp(' [A-Z]{3}\\/[A-Z]{3} ', 'g');
	let flightPattern = new RegExp(' [A-Z]{1,3}[0-9]{1,5} ', 'g');
	let companyPattern = new RegExp('- [A-Z][A-Za-z]*\\*[A-Z][A-Za-z]* ', 'g');

	let name = infoString.match(namePattern)[0].trim().replace('-', ' ');
	let airport = infoString.match(airportPattern)[0].trim().split('/');
	let flightNum = infoString.match(flightPattern)[0].trim();
	let company =  infoString.match(companyPattern)[0].trim().replace('- ', '').replace('*', ' ');
	
	if (command === 'name') {
		result.textContent = `Mr/Ms, ${name}, have a nice flight!`;
	} else if (command === 'flight') {
		result.textContent = `Your flight number ${flightNum} is from ${airport[0]} to ${airport[1]}.`;
	} else if (command === 'company') {
		result.textContent = `Have a nice flight with ${company}.`;
	} else if (command === 'all') {
		result.textContent = `Mr/Ms, ${name}, your flight number ${flightNum} is from ${airport[0]} to ${airport[1]}. Have a nice flight with ${company}.`;
	}
}

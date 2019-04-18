function solve() {
	let submitButton = document.getElementsByTagName('button')[0];
	submitButton.addEventListener('click', (event) => {
		event.preventDefault();
		let user = document.getElementsByTagName('input')[0].value;
		let pass = document.getElementsByTagName('input')[1].value;
		let email = document.getElementsByTagName('input')[2].value;
		let topicsArr = Array.from(document.querySelectorAll('.topics > input'));
		let topics = [];
		topicsArr.forEach(topic => {
			if (topic.checked) {
				topics.push(topic.value);
			}
		});
		let tBody = document.getElementsByTagName('tbody')[0];
		let newRow = document.createElement('tr');
		let td1 = document.createElement('td');
		td1.innerHTML = user;
		newRow.appendChild(td1);
		let td2 = document.createElement('td');
		td2.innerHTML = email;
		newRow.appendChild(td2);
		let td3 = document.createElement('td');
		td3.innerHTML = topics.join(' ');
		newRow.appendChild(td3);
		tBody.appendChild(newRow);
		
	});
	let searchButton = document.getElementsByTagName('button')[1];
	searchButton.addEventListener('click', () => {
		let searchInfo = document.querySelector('#exercise > input').value;
		let tableRows = Array.from(document.getElementsByTagName('tr'));
		tableRows.shift();
		tableRows.forEach(row => {
			let data = row.textContent;
			if (!data.includes(searchInfo)) {
				row.style.visibility = "hidden";
			}
		});
	});
}

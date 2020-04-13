function initializeTable() {
	let createButton = $('#createLink');
	createButton.on('click', createCountry);
	
	addCountryRow('Bulgaria', 'Sofia');
	addCountryRow('Germany', 'Berlin');
	addCountryRow('Russia', 'Moscow');

	function createCountry() {
		let country = $('#newCountryText').val();
		let capital = $('#newCapitalText').val();
		addCountryRow(country, capital)
	}	


	function addCountryRow(country, capital) {
		let table = $('#countriesTable');
		let newRow = $(`<tr>`);
		let countryData = $(`<td>${country}</td>`);
		let capitalData = $(`<td>${capital}</td>`);
		let actionButtons = $(`<td>`)
			.append($(`<a href='#'>[Up]</a>`).on('click', rowUp))
			.append($(`<a href='#'>[Down]</a>`).on('click', rowDown))
			.append($(`<a href='#'>[Delete]</a>`).on('click', rowDelete))
		newRow.append(countryData, capitalData, actionButtons);
		table.append(newRow);
	}
	
	function rowUp() {
		let currentRow = $(this).parent().parent();
		currentRow.insertBefore(currentRow.prev());
		fixLinks();
	}

	function rowDown() {
		let currentRow = $(this).parent().parent();
		currentRow.insertAfter(currentRow.next());
		fixLinks();
	}
	
	function rowDelete() {
		let currentRow = $(this).parent().parent();
		currentRow.remove();
		fixLinks();
	}

	function fixLinks() {
		$('a:hidden').show();
		let upLink = $('#countriesTable tr:nth-child(3) td:nth-child(3) a:first-child');
		let downLink = $('#countriesTable tr:last-child td:nth-child(3) a:nth-child(2)');
		upLink.hide();
		downLink.hide();
	}

	fixLinks();
}

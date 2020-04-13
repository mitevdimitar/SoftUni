function attachEvents() {
	$('#items li').click(townSelect);
	let towns = [];
	
	function townSelect() {
		let town = $(this).text();
		if ($(this).attr('data-selected')) {
			$(this).css('background', '');
			$(this).removeAttr('data-selected');
			towns.splice(towns.indexOf(town), 1);
		} else {
			$(this).css('background', '#DDD');
			$(this).attr('data-selected', 'true');
			towns.push(town);
		}
	}
	$('#showTownsButton').on('click', showTowns);
	
	function showTowns() {
		$('#selectedTowns').text(towns.join(', '));
	}
}

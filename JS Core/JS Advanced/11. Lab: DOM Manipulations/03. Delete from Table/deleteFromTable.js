function deleteByEmail() {
	let input = $('input').val();
	let tdAll = $('td');
	let tdArr = Object.values(tdAll);
	let mailNotFound = true;
	for (let i = 0; i < tdArr.length; i ++) {
		if (i % 2 !== 0) {
			let currentData = tdArr[i].textContent;
			if (input == currentData) {
				if (i == 1) {
					$('tbody tr').eq(0).remove();
				} else if (i == 3) {
					$('tbody tr').eq(1).remove();
				} else if (i == 5) {
					$('tbody tr').eq(2).remove();
				} else if (i == 7) {
					$('tbody tr').eq(3).remove();
				} 
				$('#result').append('<p>Deleted.</p>');
				mailNotFound = false;
				break;
			}
		}
	}
 	if (mailNotFound) {
		$('#result').append('<p>Not found.</p>');
	}
}

function extractText() {
  	let items = $('#items li').toArray();
	let result = [];
	for (let item of items) {
		result.push(item.textContent);
	}
	let output = $('<p></p>').text(result.join(', '));
	$('#result').append(output);
}

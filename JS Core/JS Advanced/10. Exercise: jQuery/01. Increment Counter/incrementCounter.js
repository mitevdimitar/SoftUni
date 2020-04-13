function increment(selector) {
	let parent = $(selector);

 	let textArea = $('<textarea>');
	textArea.val('0');
	textArea.addClass('counter');
	textArea.attr('disabled', true);

	let incrementButton = $('<button>');
	incrementButton.addClass('btn');
	incrementButton.attr('id', 'incrementBtn');
	incrementButton.text('increment');

	let addButton = $('<button>');
	addButton.addClass('btn');
	addButton.attr('id', 'addBtn');
	addButton.text('Add');
	
	let uList = $('<ul>');
	uList.addClass('results');

	parent.append(textArea, incrementButton, addButton, uList);
	
	incrementButton.on('click', increment);
	addButton.on('click', add);

	function increment() {
		let total = $('textArea').val();
		total++;
		textArea.val(total);
	}
	
	function add() {
		let currentValue = $('textArea').val();
		let li = $('<li>');
		li.text(currentValue);
		uList.append(li);
	}
}

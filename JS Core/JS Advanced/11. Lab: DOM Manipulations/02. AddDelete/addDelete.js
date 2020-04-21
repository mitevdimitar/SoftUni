function addItem() {
	let $newInput = $('#newText');
	let newInput = $newInput.val();
	let $ul = $('#items');
	let $deleteLink = $('<a href="#">[Delete]</a>');
	$deleteLink.on('click', deleteItem);
	let $li = $('<li></li>').append(newInput, ' ', $deleteLink);
	$ul.append($li);

	     function deleteItem() {
		 $(this).parent().remove();
    	 }

}

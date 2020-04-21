function addItem() {
	let newInput = document.getElementById('newItemText').value;
	let ul = document.getElementById('items');
	let li = document.createElement('li');
	li.textContent = newInput;
	ul.appendChild(li);
}

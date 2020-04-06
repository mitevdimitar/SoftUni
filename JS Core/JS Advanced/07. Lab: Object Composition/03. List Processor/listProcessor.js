function solve(arr) {
	let listProcessor = (function() {
		let innerCollection = [];

		function printCollection() {
			return innerCollection.join(',');
		}

		function addElement(el) {
			 innerCollection.push(el);
		}

		function removeElement(el) {
			innerCollection = innerCollection.filter(i => i !== el);
		}

		return {
			print: printCollection,
			add: addElement,
			remove: removeElement
		}
	})();

	for (let commandRow of arr) {
		if (commandRow === 'print') {
			console.log(listProcessor.print());
		} else{
			let [command, str] = commandRow.split(' ');
			if (command === 'add') {
				listProcessor.add(str);
 			} else if (command === 'remove') {
				listProcessor.remove(str);
			}
		}
	}
}

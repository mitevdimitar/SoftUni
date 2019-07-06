function catalogue(arr) {
  
	//add objects to array
	let catalogue = [];
	for (let arrRow of arr) {
		let [name, quantity] = arrRow.split(' : ');
		catalogue.push({name, quantity});
	}
  
	//sort
	let sorted = catalogue.sort((a, b) => a.name.localeCompare(b.name));
  
	//get first letter and print it when not the same
	let firstLetter = '';
	for (let product of sorted) {
		let currentFirstLetter = product.name[0];
		if (currentFirstLetter !== firstLetter) {
		console.log(currentFirstLetter);
		firstLetter = currentFirstLetter;
		}
		console.log(`  ${product.name}: ${product.quantity}`);
	}
}

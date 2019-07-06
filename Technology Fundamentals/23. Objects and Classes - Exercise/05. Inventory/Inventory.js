function inventory(arr) {
	let register = [];
	for (let arrRow of arr) {
		let [name, level, items] = arrRow.split(' / ');
		level = Number(level);
		items = items.split(', ');
		register.push({name, level, items});
	}
console.log(JSON.stringify(register));
	
}

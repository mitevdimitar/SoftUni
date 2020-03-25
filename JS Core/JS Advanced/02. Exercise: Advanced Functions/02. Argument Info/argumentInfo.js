function solve() {
	let types = {};
	for (let currentArgument of arguments) {
	let type = typeof currentArgument;
	if (types.hasOwnProperty(type)) {
		types[type]++;
	} else {
		types[type] = 1;
	}
	console.log(`${type}: ${currentArgument}`);
	}
	let sorted = Object.entries(types).sort((a, b) => b[1] - a[1]);
	for (let row of sorted) {
		let [argType, occurance] = row;
		console.log(`${argType} = ${occurance}`);
	}
}

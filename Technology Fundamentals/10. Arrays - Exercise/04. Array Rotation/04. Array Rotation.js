function solve(arr, length) {
	for (let j = 0; j < length; j++) {
		let rotated = arr.shift();
		arr.push(rotated);
	}
	console.log(arr.join(' '));
}

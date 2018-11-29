function solve(arr) {
	let newArr = [];
	for (let y = 0; y < arr.length; y++) {
		let biggestNumber = true;
		for (let j = y + 1; j < arr.length; j++) {
			if (arr[y] <= arr[j]) {
				biggestNumber = false;
			}
		}
		if (biggestNumber) {
			newArr.push(arr[y]);
		}
	}
	console.log(newArr.join(' '));
}

function solve(arr) {
	let initialSum = 0;
	let finalSum = 0;
	for (let num of arr) {
		initialSum += num;
	}
	for (let j = 0; j < arr.length; j++) {
		if (arr[j] % 2 === 0) {
			arr[j] = arr[j] + j;
		} else {
			arr[j] = arr[j] - j;
		}
	}
	for (let num of arr) {
		finalSum += num;
	}
	console.log(arr);
	console.log(initialSum);
	console.log(finalSum);
}

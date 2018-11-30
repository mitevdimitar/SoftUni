function solve(arr) {
	while (arr.length > 1) {
	for (let j = 0; j < arr.length - 1; j++) {
		arr[j] = arr[j] + arr[j + 1];
	}
	arr.pop();
	}
	console.log(arr[0]);
}

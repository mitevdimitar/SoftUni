function solve(arr) {
	let reversedArr = [];
	let halfArrayLength = arr.length / 2;
	for (j = 0; j <= halfArrayLength; j++) {
		let swapLast = arr.length - 1 - j;
		reversedArr[j] = arr[swapLast];
		reversedArr[swapLast] = arr[j];
	}
	console.log(reversedArr.join(' '));
}

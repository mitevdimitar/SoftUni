function solve(arr) {
	let rowSum = 0;
	let columnSum = 0;
	let magicSum = 0;
	let magic = true;
	let rowLength = arr.length;

	for (let k = 0; k < rowLength; k++) {
		magicSum += arr[0][k];
	}

	for (let j = 0; j < rowLength; j++) {
		for (let y = 0; y < rowLength; y++) {
		rowSum += arr[j][y];
		columnSum += arr[y][j];
		}
		if (rowSum !== magicSum || columnSum !== magicSum) {
			magic = false;
			break;
		} else {
			rowSum = 0;
			columnSum = 0;
		}
	}
	magic ? console.log('true')  : console.log('false');
}

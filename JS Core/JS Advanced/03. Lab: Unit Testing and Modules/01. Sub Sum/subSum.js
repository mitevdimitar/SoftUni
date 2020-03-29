function subsum(arr, start, end) {
	if (start < 0) {
		start = 0;
	}
	
	if (end >= arr.length) {
		end = arr.length - 1;
	}
	if (!Array.isArray(arr)) {
		return NaN;
	}
	if (!arr.every(Number)) {
		return NaN;
	}
	if (arr.length === 0) {
		return 0;
	}
	let sum = arr.slice(start, end + 1)
		.map(Number)
		.reduce((acc, start) => acc + start, 0);
	return sum
}

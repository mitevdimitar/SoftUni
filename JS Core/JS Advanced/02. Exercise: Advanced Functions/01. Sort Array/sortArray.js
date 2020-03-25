function solve(arr, order) {
	let sorted = {
		'desc': (a, b) => b - a,
		'asc': (a, b) => a - b
	}
	return arr.sort(sorted[order]);
}

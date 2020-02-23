function solve(arr) {
	let start = Number.MIN_SAFE_INTEGER;
	let extractedArr = arr.reduce((acc, el) => {
		if (el >= start) {
			acc.push(el);
			start = el;
		}
		return acc;
	}, []);
	console.log(extractedArr.join('\n'));
}

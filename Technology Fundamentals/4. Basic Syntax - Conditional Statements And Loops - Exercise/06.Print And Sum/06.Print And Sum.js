function printEndSum(startNum, endNum) {
	let rowOfNumbers = ``;
let sum = 0;
	for (i = startNum; i <= endNum; i++) {
		rowOfNumbers += i;
		if (i < endNum) {
			rowOfNumbers += ` `;
		}
		sum += i;
	}
	console.log(rowOfNumbers);
	console.log(`Sum: ${sum}`);
}

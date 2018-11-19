function sumOfOddNumbers(arg) {
	let totalNumbers = Number(arg);
	let sumOfOddNumbers = 0;
	for (i = 1; i < totalNumbers * 2; i += 2) {
		console.log(i);
		sumOfOddNumbers += i;
	}
	console.log(`Sum: ${sumOfOddNumbers}`);
}

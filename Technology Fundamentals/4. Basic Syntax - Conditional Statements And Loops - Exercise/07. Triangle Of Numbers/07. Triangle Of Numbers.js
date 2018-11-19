function triangleOfNumbers(num) {
	for (let i = 1; i <= num; i++) {
		let output = i;
		for (let j = 1; j < i; j++) {
			output += ` ${i}`;
		}
	console.log(output);
	}
}

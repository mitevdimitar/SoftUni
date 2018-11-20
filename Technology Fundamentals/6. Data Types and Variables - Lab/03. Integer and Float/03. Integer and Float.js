function integerAndFloat(num1, num2, num3) {
	let sum = Number(num1) + Number(num2) + Number(num3);
	let solution = sum % Math.floor(sum) === 0 ? " - Integer": " - Float";
	console.log(`${sum}${solution}`);
}

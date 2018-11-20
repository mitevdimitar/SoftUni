function rightPlace(wrongString, char, correctString) {
	let correctedString = wrongString.replace('_', char);
	let result = correctedString === correctString ? 'Matched' : 'Not Matched';
console.log(result);
}

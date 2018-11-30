function solve(symbol) {
	let symbolCharcode = symbol.charCodeAt(0);
	if (symbolCharcode >= 65 && symbolCharcode <= 90) {
console.log(`upper-case `);
} else if (symbolCharcode >= 97 && symbolCharcode <= 122) {
console.log(`lower-case `);
}
}

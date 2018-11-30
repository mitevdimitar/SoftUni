function solve(spice) {
	let dayCounter = 0;
	let spiceTotal = 0;
	while (spice >= 100) {
		dayCounter++;
		spiceTotal += spice;
		spiceTotal -= 26;
		spice -= 10;
	}
	if (spiceTotal >= 26) {
spiceTotal -= 26;
} else {
	spiceTotal = 0;
	}
	console.log(dayCounter);
	console.log(spiceTotal);
}

function solve(elements) {
    elements = elements.map(Number);
	let biggestAmount = Number.MIN_SAFE_INTEGER;
	for (let i = 0; i < elements.length; i++) {
		let currentNum = elements[i];
		if (currentNum >= 0 && currentNum < 10) {
			let currentAmount = 1;
			for (let j = i + 1; j <= i + currentNum; j++) {
				currentAmount *= elements[j];
			}
			if (currentAmount > biggestAmount) {
				biggestAmount = currentAmount;
			}
		}
	}
	console.log(biggestAmount);
}

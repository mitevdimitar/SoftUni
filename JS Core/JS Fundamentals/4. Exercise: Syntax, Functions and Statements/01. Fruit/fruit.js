function fruit(fruit, grams, pricePerKg) {
	let kg = Number(grams) * 0.001;
	let moneyNeeded = Number(pricePerKg) * kg;
	console.log(`I need ${moneyNeeded.toFixed(2)} leva to buy ${kg.toFixed(2)} kilograms ${fruit}.`);
}

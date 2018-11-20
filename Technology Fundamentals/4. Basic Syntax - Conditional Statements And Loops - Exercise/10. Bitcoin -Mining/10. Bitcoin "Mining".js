function bitcoinMining(gramsOfGold) {
	let counter = 0;
	let dayOfFirstPurchase = 0;
	let amountInLeva = 0;
    let totalLeva = 0;
    let currentBitcoins = 0;
	let bitcoins = 0;

		for (let i = 0; i <= gramsOfGold.length - 1; i++) {
			counter++;
            amountInLeva = gramsOfGold[i] * 67.51;
            if ((i + 1) % 3 === 0) {
                amountInLeva = amountInLeva * 0.70;
            }
			totalLeva += amountInLeva;
			if (totalLeva >= 11949.16) {
                currentBitcoins = Math.floor(totalLeva / 11949.16);
                bitcoins += currentBitcoins;
				totalLeva -= currentBitcoins * 11949.16;
				if (dayOfFirstPurchase === 0) {
					dayOfFirstPurchase = counter;
				}
            }
            currentBitcoins = 0;
	} 
	console.log(`Bought bitcoins: ${bitcoins}`);
	if (dayOfFirstPurchase > 0) {
	console.log(`Day of the first purchased bitcoin: ${dayOfFirstPurchase}`);
	}
	console.log(`Left money: ${totalLeva.toFixed(2)} lv.`);
}

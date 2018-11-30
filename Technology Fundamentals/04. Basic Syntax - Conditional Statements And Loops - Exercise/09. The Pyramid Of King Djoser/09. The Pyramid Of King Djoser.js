function pyramid(base, increment) {
	let stoneTotal = 0;
	let marbleTotal = 0;
	let lapisTotal = 0;
	let goldTotal = 0;
	let counter = 0;
	for (let i = base; i >= 1; i -= 2) {
		let totalBlocksPerRow = i * i * increment;
		let stone = (i - 2) * (i - 2) * increment;
		let lapis = 0;
		let marble = 0;
		counter++;
		if (i == 1 || i == 2) {
			goldTotal += i * i * increment;
		} else {
			stoneTotal += stone;
			if (counter % 5 === 0) {
        lapis = totalBlocksPerRow - stone;
				lapisTotal += lapis;
			} else {
        marble = totalBlocksPerRow - stone;
				marbleTotal += marble;
			}
		}
  }
  let height = Math.floor(counter * increment);
  console.log(`Stone required: ${Math.ceil(stoneTotal)}`);
  console.log(`Marble required: ${Math.ceil(marbleTotal)}`);
  console.log(`Lapis Lazuli required: ${Math.ceil(lapisTotal)}`);
  console.log(`Gold required: ${Math.ceil(goldTotal)}`);
  console.log(`Final pyramid height: ${height}`);
}

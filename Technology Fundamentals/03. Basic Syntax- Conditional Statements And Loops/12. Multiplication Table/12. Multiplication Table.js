function multiplicationTable(arg) {
	let multiplicatedNum = Number(arg);
	for (i = 1; i <= 10; i++) {
		let result = multiplicatedNum * i;
		console.log(`${multiplicatedNum} X ${i} = ${result}`);
	}
}

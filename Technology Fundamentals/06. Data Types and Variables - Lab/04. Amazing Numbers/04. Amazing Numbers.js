function amazingNumbers(num) {
	num = num.toString();
  let sum = 0;
	for (let j = 0; j <=num.length - 1; j++) {
		sum += Number(num[j]);
	}
	if (sum.toString().includes('9')) {
		console.log(`${num} Amazing? True`);
			} else {
		console.log(`${num} Amazing? False`);
	}
}

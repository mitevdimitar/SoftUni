function perfectNumber(num) {
	let sum = 0;
	for (let j = 1; j <= num / 2; j++) {
		if (num % j === 0) {
			sum += j;
		}
}
sum === num ? console.log(`We have a perfect number!`)
 : console.log('It’s not so perfect.'); 
}

function solve(num) {
	let numToString = num.toString();
	let oddSum = 0;
	let evenSum = 0;
    oddOrEven();
    
	function oddOrEven() {
		for (let j = 0; j < numToString.length; j++) {
			let currentNum = +numToString[j];
			if (currentNum % 2 === 0) {
				evenSum += currentNum;
			} else {
				oddSum += currentNum;
			}
		}
    }
    
	console.log(`Odd sum = ${oddSum}, Even sum = ${evenSum}`)
}

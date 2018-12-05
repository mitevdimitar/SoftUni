function factorialDivision(num1, num2) {
    let factorialOne = getFactorial(num1);
    let factorialTwo = getFactorial(num2);
    function getFactorial(num) {
        if (num === 1) {
            return 1;
        }
        return num *getFactorial(num -1);
    }

	let division = factorialOne / factorialTwo;
	console.log(division.toFixed(2));
}

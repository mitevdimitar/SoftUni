function calculator(firstNum, operator, secondNum) {
	switch(operator) {
	case '-':
	console.log((firstNum - secondNum).toFixed(2))
	break;
	case '+':
	console.log((firstNum + secondNum).toFixed(2))
	break;
	case '*':
	console.log((firstNum * secondNum).toFixed(2))
	break;
	case '/':
	console.log((firstNum / secondNum).toFixed(2))
	break;
	}
}

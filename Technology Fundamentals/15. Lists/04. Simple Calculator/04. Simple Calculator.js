function solve(numOne, numTwo, operator) {
    let result = 0;
    calculate();

    function calculate() {
        switch(operator) {
            case 'multiply':
            let multiply = (numOne, numTwo) => numOne * numTwo;
            result = multiply(numOne, numTwo); 
            break;
            case 'divide':
            let divide = (numOne, numTwo) => numOne / numTwo;
            result = divide(numOne, numTwo);
            break;
            case 'add':
            let add = (numOne, numTwo) => numOne + numTwo;
            result = add(numOne, numTwo);
            break;
            case 'subtract':
            let subtract = (numOne, numTwo) => numOne - numTwo;
            result = subtract(numOne, numTwo);
            break;
        }
        console.log(result);
    }
}

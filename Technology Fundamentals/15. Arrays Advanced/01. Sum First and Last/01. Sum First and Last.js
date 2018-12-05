function sumFirstLast(input) {
    input = input.map(Number);
    let firstNum = input.shift();
    let lastNum = input.pop();

    let sum = firstNum + lastNum;
    console.log(sum);
}

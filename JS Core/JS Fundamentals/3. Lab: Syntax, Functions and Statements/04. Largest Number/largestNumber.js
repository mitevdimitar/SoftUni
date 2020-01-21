function largestNumber(num1, num2, num3) {
    num1 = +num1;
    num2 = +num2;
    num3 = +num3;

    let largest = Math.max(num1,num2,num3);
    
    console.log(`The largest number is ${largest}.`);
}

function solve(num1, num2) {
    num1 = +num1;
    num2 = +num2;
    let gcd = 1;
    
    for (let i = 2; i <= Math.max(num1, num2) / 2; i++) {
        if (num1 % i === 0 && num2 % i === 0) {
            gcd = i;
        }
    }

    console.log(gcd);
}

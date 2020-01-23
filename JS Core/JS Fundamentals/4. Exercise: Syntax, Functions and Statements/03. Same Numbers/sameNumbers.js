function solve(num) {
    num = num.toString();
    let previousNum = +num[0];
    let areSame = true;
    let sum = previousNum;

    for (let i = 1; i < num.length; i++) {
        let currentNum = +num[i];
        
        if (previousNum !== currentNum) {
            areSame = false;
        }
        sum += currentNum;
        previousNum = currentNum;
    }

    if (areSame) {
        console.log('true');
    } else {
        console.log('false');
    }
    console.log(sum);

}

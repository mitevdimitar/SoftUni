function lastKNumbersSequence(newArrLength, k) {
    let newArr = [1];
    let sum = 0;
    
    for (let i = 1; i < newArrLength; i++) {
        for (let j = k; j > 0; j--) {
            if (i - j >= 0) {
                sum += +newArr[i - j];
            }
        }
        if (sum > 0) {
            newArr.push(sum);
        }
        sum = 0;
    }
    console.log(newArr.join(' '));
}

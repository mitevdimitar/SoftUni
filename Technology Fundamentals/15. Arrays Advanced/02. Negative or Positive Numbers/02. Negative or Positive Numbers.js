function negativePositiveNumbers(arr) {
    let result = [];

    for (let currentNum of arr) {
        if (currentNum < 0) {
            result.unshift(currentNum);
        } else {
            result.push(currentNum);
        }
    }

    for (let num of result) {
        console.log(num);
    }
    
}

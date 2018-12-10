function sorting(arr) {
    arr.sort((a, b) => b - a);
    let length = arr.length;
    let sortedArr = [];

    for (let i = 0; i < length; i++) {
        if (i % 2 === 0) {
            let biggestNum = arr.shift();
            sortedArr.push(biggestNum);

        } else {
            let lowestNum = arr.pop();
            sortedArr.push(lowestNum);
        }
        
        
    }

    console.log(sortedArr.join(' '));
}

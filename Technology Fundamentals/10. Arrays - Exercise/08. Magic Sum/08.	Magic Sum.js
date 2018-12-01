function solve(arr) {
    let insideArr = arr[0].split(' ');
    let numToCompareWith = +arr[1];

    for (let j = 0; j < insideArr.length; j++ ) {
        let currentNum = +insideArr[j];
        for (let i = j + 1; i < insideArr.length; i++) {
            let insideNum = +insideArr[i];
            let currentSum = currentNum + insideNum;
            if (currentSum === numToCompareWith) {
                console.log(`${currentNum} ${insideNum}`);
            }
        }
    }
    
}

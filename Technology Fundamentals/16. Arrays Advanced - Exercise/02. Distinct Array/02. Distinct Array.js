function disctincArray(arr) {
    let newArr = [arr.shift()];
    let distinct = true;
    for (let i = 0; i < arr.length; i++) {
        let newNum = arr[i];
        compare(newNum);
    }
    function compare(newNum) {
        for (let x of newArr) {
            if (x === newNum) {
                distinct = false;
                break;
            }
        }
        if (distinct) {
            newArr.push(newNum);
        } else {
            distinct = true;
        }
    }

    console.log(newArr.join(' '));
}

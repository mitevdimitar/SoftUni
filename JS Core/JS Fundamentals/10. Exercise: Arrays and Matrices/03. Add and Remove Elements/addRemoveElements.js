function solve(arr) {
    let numArr = [];
    counter = 0;
    for (let command of arr) {
        counter++;
        if (command === 'add') {
            numArr.push(counter);
        } else {
            numArr.pop();
        }
    }
    if (numArr.length !== 0) {
        console.log(numArr.join('\n'));
    } else {
        console.log('Empty');
    }
}

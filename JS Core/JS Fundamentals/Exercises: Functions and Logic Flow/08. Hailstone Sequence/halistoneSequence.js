function getNext() {
    let startNum = document.getElementById('num').value;
    let arr = [startNum];
    let newNum;
    let result = document.getElementById('result');
    
    while (startNum !== 1) {
        if (oddNumber(startNum)) {
            newNum = startNum / 2;
        } else {
            newNum = (startNum * 3) + 1;
        }
        arr.push(newNum);
        startNum = newNum;
    }
    
    result.textContent = arr.join(' ') + ' ';
    
    function oddNumber(num) {
        if (num % 2 === 0) {
            return true;
        }
    }  
}

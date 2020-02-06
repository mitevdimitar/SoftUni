function greatestCD() {


    let num1 = +document.getElementById('num1').value;
    let num2 = +document.getElementById('num2').value;

    let gcd = greatestCommonDivider(num1, num2);

    let result = document.getElementById('result');
    result.textContent = gcd;
    
    function greatestCommonDivider(a, b) {
    
        while (b !== 0) {
            let oldB = b;
            b = a % b;
            a = oldB;
        }
        return a;
    }
}

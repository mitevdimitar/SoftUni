function solve() {
    let num = +document.getElementById('num').value;
    let output = document.getElementById('result');
    let result = '1';
    for (let i = 2; i <= num; i++) {
        if (num % i === 0) {
            result += " " + i;
        }
    }
    
    output.textContent = result;
}

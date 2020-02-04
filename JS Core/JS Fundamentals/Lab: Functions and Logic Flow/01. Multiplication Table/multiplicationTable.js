function solve() {
  let firstNum = +document.getElementById('num1').value;
  let secondNum = +document.getElementById('num2').value;
  let result = document.getElementById('result');
  
  if (firstNum > secondNum) {
    result.innerHTML = `Try with other numbers.`;
  } else {
    for (let i = firstNum; i <= secondNum; i++) {
      let currentRow = document.createElement('p');
      currentRow.innerHTML = `${i} * ${secondNum} = ${i * secondNum}`;
      result.appendChild(currentRow);
    }
  }

}

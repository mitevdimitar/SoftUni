function solve() {
  let firstNum = +document.getElementById('firstNumber').value;
  let secondNum = +document.getElementById('secondNumber').value;
  let firstString = document.getElementById('firstString').value;
  let secondString = document.getElementById('secondString').value;
  let thirdString = document.getElementById('thirdString').value;
  let result = document.getElementById('result');
  
  for (let i = firstNum; i <= secondNum; i++) {
    printLogic(i);
  }
  
  function printLogic(num) {
    let input;
    if (num % 3 === 0 && num % 5 === 0) {
      input = `${num} ${firstString}-${secondString}-${thirdString}`;
      addRow(input);
    } else if (num % 3 === 0) {
      input = `${num} ${secondString}`;
      addRow(input);
    } else if (num % 5 === 0) {
      input = `${num} ${thirdString}`;
      addRow(input);
    } else {
      input = num;
      addRow(input);
    }
  }
  
  function addRow(input) {
    let newRow = document.createElement('p');
    newRow.innerHTML = input;
    result.appendChild(newRow);
  }
}

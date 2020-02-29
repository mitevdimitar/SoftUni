function solve() {
  let input = document.getElementById('str').value;
  let result = document.getElementById('result');
  let wordOutput = '';

  let inputArr = input.split(' ');

  for (let element of inputArr) {
    if (isNaN(element)) {
      let arrOfNums = [];
      for (let char of element) {
        let currentNum = char.charCodeAt(0);
        arrOfNums.push(currentNum);
      }
      let p = document.createElement('p');
      p.innerHTML = arrOfNums.join(' ');
      result.appendChild(p);
    } else {
      let currentChar = String.fromCharCode(element);
      wordOutput += currentChar;
    }
  }
  
  let p = document.createElement('p');
  p.innerHTML = wordOutput;
  result.appendChild(p);

}

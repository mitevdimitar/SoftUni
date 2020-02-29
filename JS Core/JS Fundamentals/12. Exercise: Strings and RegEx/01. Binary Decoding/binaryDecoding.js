function solve() {
  let input = document.getElementById('str').value;
  let result = document.getElementById('result');

  let sum = findSum(input);

  let endCut = input.length - sum;

  let cuttedString = input.substring(sum, endCut);
  let splittedString = cuttedString
    .split(/([\d]{8})/)
    .filter((x) => x)
    .map(x => binaryToString(x))
    .join('');
  
  let patern = /[A-Za-z ]+/g;
  let output = splittedString.match(patern);
  result.textContent = output.join('');

  function findSum(input) {
    let result = input;
    while (result.length > 1) {
      let temp = result
          .split('')
          .map(Number)
          .reduce((a, b) => a + b)
          .toString();

          result = temp;
    }
    return +result;
  }

function binaryToString(element) {
  let decimal = parseInt(element, 2);
  return String.fromCharCode(decimal);
}

}

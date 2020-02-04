function solve() {
  let result = document.getElementById('result');
  let text = document.getElementById('string').value;
  let symbol = document.getElementById('character').value;
  let count = 0;
  let evenOrOdd;

  for (let y = 0; y <= text.length; y++) {
    if (symbol === text[y]) {
      count++;
    }
  }

  if (count % 2 === 0) {
    evenOrOdd = 'even';
  } else {
    evenOrOdd = 'odd';
  }

  result.innerHTML = `Count of ${symbol} is ${evenOrOdd}.`;

}

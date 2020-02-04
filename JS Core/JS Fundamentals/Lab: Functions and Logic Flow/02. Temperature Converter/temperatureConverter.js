function solve() {
  let degrees = +document.getElementById('num1').value;
  let type = document.getElementById('type').value;
  let result = document.getElementById('result');
  
  if (type.toLowerCase() === 'celsius') {
    result.textContent = calculateFahrenheit(degrees);
  } else if (type.toLowerCase() === 'fahrenheit') {
    result.textContent = calculateCelsius(degrees);
  } else {
    result.textContent = `Error!`;
  }

  function calculateCelsius(degrees) {
    let result = Math.round((degrees - 32) * (5 / 9));
    return result;
  }

  function calculateFahrenheit() {
    let result = Math.round((degrees * (9 / 5)) + 32);
    return result;
  }


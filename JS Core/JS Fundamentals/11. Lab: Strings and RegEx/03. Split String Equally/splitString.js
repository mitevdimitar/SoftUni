function solve() {
  let str = document.getElementById('str').value;
let num = +document.getElementById('num').value;
let result = document.getElementById('result');

let loopEnd = Math.ceil(str.length / num);
let index = 0;
let output = [];

for (let i = 0; i < loopEnd; i++) {
	let currentInput = '';
	for (let j = 0; j < num; j++) {
		currentInput += str.charAt(index);
		if (index == str.length - 1) {
			index = 0;
		} else {
			index++;
		}
	}
	output.push(currentInput);
	
}

result.innerHTML = output.join(' ');
}

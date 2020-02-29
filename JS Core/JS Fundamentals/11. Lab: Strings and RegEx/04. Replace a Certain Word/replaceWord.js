function solve() {
  let arr = JSON.parse(document.getElementById('arr').value);
let replacement = document.getElementById('str').value;
let wordToReplace = arr[0].split(' ')[2];
let result = document.getElementById('result');
let regex = new RegExp(wordToReplace, 'gi');

for (let token of arr) {
	let newString = token.replace(regex, replacement);
	let p = document.createElement('p');
	p.innerHTML = newString;
	result.appendChild(p);
}
}

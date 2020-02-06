function solve() {
	let input1 = document.getElementById('mat1').value;
	let matrix1 = input1.match(/\d+/g).map(Number);
	let len = matrix1.length / 2;
	
	let matrix1FirstPart = matrix1.slice(0, len);
	let matrix1SecondPart = matrix1.slice(len);
		
	let input2 = document.getElementById('mat2').value;
	let matrix2 = input2.match(/\d+/g).map(Number);

	let matrix2FirstPart = matrix2.slice(0, len);
	let matrix2SecondPart = matrix2.slice(len);
	
	let result = document.getElementById('result');
	
	dotProductCalculation(matrix1FirstPart, matrix2FirstPart, matrix2SecondPart);
	dotProductCalculation(matrix1SecondPart, matrix2FirstPart, matrix2SecondPart);

function dotProductCalculation(arr1, arr2, arr3) {
	let length = arr1.length;
	let dotProduct1 = 0;
	let dotProduct2 = 0;

	for (let i = 0; i < length; i++) {
		dotProduct1 += arr1[i] * arr2[i];
		dotProduct2 += arr1[i] * arr3[i];
	}
	
	createResult(dotProduct1, dotProduct2);
}

function createResult(output1, output2) {
	let p = document.createElement('p');
	p.innerHTML = `${output1}, ${output2}`;
	result.appendChild(p);
}

}

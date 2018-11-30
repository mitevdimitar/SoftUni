function solve(arr) {
	let leftSum  = 0;
	let rightSum = 0;
	let indexOfEqualSums = 0;
	let equalSums = false;

	for (let i = 1; i < arr.length; i++) {
		for (let y = i - 1; y >= 0; y--) {
			leftSum += arr[y];
		}
		for (let k = i + 1; k < arr.length; k++) {
			rightSum += arr[k];
			}
		if (leftSum == rightSum) {
			equalSums = true;
			indexOfEqualSums = i;
			break;
			}
		leftSum = 0;
		rightSum = 0;
	}
  
	if (arr.length === 1) {
		equalSums = true;
	}
  
	if (equalSums) {
		console.log(indexOfEqualSums);
	} else {
		console.log('no');
	}
  
}

function sumEvenNumbers(arr) {
  arr = arr.map(Number);
  let evenSum = 0;
  let oddSum = 0;
  for (let num of arr) {
    if (num % 2 === 0) {
			oddSum += num;
			} else {
			evenSum += num;
		}
	}
  console.log(oddSum - evenSum); 
}

function sumEvenNumbers(arr) {
  arr = arr.map(Number);
  let sum = 0;
  for (let num of arr) {
    if (num % 2 === 0) {
			sum += num;
		}
	}
  console.log(sum); 
}

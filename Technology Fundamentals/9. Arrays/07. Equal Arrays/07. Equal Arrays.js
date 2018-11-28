function solve(arr1, arr2) {
  arr1 = arr1.map(Number);
  arr2 = arr2.map(Number);
  let equalArrays = true;
  let sum = 0;
  let index = 0;
	  for (let j = 0; j < arr1.length; j++) {
	    sum += arr1[j];
	    if (arr1[j] !== arr2[j]) {
		    equalArrays = false;
		    index = j;
        break;
	    }
	  }
  if (equalArrays) {
	  console.log(`Arrays are identical. Sum: ${sum}`);
  } else {
	  console.log(`Arrays are not identical. Found difference at ${index} index`);
  }
}

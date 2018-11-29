function solve(arr1, arr2) {
	for (let currentElement of arr1) {
	for (let j = 0; j < arr1.length; j++) {
		if (currentElement === arr2[j]) {
			console.log(currentElement);
		}
	}
	}
}

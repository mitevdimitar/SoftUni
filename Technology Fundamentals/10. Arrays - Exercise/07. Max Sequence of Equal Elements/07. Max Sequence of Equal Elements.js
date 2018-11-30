function solve(arr1) {
	let str = arr1[0];
	let arr = str.split(" ");
	let firstElement = arr[0];
	let previousElement = arr[0];
	let longestArr = [firstElement];
	let currentArr = [firstElement];
	for (let i = 1; i < arr.length; i++) {
		let currentElement = arr[i];
		if (currentElement === previousElement) {
			currentArr.push(currentElement);
			if (currentArr.length > longestArr.length) {
				longestArr = currentArr;
			}
		} else {
			currentArr = [currentElement];
		}
		previousElement = currentElement;
	}
	console.log(longestArr.join(' '));
}

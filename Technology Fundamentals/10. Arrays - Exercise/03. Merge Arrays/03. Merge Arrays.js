function solve(arr1, arr2) {
	let arr3 = [];
	for (let ind in arr1) {
		if (ind % 2 === 0) {
			arr3[ind] = Number(arr1[ind]) + Number(arr2[ind]);
		} else {
			arr3[ind] = arr1[ind] + arr2[ind];
		}
	}
	console.log(arr3.join(" - "));
}

function solve(arr) {
	newArr = [];
	let firstSum = 0;
    let secondSum = 0;
    //making a matrix with numbers
	for (let j = 0; j < arr.length; j++) {
        newArr[j] = arr[j].split(' ').map(Number);
        }
	for (let k = 0; k < arr.length; k++) {
		firstSum += newArr[k][k];
		secondSum += newArr[k][arr.length - k - 1];
    }
      
	if (firstSum === secondSum) {
		for (let i = 0; i < arr.length; i++) {
			for (let y = 0; y < arr.length; y++) {
				if (i !== y && i + y !== arr.length - 1) {
					newArr[i][y] = firstSum;
				}
            }
        console.log(newArr[i].join(' '));
        }
        
	} else {
        for (let i = 0; i < arr.length; i++) {
        console.log(newArr[i].join(' '));
        }
	}
	
}

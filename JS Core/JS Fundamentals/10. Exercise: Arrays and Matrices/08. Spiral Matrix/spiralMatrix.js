function solve(row, column) {
	let spiral = [];
	let num = 1;
	for (let j = 0; j < row; j++) {
        spiral[j] = [];
        for (let y = 0; y < column; y++) {
            spiral[j][y] = num;
        }
		}
	/// trying to change all numbers in the matrix after 6 with 4 nested for loops
	for (let k = 0; k < row / 2; k++) {
        
        for (let a = k; a < row - k; a++) {
			spiral[k][a] = num;
			num++;
        }

        for (let b = k + 1; b < column - k; b++) {
			spiral[b][column - k - 1] = num;
			num++;
        }

        for (let c = row - k - 2; c >= 0 + k; c--) {
			spiral[column - 1 - k][c] = num;
			num++;
        }

        for (let d = row - 2 - k; d > 0 + k; d--) {
			spiral[d][k] = num;
			num++;
        }
    }
	
	for (let w = 0; w < row; w++) {
		console.log(spiral[w].join(' '));
	}

}

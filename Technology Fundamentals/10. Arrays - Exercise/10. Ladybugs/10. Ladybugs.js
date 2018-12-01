function solve(arr) {
	let fieldSize = +arr[0];
	let indexesWithBugs = arr[1];
	let arrIndex = 2;
	let arrayWithBugs = [];

	indexesWithBugs = indexesWithBugs.split(' ').map(Number);
	//create an initial array with the bugs in it
	for (let j = 0; j < fieldSize; j++) {
		let currentBugStatus = 0;
		for (let k = 0; k < indexesWithBugs.length; k++) {
			if (j === indexesWithBugs[k]) {
				currentBugStatus = 1;
			}
		}
		arrayWithBugs[j] = currentBugStatus;
    }
	
	// iterate through all ladybug moves
	while (arrIndex < arr.length) {
        let lbMoveStr = arr[arrIndex];
        let lbMove = lbMoveStr.split(' ');
		let indexOfTheMovingBug = Number(lbMove[0]);
		// check if there is lady bug within the array with bugs
		if (arrayWithBugs[indexOfTheMovingBug] === 1) {
			let moveDirection = lbMove[1];
				let moveWith = Number(lbMove[2]);
                let newBugIndex = Number(indexOfTheMovingBug);
                arrayWithBugs[indexOfTheMovingBug] = 0;
				// movement depending on direction … setting of the newIndex
				if (moveDirection === 'right') {
					newBugIndex += moveWith;
					while (arrayWithBugs[newBugIndex] === 1) {
						newBugIndex += moveWith;
					}
				} else if (moveDirection === 'left') {
					newBugIndex  -= moveWith;
					while (arrayWithBugs[newBugIndex] === 1) {
						newBugIndex -= moveWith;
					}
				}
				if (newBugIndex >= 0 && newBugIndex < arrayWithBugs.length) {
				arrayWithBugs[newBugIndex] = 1;
				}

		}
			arrIndex++;
	}
	console.log(arrayWithBugs.join(' '));
}

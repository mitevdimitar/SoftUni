function arrayManipulator(arr) {
    let manArray = arr
        .shift()
        .split(' ')
        .map(Number);

    let index = undefined;
    let indexChanged = false;

    // iterate through all inputs
    for (let currentCommand of arr) {
        let tokens = currentCommand.split(' ');
        let counterTill = +tokens[1];
        
	    if (currentCommand.includes('exchange')) {
		    let splittIndex = +currentCommand.slice(9, currentCommand.length);
		    splitArray(splittIndex);
	    } else if (currentCommand.includes('max odd')) {
		    maxOddIndex();
    	} else if (currentCommand.includes('max even')) {
		    maxEvenIndex();
	    } else if (currentCommand.includes('min odd')) {
		    minOddIndex();
	    } else if (currentCommand.includes('min even')) {
		    minEvenIndex();
	    } else if (currentCommand.includes('first') && currentCommand.includes('even')) {
            if (counterTill > manArray.length) {
                console.log('Invalid count')
            } else {
                firstEvenCount(counterTill);
            }
	    } else if (currentCommand.includes('first') && currentCommand.includes('odd')) {
            if (counterTill > manArray.length) {
                console.log('Invalid count')
            } else {
                firstOddCount(counterTill);
            }
	    } else if (currentCommand.includes('last') && currentCommand.includes('even')) {
            if (counterTill > manArray.length) {
                console.log('Invalid count')
            } else {
                lastEvenCount(counterTill);
            }
         } else if (currentCommand.includes('last') && currentCommand.includes('odd')) {
            if (counterTill > manArray.length) {
                console.log('Invalid count');
            } else {
                lastOddCount(counterTill);
            }
         }
    }
    console.log('[' + manArray.join(', ') + ']');
	
	function splitArray(splittIndex) {
        if (splittIndex >= 0 && splittIndex < manArray.length) {
            let arrAfterIndex = manArray.slice(splittIndex + 1);
            let arrBeforeIndex = manArray.slice(0, splittIndex + 1);
            manArray = arrAfterIndex.concat(arrBeforeIndex);
        } else {
            console.log('Invalid index');
        }
    }

    function maxOddIndex() {
        let maxOdd = Number.MIN_SAFE_INTEGER;

        for (let k = 0; k <= manArray.length; k++) {
		    if (manArray[k] % 2 !== 0) {
			    if (manArray[k] >= maxOdd) {
			    	index = k;
                    indexChanged = true;
                    maxOdd = manArray[k];
			    }
		    }
        }
        checkIndexChange();
    }

    function minOddIndex() {
        let minOdd = Number.MAX_SAFE_INTEGER;
        for (let k = 0; k <= manArray.length; k++) {
		    if (manArray[k] % 2 !== 0) {
			    if (manArray[k] <= minOdd) {
				    index = k;
                    indexChanged = true;
                    minOdd = manArray[k];
			    }
		    }
        }
        checkIndexChange();
    }

    function maxEvenIndex() {
        let maxEven = Number.MIN_SAFE_INTEGER;
        for (let k = 0; k <= manArray.length; k++) {
	    	if (manArray[k] % 2 === 0) {
		    	if (manArray[k] >= maxEven) {
			    	index = k;
                    indexChanged = true;
                    maxEven = manArray[k];
			    }
		    }
        }
        checkIndexChange();
    }

    function minEvenIndex() {
        let minEven = Number.MAX_SAFE_INTEGER;
        for (let k = 0; k < manArray.length; k++) {
		    if (manArray[k] % 2 === 0) {
			    if (manArray[k] <= minEven) {
				    index = k;
                    indexChanged = true;
                    minEven = manArray[k];
			    }
		    }
        }
        checkIndexChange();
    }

    function checkIndexChange() {
	    if (indexChanged) {
	    	console.log(index);
	    } else {
            console.log('No matches');
        }
        index = undefined;
        indexChanged = false;
    }

    function firstEvenCount(counterTill) {
	    let currentCounter = 1;
        let resultArr = [];
        for (let k = 0; k < manArray.length; k++) {
		    if (manArray[k] % 2 === 0) {
                if (currentCounter < counterTill) {
                    resultArr.push(manArray[k]);
                    currentCounter++;
                } else if (currentCounter === counterTill) {
                    resultArr.push(manArray[k]);
                    currentCounter++;
                }
            }
        }
        console.log('[' + resultArr.join(', ') + ']');	
    }

    function firstOddCount(counterTill) {
	    let currentCounter = 1;
        let resultArr = [];
        for (let k = 0; k < manArray.length; k++) {
		    if (manArray[k] % 2 !== 0) {
                if (currentCounter < counterTill) {
                    resultArr.push(manArray[k]);
                    currentCounter++;
                } else if (currentCounter === counterTill) {
                    resultArr.push(manArray[k]);
                    currentCounter++;
                }
            }
        }
        console.log('[' + resultArr.join(', ') + ']');
    }

    function lastEvenCount(counterTill) {
	    let resultArr = [];
	    let currentCounter = 1;
	
        for (let k = manArray.length - 1; k >= 0; k--) {
		    if (manArray[k] % 2 === 0) {
                if (currentCounter < counterTill) {
                    resultArr.push(manArray[k]);
                    currentCounter++;
                } else if (currentCounter === counterTill) {
                    resultArr.push(manArray[k]);
                    currentCounter++;
                }
            }
        }	
        console.log('[' + resultArr.reverse().join(', ') + ']');
    }

    function lastOddCount(counterTill) {
	    let resultArr = [];
        let currentCounter = 1;
	
        for (let k = manArray.length - 1; k >= 0; k--) {
		    if (manArray[k] % 2 !== 0) {
                if (currentCounter < counterTill) {
                    resultArr.push(manArray[k]);
                    currentCounter++;
                } else if (currentCounter === counterTill) {
                    resultArr.push(manArray[k]);
                    currentCounter++;
                }
            }
        }	
        console.log('[' + resultArr.reverse().join(', ') + ']');	
    }
}

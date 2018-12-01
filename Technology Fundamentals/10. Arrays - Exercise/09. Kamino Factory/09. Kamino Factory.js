function solve(arr) {
	
	let biggestSequence = -1;
	let bestSumOfOnes = -1;
	let leftMostIndex = Number.MAX_SAFE_INTEGER;
    let bestSample = 1;
    let solution = '';
	
  //checking each string reversed to Array
	for (let j = 1; j < arr.length; j++) {

    //reversing the string to array
		let currentString = arr[j];
		let currentArray = currentString.split('!').map(Number);
        
        //calculating the total sum of the current array
        let currentSumOfOnes = 0;
        
            for (let a = 0; a < currentArray.length; a++) {
              currentSumOfOnes += currentArray[a];
            }

        let bestSubsequentCounter = 0;
        let bestStartingIndex = currentArray.length;
        
		// checking the array for subsequence of 1
		for (let y = 0; y < currentArray.length; y++) {
			
            if (currentArray[y] === 0) {
                continue;
            }

            let currentSubseqCounter = 1;

            for (let k = y + 1; k <currentArray.length; k++) {
                if (currentArray[k] === 1) {
                    currentSubseqCounter++;
                } else {
                    break;
                }
            }

			if (currentSubseqCounter > bestSubsequentCounter) {
                bestSubsequentCounter = currentSubseqCounter;
                bestStartingIndex = y;
            }
            
        }
    
        if (bestSubsequentCounter > biggestSequence) {
            biggestSequence = bestSubsequentCounter;
            bestSample = j;

            if (bestStartingIndex < leftMostIndex) {
                leftMostIndex = bestStartingIndex;
            }
            bestSumOfOnes = currentSumOfOnes;
        } else if (bestSubsequentCounter === biggestSequence) {
            if (bestStartingIndex < leftMostIndex) {
                leftMostIndex = bestStartingIndex;
                biggestSequence = bestSubsequentCounter;
                bestSample = j;
   
                bestSumOfOnes = currentSumOfOnes;
            } else if (bestStartingIndex === leftMostIndex) {
                if (currentSumOfOnes > bestSumOfOnes) {
                    bestSumOfOnes = currentSumOfOnes;
                    biggestSequence = bestSubsequentCounter;
                   bestSample = j;
    
                }
            }
        }
    
}
	console.log(`Best DNA sample ${bestSample} with sum: ${bestSumOfOnes}.`);

	for (let i = 0; i < arr[bestSample].length; i++) {
        if (arr[bestSample][i] !== '!') {
            solution += arr[bestSample][i] + ' ';
        }
    }
    console.log(solution.trim())
}

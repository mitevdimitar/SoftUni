function solve(arr) {
	let str = arr[0];
	let wordPattern = /[A-Za-z]+/gi;
	let match;
	let arrOfWords = [];
while ((match = wordPattern.exec(str)) !== null) {
	arrOfWords.push(match);
}

    let words = {};
	let quantity;

    for (let word of arrOfWords) {
	let loweredWord = word.toString().toLowerCase();
	let quantity = 1;
             if (words.hasOwnProperty(loweredWord)) {
            quantity +=  words[loweredWord];
        } 
        words[loweredWord] = quantity;
    }
  
    let sortedArr = Object.entries(words)
	.sort()
	.forEach((pair) => console.log(`'${pair[0]}' -> ${pair[1]} times`));
}

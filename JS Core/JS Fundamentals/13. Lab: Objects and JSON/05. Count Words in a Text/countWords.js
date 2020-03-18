function solve(arr) {
	let str = arr[0];
	let wordPattern = /[A-Za-z]+/g;
	let match;
	let arrOfWords = [];
while ((match = wordPattern.exec(str)) !== null) {
	arrOfWords.push(match);
}

    let words = {};
	let quantity;

    for (let word of arrOfWords) {
	let quantity = 1;
             if (words.hasOwnProperty(word)) {
            quantity +=  words[word];
        } 
        words[word] = quantity;
    }
  
    console.log(JSON.stringify(words));
}

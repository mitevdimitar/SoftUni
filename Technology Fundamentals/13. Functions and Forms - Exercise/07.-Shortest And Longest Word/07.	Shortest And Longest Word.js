function shortestAndLongestWords(sentance) {
	let words = sentance.split(/[\.\?\!\,\s]+/g);
	if (words[words.length - 1] === '') {
		words.pop();
    }
	let longestWord = longestWordFind(words);
	let shortestWord = shortestWordFind(words);
    

function longestWordFind(words) {
        let longestWordCount = 0;
        let currentLongestWord = '';
        for (let j = 0; j < words.length; j++) {
		    if (words[j].length > longestWordCount) {
                longestWordCount = words[j].length;
		    	currentLongestWord = words[j];
		    }
        }
        return currentLongestWord;
}

function shortestWordFind(words) {
    let shortestWordCount = Number.MAX_SAFE_INTEGER;
    let currentShortestWord = '';
        for (let i = 0; i < words.length; i++) {
		    if (words[i].length < shortestWordCount) {
                shortestWordCount = words[i].length;
		    	currentShortestWord = words[i];
		    }
        }
    return currentShortestWord;
}
	
	console.log(`Longest -> ${longestWord}`);
	console.log(`Shortest -> ${shortestWord}`);
}

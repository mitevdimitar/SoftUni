function wordsTracker(arr) {
    let sentanceArr = arr
        .shift()
        .split(' ');

    let sentance = new Map();

    for (let word of sentanceArr) {
        sentance.set(word, 0);
    }

    for (let occuringWord of arr) {
        if (sentance.has(occuringWord)) {
            let counter = sentance.get(occuringWord);
            counter++;
            sentance.set(occuringWord, counter);
        }
    }
    
    let sorted = [...sentance]
        .sort((a, b) => b[1] - a[1]);
    
        for (let [word, occurance] of sorted) {
            console.log(`${word} - ${occurance}`);
        }

}

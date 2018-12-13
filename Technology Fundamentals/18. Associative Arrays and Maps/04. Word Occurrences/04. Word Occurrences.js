function wordOccurances(arr) {
    let words = new Map();

    for (let word of arr) {
        if (!words.has(word)) {
            words.set(word, 1);
        } else {
            let counter = +words.get(word);
            counter++;
            words.set(word, counter);
        }
        
    }
    let sorted = [...words]
        .sort ((a, b) => b[1] - a[1]);
    
        for (let [word, occurance] of sorted) {
            console.log(`${word} -> ${occurance} times`);
        }

}

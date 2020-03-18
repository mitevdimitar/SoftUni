function solve(input) {
    let uniqueWords = [];
    for (let row of input) {
        let pattern= /[^A-Za-z]+/gm;
        let words = row.split(pattern)
        .filter(word => word)
        .map(word => word.toLowerCase())
        .forEach(word => {
            if (!uniqueWords.includes(word)) {
                uniqueWords.push(word)
            }
         });
    }
    console.log(uniqueWords.join(', '));
}

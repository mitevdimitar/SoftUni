function searchForNumber(arr, commands) {
    let [taken, deleted, searchFor] = commands;
    let newArr = arr.slice(0, taken);
    let counter = 0;
    newArr.splice(0, deleted);
    newArr.forEach(x => compare(x));

    function compare(x) {
        if (x === searchFor) {
            counter++;
        }
    }

    console.log(`Number ${searchFor} occurs ${counter} time.`);
}

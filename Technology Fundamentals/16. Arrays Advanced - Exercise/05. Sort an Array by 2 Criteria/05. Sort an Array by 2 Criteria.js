function sorting(arr) {
    arr.sort((a, b) => compare(a, b));
    
    function compare(a, b) {
        if (a.length === b.length) {
            return a.toLowerCase().localeCompare(b.toLowerCase());
        } else {
            return a.length - b.length;
        }
    }

    console.log(arr.join('\n'));
}

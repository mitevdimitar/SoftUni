function oddOccurance(input) {
    let inputArr = input.split(' ');
    let elements = new Map();

    for (let element of inputArr) {
        element = element.toLowerCase();
        if (elements.has(element)) {
            let counter = elements.get(element);
            counter++;
            elements.set(element, counter);
        } else {
            elements.set(element, 1);
        }
    }
    
    let filtered = [...elements]
        .filter(a => a[1] % 2 !== 0);

        let keys = '';
        filtered.forEach(kvp => {
            let key = kvp[0];
            keys += key + ' ';
        })
       
        console.log(keys);

}

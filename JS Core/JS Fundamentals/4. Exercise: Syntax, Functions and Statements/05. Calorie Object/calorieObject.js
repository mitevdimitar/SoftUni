function solve(arr) {
    let obj = {};

    for (let i = 0; i < arr.length; i+=2) {
        let objKey = arr[i];
        let objProperty = arr[i + 1];

        obj[objKey] = Number(objProperty);
    }

    console.log(obj);
    
}

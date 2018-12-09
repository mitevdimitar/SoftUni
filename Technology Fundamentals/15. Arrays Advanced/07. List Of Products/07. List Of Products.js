function listOfProducts(arr) {
    let result = arr.sort();

    for (let i = 0; i < arr.length; i++) {
        let devider = i + 1;
        let currentWord = arr[i];
        console.log(`${devider}.${currentWord}`);
    }
   
}

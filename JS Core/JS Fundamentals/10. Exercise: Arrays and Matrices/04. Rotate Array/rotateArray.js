function solve(arr) {
    let rotation = arr.pop();
    for (let i = 0; i < rotation % arr.length; i++) {
        let currentElement = arr.pop();
        arr.unshift(currentElement);
    }
    console.log(arr.join(' '));
}

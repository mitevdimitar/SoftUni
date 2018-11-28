function solve(n, arr) {
   let reversedArr = '';
    for (let i = n - 1; i >= 0; i--) {
        reversedArr += arr[i] + ' ';
    }
    console.log(reversedArr);
}

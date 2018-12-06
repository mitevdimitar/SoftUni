function firstAndLastNumbers(arr) {
    let k = arr.shift();
  
    let firstNums = arr.slice(0, k).join(' ');
    console.log(firstNums);
    
    let lastNums = arr.slice(arr.length - k, arr.length).join(' ');
    console.log(lastNums);
}

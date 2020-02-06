function binarySearch() {
    let index;
    let iterativeFunction = function (arr, x) { 
   
        let start = 0, end=arr.length - 1; 
        while (start <= end) { 
      
            let mid=Math.floor((start + end)/2); 
            if (arr[mid]===x) {
        
        index = mid;

        return true;
        } else if (arr[mid] < x) {  
                 start = mid + 1; 
        } else {
                 end = mid - 1;
        } 
        } 
       
        return false; 
    } 
       
    
    let arr = document.getElementById('arr').value.split(', ').map((x) => Number(x));
    let num = +document.getElementById('num').value;
    let result = document.getElementById('result');
       
    if (iterativeFunction(arr, num, 0, arr.length-1)) {
       result.textContent = `Found ${num} at index ${index}`;
        } else {
    result.textContent = `${num} is not in the array`;
    }
}

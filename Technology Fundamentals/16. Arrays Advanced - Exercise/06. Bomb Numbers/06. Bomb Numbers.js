function bombNumbers(bombArr, bombDetails) {
    let bombNum = bombDetails[0];
    let power = bombDetails[1];
    let thereIsBomb = true;
    let bombIndex = undefined;

    bombArr.forEach(num => compare(num));
   
    function compare(num) {
       if (num === bombNum) {
         bombIndex = bombArr.indexOf(num);
         let leftSpread = power;
         let rightSpread = power;
         let start = bombIndex - power;
         if (start < 0) {
             start = 0;
         }
         if (bombIndex + power >= bombArr.length) {
            rightSpread = bombArr.length - bombIndex;
         }
         totalPower = leftSpread + 1 + rightSpread;
         bombArr.splice(start, totalPower);
         bombArr.forEach(num => compare(num));
       }
    }
    
    let sum = 0;
    for (let num of bombArr) {
      sum += num;
      }
    
    console.log(sum);
   
}

function solve(num1, num2, num3) {
    let status = true;
    
   if (num1 < 0) {
      changeStatus();
   }

   if (num2 < 0) {
    changeStatus();
   }

   if (num3 < 0) {
    changeStatus();
   }
  
  if (num1 === 0 || num2 === 0 || num3 === 0) {
    status = true;
  }

   function changeStatus() {
    if (status === true) {
        status = false;
    } else {
        status = true;
    }
   }
    
   if (status === true) {
       console.log('Positive')
    } else {
    console.log('Negative');
    } 

}

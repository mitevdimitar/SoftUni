function fuelMoney(distance, travellers, fuelPrice) {
    distance = Number(distance);
     travellers = Number(travellers);
   fuelPrice = Number(fuelPrice);
     let fuelNeeded = (distance / 100) * 7;
     fuelNeeded += travellers * 0.100;
     let neededMoney = fuelNeeded * fuelPrice;
    
     console.log("Needed money for that trip is " + neededMoney + "lv.");
 }

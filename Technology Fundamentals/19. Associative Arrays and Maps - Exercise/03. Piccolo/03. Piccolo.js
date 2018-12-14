function picollo(arr) {
    let cars = [];

    for (let carDetails of arr) {
       let [direction, number] = carDetails.split(', ');
       if (direction === 'IN') {
           if (!cars.includes(number)){
            cars.push(number);
           }
       } else if (direction === 'OUT') {
           if (cars.includes(number)) {
            let index = cars.indexOf(number);
            cars.splice(index, 1);
           }
       }
    }

    if (cars.length > 0) {
        let sorted = cars.sort((a, b) => a.localeCompare(b));
        for (let carNum of sorted) {
            console.log(carNum);
        }
    } else {
        console.log('Parking Lot is Empty');
    }
    
}

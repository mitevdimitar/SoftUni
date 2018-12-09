function train(arr) {
    let vagons = arr
        .shift()
        .split(' ')
        .map(Number);
    let capacity = +arr.shift();

    for (let command of arr) {
        if (command.includes('Add')) {
            let [newVagon, passangersInNewVagon] = command.split(' ');
            vagons.push(+passangersInNewVagon);
        } else {
            let newPassangers = Number(command);
            for (let i = 0; i < vagons.length; i++) {
                let passengersBefore = vagons[i];
                if (passengersBefore + newPassangers <= capacity) {
                    let passengersAfter = passengersBefore + newPassangers;
                    vagons.splice(i, 1, passengersAfter);
                    break;
                }
            }
        }
    }
    console.log(vagons.join(' '));
}

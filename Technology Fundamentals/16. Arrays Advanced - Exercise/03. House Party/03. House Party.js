function houseParty(info) {
    let guestList = [];
    for (let command of info) {
        command = command.split(' ');
        let name = command[0];
        if (command.includes('not')) {
            notInTheList(name);
        } else {
            inTheList(name);
        }
    }

    guestList.forEach(x => console.log(x));

    function notInTheList(name) {
        if (guestList.includes(name)) {
            let indexOfRemovedGuest = guestList.indexOf(name);
            guestList.splice(indexOfRemovedGuest, 1);
        } else {
            console.log(`${name} is not in the list!`)
        }
    }
    
    function inTheList(name) {
        if (guestList.includes(name)) {
            console.log(`${name} is already in the list!`)
        } else {
            guestList.push(name);
        }
    }
    
}

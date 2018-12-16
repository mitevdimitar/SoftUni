function party(arr) {
    let index = 0;
    
    for (let command of arr) {
        if (command === 'PARTY') {
           index = arr.indexOf(command);
        }
    }

    let guestList = arr.slice(0, index);
    let comingGuests = arr.slice(index + 1, arr.length);
    
    for (let guest of comingGuests) {
        if (guestList.includes(guest)) {
            let index = guestList.indexOf(guest);
            guestList.splice(index, 1);
        }
    }
    
    let vip = guestList.filter(a => !isNaN(a[0]));
    let regular = guestList.filter(a => isNaN(a[0]))
    let sortedVip = vip.sort((a, b) => a - b);
    console.log(vip.length + regular.length);
    
    for (let guest of sortedVip) {
        console.log(guest);
    }
    
    for (let guest of regular) {
        console.log(guest);
    }
    
}

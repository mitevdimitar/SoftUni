function gladiator(arr) {
    let inventory = arr.shift().split(' ');

    for (let command of arr) {
        let [action, item] = command.split(' ');
        let index = inventory.indexOf(item);
        if (action === 'Buy') {
            if(index === -1) {
                inventory.push(item)
            }
        } else if (action === 'Trash') {
            if(index !== -1) {
                inventory.splice(index, 1);
            }
        } else if (action === 'Repair') {
            if(index !== -1) {
                let repairedItem = inventory.splice(index, 1);
                inventory.push(repairedItem[0]);
            }
        } else if (action === 'Upgrade') {
            let [upgradedItem, upgrade] = item.split('-');
            index = inventory.indexOf(upgradedItem);
            if(index !== -1) {
                inventory.splice(index, 0, upgradedItem)
                inventory[index + 1] += ':' + upgrade;
            }
        }
    }
    console.log(inventory.join(' '));
}

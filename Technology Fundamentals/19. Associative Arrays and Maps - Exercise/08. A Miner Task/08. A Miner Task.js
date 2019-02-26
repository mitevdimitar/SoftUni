function aMinerTask(arr) {
    let resources = new Map();
 	for (let i = 0; i < arr.length; i += 2) {
         let resource = arr[i];
         let quantity = Number(arr[i + 1]);
        if (resources.has(resource)) {
            let previousQuantity = resources.get(resource);
            quantity += previousQuantity;
        }
        resources.set(resource, quantity);
    }
    let resourcesArr = [...resources];
    for (let [resource, quantity] of resourcesArr) {
        console.log(`${resource} -> ${quantity}`)
    }
}

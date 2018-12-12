function storage(arr) {
    let storage = new Map();
    
    for (let purchase of arr) {
        let [product, quantity] = purchase.split(' ');
        quantity = Number(quantity);
        if (storage.has(product)) {
            quantity += storage.get(product);
            storage.set(product, quantity);
        } else {
            storage.set(product, quantity);
        }
        
    }
    for (let [key, value] of storage) {
        console.log(`${key} -> ${value}`);
    }

}

class Storage {
    constructor(capacity) {
        this.capacity = capacity;
        this.storage = [];
        this.totalCost = 0;
    }

    addProduct(product) {
        this.capacity -= product.quantity;
        this.totalCost += product.quantity * product.price;
        this.storage.push(product);
    }

    getProducts() {
        return this.storage.map((el) => JSON.stringify(el)).join('\n');
    }
}

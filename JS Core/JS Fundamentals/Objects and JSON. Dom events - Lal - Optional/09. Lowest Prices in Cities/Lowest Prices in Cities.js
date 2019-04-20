function solve(input) {
    let products = {};
    for (let line of input) {
        let [town, product, price] = line.split(' | ');
        if (products.hasOwnProperty(product)) {
            let currentProduct = products[product];
            let currentTown = currentProduct.town;
            if (currentTown !== town) {
                let currentPrice = currentProduct.price;
                if (currentPrice <= price) {
                    price = currentPrice;
                    town = currentTown;
                }
            }
        }
        products[product] = {price: price, town: town};
    }
    for (let product of Object.entries(products)) {
        let [productName, productInfo] = product;
        let productLowestPrice = productInfo.price;
        let townName = productInfo.town;
        console.log(`${productName} -> ${productLowestPrice} (${townName})`);
    }
}

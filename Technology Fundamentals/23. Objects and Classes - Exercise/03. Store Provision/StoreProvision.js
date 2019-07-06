function solve(arr) {
    let storeProvisionArr = arr[0];
    let orderArr = arr[1];
    let provision = {};

    for (let i = 0; i < storeProvisionArr.length; i += 2) {
        let product = storeProvisionArr[i];
        let quantity = Number(storeProvisionArr[i + 1]);
        provision[product] = quantity;
    }

    let products = Object.keys(provision);
  
    for (let i = 0; i < orderArr.length; i += 2) {
        let product = orderArr[i];
        let quantity = Number(orderArr[i + 1]);
        if (products.includes(product)) {
            let previousQuantity = provision[product];
            quantity += previousQuantity;
        }
        provision[product] = quantity;
    }
  
    console.log(provision);
}

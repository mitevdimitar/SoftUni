function solve(arr) {
    let cities = {};

    for (let i = 0; i < arr.length; i += 2) {
        let city = arr[i];
        let quantity = Number(arr[i + 1]);
        if (cities.hasOwnProperty(city)) {
            let previousQuantity =  cities[city];
            quantity += previousQuantity;
        }
        cities[city] = quantity;
    }
  
    console.log(JSON.stringify(cities));
}

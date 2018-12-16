function travelTime(arr) {
	let destinations = new Map();
	
	for (let destinationInfo of arr) {
		let [country, city, cost] = destinationInfo.split(' > ');
       cost = Number(cost);
        if (destinations.has(country)) {
            let previousCities = destinations.get(country);
            if (previousCities.has(city)) {
                let previousCost = previousCities.get(city);
                if (previousCost > cost) {
                    previousCities.set(city, cost)
                }
            } else {
                previousCities.set(city, cost);
            }
        } else {
        let cities = new Map();
       cities.set(city, cost);
		destinations.set(country, cities);
        }
    }
   
    let sortedCountries = [...destinations].sort((a, b) => a[0].localeCompare(b[0]));
    for (let [country, citiesMap] of sortedCountries) {
            let sortedCities = [...citiesMap].sort((a, b) => a[1] - b[1]);
            let print = ``;
            for (let [city, cost] of sortedCities) {
                print += `${city} -> ${cost} `;
            }
            console.log(`${country} -> ${print}`)
    }

}

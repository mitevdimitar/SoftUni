function solve(arr) {
	let cities = {};
	arr.forEach(line => {
		let [city, population] = line.split(' <-> ');
		population = Number(population);
		if (cities.hasOwnProperty(city)) {
			let currentPopulation  = Number(cities[city]);
			population += currentPopulation;
			cities[city] = population;
		} else  {
			cities[city] = population;
		}
	});
	let citiesArr = Object.entries(cities);
	for (let city of citiesArr) {
	let [cityName, population] = city;
	console.log(`${cityName} : ${population}`);
	}
}

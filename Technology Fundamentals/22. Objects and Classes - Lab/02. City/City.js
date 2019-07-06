function cityInfo(name, area, population, country, postCode) {
	let city = {
 		name: name,
		area: area,
		population: population,
		country: country,
		postCode
	}
  for (let key in city) {
  	console.log(`${key} -> ${city[key]}`);
  }

}

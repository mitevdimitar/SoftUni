function towns(arr) {
	arr.shift();
	let towns = [];
	for (let arrRow of arr) {
		let [Town, Latitude, Longitude] = arrRow.split(' | ');
	let townArr = Town.split(' ');
	Town = townArr[1];
	Latitude = Number(Latitude).toFixed(2);
	Longitude = Longitude.split(' ')[0];
	Longitude = Number(Longitude).toFixed(2);
		towns.push({
	Town,
	Latitude,
	Longitude
});
	}
	for (let town of towns) {
		town.Longitude = Number(town.Longitude);
		town.Latitude = Number(town.Latitude);
	}
	console.log(JSON.stringify(towns));
}

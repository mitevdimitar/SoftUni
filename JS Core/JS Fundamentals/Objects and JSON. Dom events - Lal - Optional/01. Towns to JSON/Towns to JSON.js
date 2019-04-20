function towns(arr) {
	arr.shift();
	let towns = [];
	for (let arrRow of arr) {
		let arr = arrRow.split(/\s*\|\s*/);
	let Town = arr[1];
	let Latitude = +arr[2];
	let Longitude = +arr[3];
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

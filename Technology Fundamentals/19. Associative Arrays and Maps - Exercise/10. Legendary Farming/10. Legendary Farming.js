function legendaryFarming(materialsInfo) {
	let legendaryItems = new Map();
	let junkItems = new Map();
	legendaryItems.set('shards', 0);
	legendaryItems.set('fragments', 0);
	legendaryItems.set('motes', 0);
	let arr = materialsInfo.split(' ');

	for (let i = 1; i < arr.length; i+= 2) {
		let item = arr[i].toLowerCase();
		let quantity = +arr[i - 1];
		
		if (legendaryItems.has(item)) {
			let currentQuantity = legendaryItems.get(item);
			quantity += currentQuantity;
			legendaryItems.set(item, quantity);
		} else {
			if (junkItems.has(item)) {
			let currentQuantity =  junkItems.get(item);
			quantity += currentQuantity;
			}
		junkItems.set(item, quantity);
		}
		
		if (legendaryItems.get(item) >= 250) {
		itemObtained(item);
		let currentQuantity = legendaryItems.get(item);
		quantity = currentQuantity - 250;
		legendaryItems.set(item, quantity);

			break;
		}
	}
	
	//sort
	
	let sortedLegendary = [...legendaryItems].sort(sortLegendary);

	for (let [material, quantity] of sortedLegendary) {
console.log(`${material}: ${quantity}`);
}
	
let sortedJunk = [...junkItems].sort((a, b) => a[0].localeCompare(b[0]));

for (let [material, quantity] of sortedJunk) {
console.log(`${material}: ${quantity}`);
}

	function sortLegendary(a, b) {
		if (a[1] === b[1]) {
			return a[0].localeCompare(b[0]);
		}
		return b[1] - a[1];
	}
	
function itemObtained(material) {
		if (material === 'shards') {
			console.log('Shadowmourne obtained!');
		} else if (material === 'fragments') {
			console.log('Valanyr obtained!');
		} else if (material === 'motes') {
			console.log('Dragonwrath obtained!');
		}
}
}

function solve(arr) {
	let cities = {};
	arr.forEach(line => {
		let [city, product, salesInfo] = line.split(' -> ');
		let [amountSold, pricePerUnit] = salesInfo.split(' : ');
		let totalIncome = Number(amountSold) * Number(pricePerUnit);
		if (cities.hasOwnProperty(city)) {
			let currentProducts = cities[city];
			currentProducts[product] = totalIncome;
		} else  {
			let currentProduct = {};
			currentProduct[product] = totalIncome;
			cities[city] = currentProduct;
		}
	});
	let citiesArr = Object.entries(cities);
	for (let city of citiesArr) {
		[cityName, productInfo] = city;
		console.log(`Town - ${cityName}`);
		let productInfoArr = Object.entries(productInfo);
		for (let product of productInfoArr) {
			[productName, productTotalIncome] = product;
			console.log(`$$$${productName} : ${productTotalIncome}`)
		}
	}
}

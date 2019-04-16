function solve() {
  let productElements = document.getElementsByClassName('product');
	let resultElement = document.getElementsByTagName('textarea')[0];
	let products = {};
	for (let i = 0; i < productElements.length; i++) {
		let button = productElements[i].children[3];
		button.addEventListener('click', () => {
			let product = productElements[i].children[1].textContent;
			let price = Number(productElements[i].children[2].textContent.split(' ')[1]);
			resultElement.value += `Added ${product} for ${price} to the cart\n`;
			if (products.hasOwnProperty(product)) {
				let currentPrice  = Number(products[product]);
				price += currentPrice;
			} 
			products[product] = price;
		});

	}
	let buyButton = document.querySelector('#exercise > button');
	buyButton.addEventListener('click', () => {
		let listOfProducts = Object.keys(products).join(', ');
		let totalPrice = Object.values(products)
			.reduce((a, b) =>  a + b)
			.toFixed(2);
		resultElement.value += `You bought ${listOfProducts} for ${totalPrice}.`;
	});
}

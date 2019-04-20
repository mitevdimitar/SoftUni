function solve() {
	let buttons = document.getElementsByTagName('button');
	let loadButton = buttons[0];
	let buyButton = buttons[1];
	let endButton = buttons[2];
	let statusConsole = document.getElementsByTagName('textarea')[2];
	let products = [];
	let profit = 0;
	loadButton.addEventListener('click', loadProducts);
	function loadProducts() {	
		let productArr = JSON.parse(document.getElementsByTagName('textarea')[0].value);
		productArr.forEach(product => {
			if (products.length !== 0) {
				let noMatch = true;
				for (let storedProduct of products) {
					if (storedProduct.name == product.name) {
						let currentPrice = storedProduct.price;
						let updatedPrice = (currentPrice + product.price) / 2;
						if (storedProduct.quantity == 0) {
							storedProduct.price = product.price;
						} else {
							storedProduct.price = updatedPrice;
						}
						let currentQuantity = storedProduct.quantity;
						let totalQuantity = Number(currentQuantity) + product.quantity;
						storedProduct.quantity = totalQuantity;
						noMatch = false;
						statusConsole.value += `Successfully added ${product.quantity} ${product.name}. Price: ${product.price}\n`;
					} 
				}
				if (noMatch) {
					products.push(product);
					statusConsole.value += `Successfully added ${product.quantity} ${product.name}. Price: ${product.price}\n`;
				}
			} else {
				products.push(product);
				statusConsole.value += `Successfully added ${product.quantity} ${product.name}. Price: ${product.price}\n`;
			}
		});
	}
	
	buyButton.addEventListener('click', buyProduct);
	function buyProduct() {
		let purchaseInfo = JSON.parse(document.getElementsByTagName('textarea')[1].value);
		let currentProfit = 0;
		let succesfulPurchase = false;
		for (let storedProduct of products) {
			if (purchaseInfo.name == storedProduct.name && purchaseInfo.quantity <= storedProduct.quantity) {
				let currentQuantity = storedProduct.quantity;
				let totalQuantity = Number(currentQuantity) - purchaseInfo.quantity;
				storedProduct.quantity = totalQuantity;
				currentProfit = purchaseInfo.quantity * storedProduct.price;
				profit += currentProfit;
				succesfulPurchase = true;
			}
		}
		if (succesfulPurchase) {
			statusConsole.value += `${purchaseInfo.quantity} ${purchaseInfo.name} sold for ${currentProfit}.\n`;
		} else {
			statusConsole.value += `Cannot complete order.\n`;
		}
	};
	endButton.addEventListener('click', end); 
	function end() {
		statusConsole.value += `Profit: ${profit}.`;
		loadButton.removeEventListener('click', loadProducts);
		buyButton.removeEventListener('click', buyProduct);
		endButton.removeEventListener('click', end); 
	};
}

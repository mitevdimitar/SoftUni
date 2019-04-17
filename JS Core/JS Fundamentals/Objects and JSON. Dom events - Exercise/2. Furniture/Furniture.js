function solve() {
	let buttons = document.getElementsByTagName('button');
	let generateButton = buttons[0];
	generateButton.addEventListener('click', addProducts);
	let buyButton = buttons[1];
	buyButton.addEventListener('click', buyProducts);	

	function addProducts() {
		let productArr = JSON.parse(document.getElementsByTagName('textarea')[0].value);
		productArr.forEach(productInfo => {
			let productName = productInfo.name;
			let productImage = productInfo.img;
			let productPrice = productInfo.price;
			let productDecFactor = productInfo.decFactor;
			let newDiv = createDiv(productName, productImage, productPrice, productDecFactor);
			let furnitureList = document.getElementById('furniture-list');
			furnitureList.innerHTML += newDiv;

			function createDiv(name, image, price, decFactor) {
				let result = ``;
				result += `<div class="furniture">\n`;
				result += `  <p>Name: ${name}</p>\n`;
				result += `  <img src="${image}">\n`;
				result += `  <p>Price: ${price}</p>\n`;
				result += `  <p>Decoration dactor: ${decFactor}</p>\n`;
				result += `  <input type="checkbox">\n`;
				result += `</div>`;
				return result;
			}

		});
				
	}
	
	function buyProducts() {
		let allProducts = [...document.getElementsByClassName('furniture')];
		let productList = [];
		let totalPrice = 0;
		let totalDecFactor = 0;
		let devider = 0;
		allProducts.forEach(product => {
			if (product.children[4].checked) {
				let name = product.children[0].textContent.split(': ')[1];
				productList.push(name);
				totalPrice += Number(product.children[2].textContent.split(': ')[1]);
				totalDecFactor += Number(product.children[3].textContent.split(': ')[1]);
				devider++;
			}
		});
		let averageDecFactor = totalDecFactor / devider;
		let outputElement = document.getElementsByTagName('textarea')[1];
		
		let listOfPurchasedProducts = productList.join(' ');
		outputElement.textContent += `Bought furniture: ${listOfPurchasedProducts}\n`;
		outputElement.textContent += `Total price: ${totalPrice.toFixed(2)}\n`;
		outputElement.textContent += `Average decoration factor: ${averageDecFactor}`;
	}

}

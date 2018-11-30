function tripplesOfLatinLetters(num) {
	for (let n = 0; n < num; n++) {
		let letter1 = String.fromCharCode(97 + n);
		for (let y = 0; y < num; y++) {
			let letter2 = String.fromCharCode(97 + y);
			for (let j = 0; j < num; j++) {
			let letter3 = String.fromCharCode(97 + j);
		console.log(letter1 + letter2 + letter3);
			}

		}
	}
}

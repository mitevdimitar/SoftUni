function solve(currencyFormatter) {
	let usdConverter = function (value) {
		return currencyFormatter(',', '$', true, value);
	}
	return usdConverter;
}

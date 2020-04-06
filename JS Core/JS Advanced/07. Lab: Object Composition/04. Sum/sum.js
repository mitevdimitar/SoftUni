function solve() {
	let resultObj = {
		selector1: "",
		selector2: "",
		resultSelector: "",
		init: function(selector1, selector2, resultSelector) {
			this.selector1 = selector1;
			this.selector2 = selector2;
			this.resultSelector = resultSelector;
		},
		add: function() {
			let firstNum = Number(document.querySelector(this.selector1).value);
			let secondNum = Number(document.querySelector(this.selector2).value);
			let result = document.querySelector(this.resultSelector);
			result.value = firstNum + secondNum;
		},
		subtract: function() {
			let firstNum = Number(document.querySelector(this.selector1).value);
			let secondNum = Number(document.querySelector(this.selector2).value);
			let result = document.querySelector(this.resultSelector);
			result.value = firstNum - secondNum;
		}
	}
	return resultObj;
}

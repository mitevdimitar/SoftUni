(function solve() {
	String.prototype.ensureStart = function(str) {
		if (this.startsWith(str)) {
			return this.toString();
		}
		return `${str}${this}`;
	}
	String.prototype.ensureEnd = function(str) {
		if (this.endsWith(str)) {
			return this.toString();
		}
		return `${this}${str}`;
	}
	String.prototype.isEmpty = function() {
		return this.length === 0;
	}
	String.prototype.truncate = function(n) {
		if (n < 4) {
			return '.'.repeat(n);
		}
		if (n >= this.length) {
			return this.toString();
		}
		let str1 = this.substr(0, n - 1);
		let lastIndex = str1.lastIndexOf(' ');
		if (lastIndex !== -1) {
			return this.toString().substring(0, lastIndex) + '...';
		} else {
			return this.toString().substr(0, n - 3) + '...'
		}
	}
	String.format = function(str, ...params) {
		for (let i = 0; i < params.length; i++) {
			str = str.replace(`{${i}}`, params[i]);
		}
		return str;
	}
})()

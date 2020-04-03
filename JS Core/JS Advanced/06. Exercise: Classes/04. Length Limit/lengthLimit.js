class Stringer {
	constructor(innerString, innerLength) {
		this.innerString = innerString;
		this.innerLength = innerLength;
	}
	decrease(length) {
		this.innerLength -= length;
		if (this.innerLength < 0) {
			this.innerLength = 0;
		}
	}
	increase(length) {
		this.innerLength += length;
		
	}
	toString() {
		let result =  this.innerString.substr(0, this.innerLength);
			if (result.length < this.innerString.length) {
				result += '...'; 
			}
		return result;
	}
}

class CheckingAccount {
	constructor(clientId, email, firstName, lastName) {
		this._clientId = clientId;
		this._email = email;
		this._firstName = firstName;
		this._lastName = lastName;
		this.products = [];
	}
	
	get _clientId() {
		return this.clientId;
	}
	
	set _clientId(val) {
		let num = Number(val);
		if(val.length === 6 && Number.isInteger(num)) {
			this.clientId = val;
		} else {
			throw new TypeError('Client ID must be a 6-digit number');
		}	
	}
	
	get _email() {
		return this.email;
	}
	
	set _email(val) {
		let emailPattern = /[a-z0-9]+@[a-z\.]+/gm
		if (emailPattern.test(val)) {
			this.email = val;
		} else {
			throw new TypeError('Invalid e-mail');
		}
	}
	get _firstName() {
		return this.firstName;
	}
	
	set _firstName(val) {
		let namePattern = /^[a-zA-Z]+$/gm
		if (val.length < 3 || val.length > 20) {
			throw new TypeError('First name must be between 3 and 20 characters long');
		} else if (!namePattern.test(val)) {
			throw new TypeError('First name must contain only Latin characters');
		} else {
			this.firstName = val;
		}
	}

get _lastName() {
		return this.lastName;
	}
	
	set _lastName(val) {
		let namePattern = /^[a-zA-Z]+$/gm
		if (val.length < 3 || val.length > 20) {
			throw new TypeError('Last name must be between 3 and 20 characters long');
		} else if (!namePattern.test(val)) {
			throw new TypeError('Last name must contain only Latin characters');
		} else {
			this.lastName = val;
		}
	}
}

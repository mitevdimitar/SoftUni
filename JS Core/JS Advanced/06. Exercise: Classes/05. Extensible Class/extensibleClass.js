(function() {
	let counter = 1;
	return class Ex{
		constructor() {
			this.id = counter++;
		}
		extend(template) {
			Object.entries(template).forEach(a => {
				if (typeof template[a[0]] == 'function') {
					this.constructor.prototype[a[0]] = a[1];
				} else {
					this[a[0]] = a[1];
				}
			});
		}
	}
})()

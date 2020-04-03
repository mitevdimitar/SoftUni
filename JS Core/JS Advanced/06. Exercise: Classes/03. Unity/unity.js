class Rat {
	constructor(name) {
		this.name = name;
		this.unitedRats = [];
	}
	unite(rat) {
		if(rat instanceof Rat) {
			this.unitedRats.push(rat);
		}
	}
	getRats() {
		return this.unitedRats;
	}
	toString() {
		let result = this.name;
		if (this.unitedRats.length > 0) {
			for (let rat of this.unitedRats) {
			result += `\n##${rat.name}`;
			}
		}
		return result;
	}
}

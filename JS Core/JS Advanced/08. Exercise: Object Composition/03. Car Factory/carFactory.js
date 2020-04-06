function solve(obj) {
	let smallEngine = { power: 90, volume: 1800 };
	let normalEngine = { power: 120, volume: 2400 };
	let monsterEngine = { power: 200, volume: 3500 };
	let hatchback = { type: 'hatchback', color: obj.color }
	let coupe = { type: 'coupe', color: obj.color }

	let carObj = {
		model: obj.model,
		engine: {},
		carriage: {},
		wheels: []
	};
	
	if (obj.power > 120) {
		Object.assign(carObj.engine, monsterEngine);
	} else if (obj.power > 90) {
		Object.assign(carObj.engine, normalEngine);
	} else {
		Object.assign(carObj.engine, smallEngine);
	}
	
	if (obj.carriage == 'hatchback') {
		Object.assign(carObj.carriage, hatchback);
	} else {
		Object.assign(carObj.carriage, coupe);
	}
	let wheelsize = obj.wheelsize;
	if (wheelsize % 2 == 0) {
		wheelsize -= 1;
	}
	for (let i = 0; i < 4; i++) {
		carObj.wheels.push(wheelsize);
	}
	return carObj;
}

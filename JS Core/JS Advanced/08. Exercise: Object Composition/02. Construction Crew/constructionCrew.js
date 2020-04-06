function solve(obj) {
	let isThirsty = obj.dizziness;
	let weight = obj.weight;
	let experience = obj.experience;
	let hydrateLevel = obj.levelOfHydrated;
	
	if (isThirsty) {
		let waterNeeded = 0.1 * weight * experience;
		let newWaterLevel = hydrateLevel + waterNeeded;
		obj.levelOfHydrated = newWaterLevel;
		obj. dizziness = false;
	}
	return obj;
}

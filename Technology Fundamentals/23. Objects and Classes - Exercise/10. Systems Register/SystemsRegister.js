function systems(arr) {
	let systems = {};
//setting up object systems with nested objects – systems/systemName/ComponentName: subcomponentName
	for (let arrRow of arr) {
	let [systemName, componentName, subcomponentName] = arrRow.split(' | ');
		if (!systems.hasOwnProperty(systemName)) {
		systems[systemName] = {};
}
let systemInfo = systems[systemName];
if (!systems[systemName].hasOwnProperty(componentName)) {
systemInfo[componentName] = [];
}
let subcomponent = systemInfo[componentName];
subcomponent.push(subcomponentName);
	}
	// sorting the systems & printing the result
	let sorted = Object.entries(systems).sort(sortSystems);
	for (let [systemName, components] of sorted) {
		let sortedComponents = Object.entries(components).sort((a, b) => b[1].length - a[1].length);
		console.log(systemName);
		for (let [component, subcomponents] of sortedComponents) {
		console.log(`|||${component}`);
			for (let subcomponent of subcomponents) {
				console.log(`||||||${subcomponent}`);
			}
		}
	}
	function sortSystems(a, b) {
		let firstComponents = Object.keys(a[1]);
		let secondComponents = Object.keys(b[1]);
		if (firstComponents.length === secondComponents.length) {
			return a[0].localeCompare(b[0]);
		}
		return secondComponents.length - firstComponents.length;
	}
}

function solve(input) {
	let objManipulator = function() {
		let objList = {};
		
		return {
			create: function(name) {
				objList[name] = {};
			},
			inherit: function(parent, child) {
				Object.setPrototypeOf(objList[parent], objList[child]);
			},
			set: function(name, key, value) {
				objList[name][key] = value;
			},
			//set <name> <key> <value> 
			print: function(name) {
				let details = [];
				for (let pair in objList[name]) {
					details.push(`${pair}:${objList[name][pair]}`);
				}
				console.log(details.join(', '));
			}
		} 
	}
	let obj = objManipulator();
	
	for (let row of input) {
		[command, ...args] = row.split(' ');
		if (command == 'create') {
			obj.create(args[0]);
			if (args[1] == 'inherit') {
				obj.inherit(args[0], args[2]);
			}
		} else if (command == 'set') {
			obj.set(args[0], args[1], args[2]);
		} else {
			obj.print(args[0]);
		}
		
	}
}

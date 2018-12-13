function neighborhoods(arr) {
    let neighborhoodsArr = arr
        .shift()
        .split(', ');
    let neighborhoods = new Map();

    for (let neighborhood of neighborhoodsArr) {
        neighborhoods.set(neighborhood, []);
    }
    
    for (let entry of arr) {
        let [neighborhood, name] = entry.split(' - ');
        if (neighborhoods.has(neighborhood)) {
            let namesArr = neighborhoods.get(neighborhood);
            namesArr.push(name);
            neighborhoods.set(neighborhood, namesArr);
        }
    }

    let sorted = [...neighborhoods.entries()]
        .sort((a, b) => b[1].length - a[1].length);
    
    for (let [neighborhood, names] of sorted) {
        let totalNames = names.length;
        console.log(`${neighborhood}: ${totalNames}`);
        for (let name of names) {
            console.log(`--${name}`)
        }
    }

}

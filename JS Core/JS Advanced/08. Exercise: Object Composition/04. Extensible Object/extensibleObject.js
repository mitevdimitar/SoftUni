function solve() {
    let myObj = {
        extend: function(obj) {
            let entries = Object.entries(obj);
            for (let [key, value] of entries) {
                if (typeof value == 'function') {
                    Object.getPrototypeOf(obj)[key] = value;
                } else {
                    myObj[key] = value;
                }
            }
        }
    };
    
    return myObj;
}

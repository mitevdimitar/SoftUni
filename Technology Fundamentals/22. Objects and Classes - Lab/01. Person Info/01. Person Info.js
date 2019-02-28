function personInfo(arg1, arg2, arg3) {
    let person = {
        firstName: arg1,
        lastName: arg2,
        age: Number(arg3)
    };

    for (let [key, value] of Object.entries(person)) {
        console.log(`${key}: ${value}`)
    }

}

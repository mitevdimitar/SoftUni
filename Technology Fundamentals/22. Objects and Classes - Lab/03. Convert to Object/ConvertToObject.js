function convertToObject(personJson) {
    let person = JSON.parse(personJson);

    for (let key in person) {
        console.log(`${key}: ${person[key]}`)
    }
}

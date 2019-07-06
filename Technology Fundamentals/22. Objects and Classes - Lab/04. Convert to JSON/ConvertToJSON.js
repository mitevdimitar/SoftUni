function convertToJson(arg1, arg2, arg3) {
    let person = {
        name: arg1,
        lastName: arg2,
        hairColor: arg3
    }

    let personJson = JSON.stringify(person);

    console.log(personJson);
}

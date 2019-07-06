function phoneBook(arr) {
    let phoneBook = [];
    for (let person of arr) {
        let [name, phone] = person.split(' ');
        phoneBook[name] = phone;
    }
    for (let key in phoneBook) {
        console.log(key + ' -> ' + phoneBook[key]);
    }
}

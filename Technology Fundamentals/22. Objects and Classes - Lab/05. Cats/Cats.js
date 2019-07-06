function cats(arr) {
    
    class Cat {
        constructor(name, age) {
            this.name = name;
            this.age = age;
        }
        sayHello() {
            console.log(`${this.name}, age ${this.age} says Meow`);
        }
    }

    for (let cat of arr) {
        let [name, age] = cat. split(' ');
        let currentCat = new Cat(name, age);
        currentCat.sayHello();
    }
   
}

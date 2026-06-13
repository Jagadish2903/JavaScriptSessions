
//Class:
// No need to pre‑declare global variables inside the class body
// if they are initialized directly in the constructor.
//we can Creatae multiple class as well in a single file 


class User {
    constructor(name, age, salary, isActive) {
        this.name = name;
        this.age = age;
        this.salary = salary;
        this.isActive = isActive;
    }
}

// ----------------------- Object Creation -----------------------
let u1 = new User("Bruno", 20, 12.2, false);

// Accessing properties
console.log(u1.name); // Bruno


console.log("========================");

class Person {
    constructor() {
        console.log("This is a default construtor");
    }

}

let p1 = new Person();
console.log(p1);//This is a default construtor
//Person {} ---> This will be prinited since no propertoes are there in this object 
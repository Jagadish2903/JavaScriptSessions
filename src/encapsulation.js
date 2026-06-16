// ======================= Encapsulation in JavaScript =======================

// Definition:
// Encapsulation is the practice of hiding private data members
// and exposing them through a controlled public interface (getters/setters).

// In JavaScript, private fields are declared using '#'.
// They cannot be accessed directly outside the class.

class Employee {
    name;
    #age;    // private field
    #salary; // private field

    constructor(name, age, salary) {
        this.name = name;
        this.#age = age;
        this.#salary = salary;
    }

    // Public setters
    setAge(age) {
        this.#age = age;
    }

    setSalary(salary) {
        this.#salary = salary;
    }

    // Public getters
    getAge() {
        return this.#age;
    }

    getSalary() {
        return this.#salary;
    }
}

// ----------------------- Usage -----------------------
let e1 = new Employee("Jaga", 30, 23.44);

console.log(e1.name, e1.age, e1.salary);
// Jaga undefined undefined → private fields not accessible directly

// console.log(e1.#salary); ❌ Error: Private field must be declared in enclosing class

// Access private fields via getters
console.log(e1.getAge());    // 30
console.log(e1.getSalary()); // 23.44

// Update private fields via setters
e1.setAge(35);
console.log(e1.getAge());    // 35

e1.setSalary(90.33);
console.log(e1.getSalary()); // 90.33

console.log("=================================================");

class loginPage {
    #username; // private field
    #password; // private field

    // Constructor initializes private fields
    constructor(username, password) {
        this.#username = username;
        this.#password = password;
    }

    // Getters (read private fields)
    getUsername() {
        return this.#username;
    }

    getPassword() {
        return this.#password;
    }

    // Setters (update private fields)
    setUsername(username) {
        this.#username = username;
    }

    setPassword(password) {
        this.#password = password;
    }
}

// ----------------------- Usage -----------------------

// Constructor acts like a POST call (initial data)
let lp = new loginPage("Lav", "Test123");

// Direct access fails → private fields are hidden
console.log(lp.username); // undefined
// console.log(lp.#username);  Error: Private field must be declared in enclosing class

// Getters act like a GET call
console.log(lp.getUsername(), lp.getPassword()); // Lav Test123

// Setters act like a PUT call (update data)
lp.setUsername("Bruno");
console.log(lp.getUsername()); // Bruno

lp.setPassword("Usha");
console.log(lp.getPassword()); // Usha



console.log("===============================================");

//Example 3: COnstructors with conditions 

class user {
    name;
    #age;
    #salary;



    constructor(name, age, salary) {
        this.name = name;
        if (age >= 10) {
            this.#age = age;
        }
        if (salary >= 10) {
            this.#salary = salary;
        }
    }

    getAge1() {
        return this.#age
    }

    getSalary1() {
        return this.#salary
    }


    //Setters 
    setSalary1(salary) {
        if (salary >= 10) {
            this.#salary = salary;
        }
    }


    setAge1(age) {
        if (age >= 10) {
            this.#age = age;
        }
    }
}


let u1 = new user("Lav", 10, 5)

let myag = u1.getAge1();
console.log(myag);//10

let mysala = u1.getSalary1();
console.log(mysala);//undefined //Cox the value doesnt pass the condiditon so it wont set 


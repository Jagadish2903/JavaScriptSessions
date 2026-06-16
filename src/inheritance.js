// ======================= Inheritance in JavaScript =======================

// Definition:
// Inheritance allows a child class to access properties and methods
// of a parent class using the 'extends' keyword.
// - Child can access everything from parent.
// - Parent cannot access anything from child.

class Car {
    speed = 100;

    start() {
        console.log("Car Start");
    }

    stop() {
        console.log("Car Stop");
    }

    refuel() {
        console.log("Car Refuel");
    }
}

class BMW extends Car {
    speed = 200; // hides parent's speed

    // Method overriding
    start() {
        console.log("BMW Start");
    }

    // Child-specific method
    parking() {
        console.log("BMW Parking");
    }
}

let bmw = new BMW();

console.log(bmw.speed); // 200 → child property used
// If BMW didn't define speed, it would inherit 100 from Car.

// Method overriding
bmw.start();   // BMW Start

// Inherited methods
bmw.refuel();  // Car Refuel
bmw.stop();    // Car Stop

// Child-specific method
bmw.parking(); // BMW Parking


console.log("===================================");

// Creating object for parent class
let car = new Car();
console.log(car.speed); // 100 → parent property

// Parent methods
car.refuel(); // Car Refuel
car.start();  // Car Start
car.stop();   // Car Stop

// Trying to access child-specific methods
// car.parking();  Error: car.parking is not a function

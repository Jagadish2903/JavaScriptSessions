// ======================= Super Keyword in JavaScript =======================

// Definition:
// - 'super' keyword is used to call parent class methods or constructors.
// - It cannot be used to directly access parent class properties.
// - Child can override parent methods and still call the parent version using super.methodName().

class Car {
    speed = 100;

    start() {
        console.log("Car Start");
    }

    parking() {
        console.log("Car Parking");
    }
}

class BMW extends Car {
    speed = 200; // hides parent's speed

    // Method overriding
    start() {
        console.log("BMW Start");
        console.log(this.speed);       // Child property → 200
        console.log(super.speed);      // ❌ Undefined → super doesn't access properties
    }

    // Overriding + calling parent method
    parking() {
        console.log("BMW Parking");
        super.parking();               // Calls Car's parking()
    }
}

let bmw = new BMW();
bmw.start();    // BMW Start, 200, undefined
bmw.parking();  // BMW Parking, Car Parking

console.log("========================================");
//Then how to access the parent class properties ...usign getters and return from that 

//Example : 
class Car1 {
    speed = 100;
    getSpeed1() {
        return this.speed;
    }
    start1() {
        console.log("Car Start");
        console.log(this.speed);
    }
}

class BMW1 extends Car1 {
    speed = 200;

    start1() {
        console.log("BMW Start");
        super.start1(); // still prints 200
        console.log(super.getSpeed1()); // prints 100
    }
}

let bmw1 = new BMW1();
bmw1.start1();

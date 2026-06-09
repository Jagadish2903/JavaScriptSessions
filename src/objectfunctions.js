// ======================= Functions Inside Objects =======================

// 1. Shorthand Method Syntax
// - No 'function' keyword.
// - 'this' refers to the current object.
let data = {
    name: "Jag",
    age: 33,
    salary: 12.33,
    coding() {
        console.log("Hello", this.name);
    }
};
data.coding(); // Hello Jag
console.log(data.name, data.age); // Jag 33

// 2. Method with Parameters
// - Works same as shorthand, but accepts arguments.
// - Useful for calculations.
let data1 = {
    name: "Jag",
    age: 33,
    salary: 12.33,
    coding1(x, y) {
        console.log(x, y);
        return x + y;
    }
};
let r1 = data1.coding1(20, 30);
console.log(r1); // 50

// 3. Anonymous Function inside object
// - Defined using 'function' keyword.
// - 'this' works normally.
let data2 = {
    name: "Jag",
    age: 33,
    salary: 12.33,
    calculate: function (x, y) {
        console.log(x, y);
        return x + y;
    }
};
let r2 = data2.calculate(20, 40);
console.log(r2); // 60

// 4. Arrow Function inside object
// - Arrow functions do not bind 'this'.
// - Must use object reference directly.
let data3 = {
    name: "Jag",
    age: 33,
    salary: 12.33,
    calculate1: (x, y) => {
        console.log(x, y);
        return x + y;
    }
};
let r3 = data3.calculate1(20, 40);
console.log(r3); // 60

// Important: Arrow functions and 'this'
let data4 = {
    name: "Jag",
    age: 33,
    salary: 12.33,
    coding: () => {
        // console.log("Hello", this.name); // ❌ Error
        console.log("Hello", data4.name); // ✅ Use object reference
    }
};
data4.coding(); // Hello Jag

console.log("=====================================");

// ======================= Object Destructuring (Nested Objects) =======================

let user = {
    name: "Tom",
    age: 30,
    address: {
        city: "Chennai",
        no: 121,
        location: {
            latitude: 101.22,
            longitude: 123.43
        }
    }
};

// 1. Destructuring direct properties
let { name, age } = user;
console.log(name, age); // Tom 30

// 2. Destructuring nested property
// Dot or bracket notation will not work here.
// Use colon operator with {} to go deeper.
let { address: { city } } = user;
console.log(city); // Chennai

// 3. Destructuring deeper nested properties
let { address: { no }, address: { location: { latitude, longitude } } } = user;
console.log(latitude, longitude); // 101.22 123.43
console.log(no, latitude, longitude);//121 101.22 123.43


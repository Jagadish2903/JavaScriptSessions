// Object Cloning in JavaScript
// Two common ways:
// 1. Spread operator {...object} → Shallow copy
// 2. structuredClone(object) → Deep copy

let user = {
    name: "lav",
    age: 35,
    salary: 40.44,
    isActive: true
};

// Using Spread Operator (Shallow Copy)
let myuser1 = { ...user };
console.log(user);
console.log(myuser1);

// Updating myuser1
myuser1.name = "jaga";
console.log(user);   // original unchanged
console.log(myuser1); // updated clone

console.log("==============================");

// Using structuredClone (Deep Copy)
let myuser2 = structuredClone(user);
console.log(user);
console.log(myuser2);

// Updating myuser2
myuser2.name = "jaga";
console.log(user);   // original unchanged
console.log(myuser2); // updated clone

console.log("=============================================");

// Note:
// - Spread operator creates a shallow copy.
// - structuredClone creates a deep copy.
// - Shallow copy fails for nested objects/arrays.

let empdata = {
    name: "Lav",
    age: 35,
    phNo: "984567834",
    salary: 33.43,
    isActive: false,
    address: {
        flat: 101,
        building: "Roshan Enclave"
    },
    devices: ["iphone", "mac", "ipad"]
};

// Shallow Copy with Spread
let myempdata1 = { ...empdata };
console.log(empdata);
console.log(myempdata1);

// Updating nested property
myempdata1.address.flat = 102;
console.log(empdata);    // ❌ also updated
console.log(myempdata1); // shallow copy issue

console.log("============================================");

// Deep Copy with structuredClone
let myempdata2 = structuredClone(empdata);
console.log(empdata);
console.log(myempdata2);

// Updating nested property
myempdata2.address.flat = 104;
console.log(empdata);    // ✅ original unchanged
console.log(myempdata2); // deep copy works



// ======================= Notes on Output =======================

// 1. Flat Object (user)
// - Using Spread Operator {...user} → creates a shallow copy.
//   Updating myuser1.name = "jaga" changes only the clone.
//   Output shows: user.name = "lav", myuser1.name = "jaga".
// - Using structuredClone(user) → creates a deep copy.
//   Updating myuser2.name = "jaga" changes only the clone.
//   Output shows: user.name = "lav", myuser2.name = "jaga".
// => For flat objects, both methods behave the same.

// 2. Nested Object (empdata)
// - Using Spread Operator {...empdata} → shallow copy.
//   Nested objects/arrays are still shared references.
//   Updating myempdata1.address.flat = 102 updates BOTH empdata and myempdata1.
//   Output shows: empdata.address.flat = 102, myempdata1.address.flat = 102.
// - Using structuredClone(empdata) → deep copy.
//   Nested objects/arrays are fully cloned.
//   Updating myempdata2.address.flat = 104 changes ONLY the clone.
//   Output shows: empdata.address.flat = 101, myempdata2.address.flat = 104.
// => For nested objects, spread fails (shallow copy issue), structuredClone succeeds (deep copy).

// Key Takeaway:
// - Spread Operator → Shallow copy (safe for flat objects).
// - structuredClone → Deep copy (safe for nested/complex objects).
// - Output demonstrates why structuredClone is preferred for deep/nested data.



//Hence it is recommended to go with Structured Clone 
// Objects in JavaScript
// - Objects are collections of related data stored as key-value pairs.
// - Non-primitive data type.
// - Stored in Heap memory, while the reference (variable) is stored in Stack.

let user = {
    name: "jaga",
    age: 35,
    salary: 23.34,
    isActive: true
};

console.log(user);

// Accessing data using Dot Notation
console.log(user.name);     // jaga
console.log(user.age);      // 35
console.log(user.isActive); // true

console.log("============================================");

// Accessing data using Bracket Notation
// Must use quotes around the property name
console.log(user['name']);     // jaga
console.log(user['age']);      // 35
console.log(user['isActive']); // true

// Note: Dot notation is cleaner and preferred when property names are valid identifiers.
// Bracket notation is useful when property names are dynamic or contain spaces/special characters.

console.log("============================================");

// Null or Undefined reference:

// If the object reference is set to null or undefined, accessing properties will throw an error.
user = null;
// console.log(user.age); // ❌ TypeError: Cannot read properties of null (reading 'age')
// console.log(user['name']); // ❌ TypeError: Cannot read properties of null (reading 'name')

// Same error occurs if user = undefined

//Objects with null reference or no reference the garbage collector will come into picture and
//clean up automatically
//GC will clean up heap memory only not the stack

//Note :
//In stack - Number, Boolean, String , Object reference , - BigInt, -Null, -Undefined --All PrimitiveS
//In Heap - Array , Object


//In java we have system.gc() but it doesnt guarantee
//In Javascript it will be automatically called and v8 engine decides when to be called


// Garbage Collection: Java vs JavaScript

// In Java:
// - We can call System.gc() to request garbage collection.
// - This is only a hint to the JVM, not a guarantee.
// - The JVM decides whether to run GC based on memory pressure and internal heuristics.
// - Developers usually rely on automatic GC cycles rather than calling System.gc() directly.

// In JavaScript:
// - Garbage collection is fully automatic.
// - There is no explicit method like System.gc().
// - The V8 engine (used in Chrome/Node.js) decides when to run GC.
// - GC cleans up heap memory (objects, arrays, functions) when they become unreachable.
// - Stack memory is managed separately by the runtime; variables are popped when scope ends.

// Key Takeaway:
// - Java → System.gc() exists but does not guarantee cleanup.
// - JavaScript → GC is automatic; the engine decides when to run it.
// - In both languages, garbage collection is non-deterministic (you cannot control exact timing).




let empdata = {
    name: "Lav",
    age: 35,
    salary: 33.43,
    isActive: false
}
console.log(empdata); //{ name: 'Lav', age: 35, salary: 33.43, isActive: false }
//To update the user data 
empdata.age = 36;
console.log(empdata);//{ name: 'Lav', age: 36, salary: 33.43, isActive: false }

//TO delete the user data 
delete empdata.isActive
console.log(empdata);//{ name: 'Lav', age: 36, salary: 33.43 }


//we can add , update , delete the data in the object in javascript 


console.log("============================================");

//Nested Objects : 

let customer = {
    name: "Lav",
    age: 35,
    phNo: "984567834",
    salary: 33.43,
    isActive: false,
    address: {
        flat: 101,
        building: "Roshan Enclave"
    }
}

//In this the address will not go inside the stack it will be in Heap only since its a key : 
//and also its a part of that customer object 

// Accessing data using Dot Notation
console.log(customer.name);     // Lav
console.log(customer.age);      // 35
console.log(customer.isActive); // false
console.log(customer.address.flat);//101

console.log("============================================");

// Accessing data using Bracket Notation
// Must use quotes around the property name
console.log(customer['name']);     // Lav
console.log(customer['age']);      // 35
console.log(customer['isActive']); // false
console.log(customer['address']['flat']);//101

//Imp:
//Note : Here the Customer is the JS Object
//To convert the JS Object to JSON  ---> Serialization
let customerjson = JSON.stringify(customer);
console.log(customerjson);//{"name":"Lav","age":35,"phNo":"984567834","salary":33.43,"isActive":false,"address":{"flat":101,"building":"Roshan Enclave"}}

//Here we can see all the Keys are in String which is nothing but a json where as in JS Object its key will not be String

console.log(typeof customerjson); //String 


//To Convert the JSON to JSObject again we can use Parse --> Deserialization
let customerJS = JSON.parse(customerjson);
console.log(customerJS);
// {
//   name: 'Lav',
//   age: 35,
//   phNo: '984567834',
//   salary: 33.43,
//   isActive: false,
//   address: { flat: 101, building: 'Roshan Enclave' }
// }
console.log(typeof customerJS);//Object 



//Js Object to JSON --> Serialization
//JSON to JSObject --> Deserialization

//In the above program 2 objects are created one is customer and customerJS
console.log(customer.name === customerJS.name);//true
//Comparing the object property will compare the Type and value so true 

console.log(customer === customerJS);//false 
//comparing the customer object and customer js will give false cox the when we compare
//2 objects it compares the memory address


// - In JavaScript, when comparing two objects with === or ==,
//   the comparison checks whether they reference the same memory address.
// - Even if the objects have identical properties and values,
//   they are stored at different locations in heap memory.
// - Therefore, the result is false.

// Key Points:
// - Primitive values (numbers, strings, booleans, null, undefined) are compared by value.
//   Example: console.log(10 === 10); // true
// - Objects (arrays, functions, objects) are compared by reference

console.log("============================================");

//We can also use Array inside the Objects 

let person = {
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
}


console.log(person.devices);     // Lav


//converting to JSON from JSObject --Serialization
let personJson = JSON.stringify(person);
console.log(personJson);
//{"name":"Lav","age":35,"phNo":"984567834","salary":33.43,"isActive":false,"address":{"flat":101,"building":"Roshan Enclave"},"devices":["iphone","mac","ipad"]}


//Converting to JSObject from JSON 
let personJS = JSON.parse(personJson);
console.log(personJS);
//{
//   name: 'Lav',
//   age: 35,
//   phNo: '984567834',
//   salary: 33.43,
//   isActive: false,
//   address: { flat: 101, building: 'Roshan Enclave' },
//   devices: [ 'iphone', 'mac', 'ipad' ]
// }

console.log(personJS.devices[0]); //iphone 


//Serialization --> Any Language Object converting to any format (JSON/XML/HTML/TextFile)

// Serialization
// - Serialization means converting an object from any programming language
//   into a transferable format such as JSON, XML, HTML, or a text file.
// - Purpose: To store or transmit data in a standard format.
// - Example in JavaScript: JSON.stringify(object) → converts JS object to JSON string.
// - Example in Java: ObjectOutputStream → converts Java object into a byte stream.


// Deserialization
// - Deserialization means converting data from a standard format (JSON, XML, HTML, TextFile)
//   back into a language-specific object.
// - Purpose: To reconstruct the original object structure from stored or transmitted data.
// - Example in JavaScript: JSON.parse(string) → converts JSON string back into JS object.
// - Example in Java: ObjectInputStream → reads a byte stream and reconstructs the Java object.


console.log("====================================================");

//Important : 
//To Pretty print the json then we can use 

let employee = {
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
}

let employeeJson1 = JSON.stringify(employee);
console.log(employeeJson1);


//To beautify the json null is nothing but a replacer so we have given null and 2 is the spacing one 
let employeeJson2 = JSON.stringify(employee, null, 2);
console.log(employeeJson2);
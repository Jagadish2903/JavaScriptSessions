// ======================= Call By Reference =======================

// Example:
let user = {
    name: "Lav",
    age: 33,
    salary: 22.33,
    isActive: true
};

function getUserDetails(userObj) {
    console.log(userObj.name, userObj.age, userObj.salary, userObj.isActive);
    console.log(userObj);
}

// Calling function with object reference:
getUserDetails(user);
// Output:
// Lav 33 22.33 true
// { name: 'Lav', age: 33, salary: 22.33, isActive: true }

// Notes:
// - In JavaScript, objects are non-primitive and stored in heap memory.
// - Variables hold references (memory addresses) to these objects.
// - When passing an object to a function, the reference is passed (not a copy).
// - Inside the function, userObj points to the same object as user.
// - Any modification to userObj inside the function will affect the original object.
// - This is called "Call by Reference".

// Example of modification:
function updateUser(userObj) {
    userObj.age = 40; // modifies original object
}

updateUser(user);
console.log(user.age); // 40 → original object updated

// Key Takeaways:
// - Primitive types (number, string, boolean) → passed by value.
// - Objects, arrays, functions → passed by reference.
// - Call by reference means both variables point to the same heap object.
// - Changes inside the function reflect outside as well.

console.log("================================================");

// ======================= Destructuring =======================

//Destructuring allows extracting specific properties from objects or arrays.

//Object Destructing with Function :

// Example:
let person = {
    name: "Jaga",
    age: 33,
    salary: 22.33,
    isActive: true
};

// Restricting to only two properties from the object
//Destructuring two properties

//Its a must to write a curly braces even if pass the single param 

function getPersonData1({ name, age }) {
    console.log(name, age);
}

getPersonData1(person); // Output: Jaga 33

console.log("=============================");

//Destructuring single property 
function getPersonData({ name }) {
    console.log(name);
}

getPersonData(person); // Output: Jaga 


console.log("=============================");

//Destructuring 0 property but we need to pass the complete object reference in the console.log
//if we give the particular property we will get error 
function getPersonData2({ }) {
    console.log(person);
}

getPersonData2(person); // Output: Jaga 

// Notes:
// - Destructuring allows extracting specific properties from objects or arrays.
// - It helps limit the data passed into a function when the object is large.
// - Syntax: function fn({prop1, prop2}) { ... } → only those props are accessible.
// - No limit on how many parameters can be destructured.
// - Available in JavaScript and supported in Playwright test automation.

// Memory Allocation & Deallocation:
// - The 'person' object is stored in heap memory.
// - When calling getPersonData(person):
//   * A stack frame is created with a reference to 'person'.
//   * Destructuring extracts 'name' and 'age' into local variables inside the stack frame.
// - After function execution finishes, the stack frame is popped (deallocated).
// - The original 'person' object remains in heap memory until it becomes unreachable.
// - Garbage Collector (GC) will eventually clean the heap object if no references exist.

// Key Takeaways:
// - Destructuring improves readability and reduces boilerplate code.
// - Stack → temporary local variables created during destructuring (LIFO allocation/deallocation).
// - Heap → original object remains until GC removes it.
// - Destructuring does not copy the whole object, only references to selected properties.

console.log("=====================================================");

////Object Destructing without Function :


let { name, age } = person;
console.log(name, age); //Jaga 33



let { username, userage } = person;
console.log(username, userage);//Undefined Undefined 
//cox the key username and userage is not available in the person object 

//Still we can correct this by mapping the key to this property 

let { name: username1, age: userage1 } = person;
console.log(username1, userage1);// Jaga 33 
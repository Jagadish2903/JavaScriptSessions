// Functions:
// A block of code or logic that performs a specific task
// Reusable

// Functions vs Methods:
// A function is called a "Function" when defined outside a class
// A function is called a "Method" when defined inside a class

// 1. Function with no input parameters and no return value (Void Function)

function test() {
    console.log("Hello");
}

test(); // Output: Hello

// Explanation:
// - 'function' is the keyword used to declare a function
// - 'test' is the function name
// - When declared, the function is stored in heap memory
// - When invoked (test()), the call is placed on the stack

// Notes:
// 1. Function names should follow camelCase convention
// 2. Functions can be called before their declaration due to hoisting,
//    but this is not considered best practice


console.log("=====================================================");

// 2. Function with no input parameters and has a return value

// Example 1
function getNumber() {
    console.log("Getting Random Number");
    return 100;
}

getNumber(); // Getting Random Number

// To capture the return value, store it in a variable before printing
let num = getNumber();
console.log(num); // Getting Random Number 100

// Note: Hovering over getNumber() shows return type → function getNumber(): number

console.log("=====================================================");

// Example 2
function getName() {
    console.log("Getting Random Name");
    return "Lav";
}

let name = getName();
console.log(name); // Getting Random Name Lav

// Note: Hovering over getName() shows return type → function getName(): string

console.log("=====================================================");

// Example 3
function launchBrowser() {
    console.log("Launching Browser");
    return true;
}

let isLaunched = launchBrowser();

if (isLaunched) {
    console.log("Browser Launched and URL Entered");
} else {
    console.log("Please pass the correct browser");
}

console.log("=======================================");

// Important Note:
// Type of any function is "function"
console.log(typeof launchBrowser); // function
console.log(typeof getName);       // function

// No need to explicitly write the return type in the function signature

console.log("=======================================");

// 3. Function with input parameters and a return value
// Parameters in JavaScript do not require let/const/var keywords
//return type is also Any since we are not giving any param type 

function add(x, y) {
    console.log("Adding two values");
    let z = x + y;
    return z;
}


// Hovering shows → function add(x: any, y: any): any

let result = add(10, 20);
console.log(result); // Adding two values → 30

let result2 = add("hello", 10);
console.log(result2); // Adding two values → hello10

let result3 = add(true, 10);
console.log(result3); // Adding two values → 11 (true is treated as 1)

let result4 = add("hello", false);
console.log(result4); // Adding two values → hellofalse

// Note:
// Since JavaScript does not enforce parameter types,
// functions can accept strings, numbers, or booleans.
// This is why TypeScript is often used for type safety.
// If we declare a function with multiple parameters,
// all parameters should ideally be used inside the function.
// Declaring unused parameters is not a good practice.

function calculateBill(food, drinks, tax) {
    console.log("Calculating bill amount");
    return food + drinks; // Correct usage: use both food and drinks
    // 'tax' is declared but not used → bad practice
}

let total = calculateBill(200, 100, 50);
console.log(total); // Output: 300

// Explanation:
// - Always ensure that the number of parameters declared matches the number of parameters used.
// - Unused parameters make the function misleading and harder to maintain.
// - If a parameter is optional, handle it explicitly (e.g., with default values).


// - If arguments are missing, the corresponding parameters become 'undefined',
//   which can lead to unexpected results like NaN.

// Example: Missing parameter leads to NaN
function calculateBills(food, drinks, tax) {
    console.log("Calculating bill amount");
    return food + drinks + tax;
}

let totalAmt = calculateBills(200, 100);
console.log(totalAmt); // Output: NaN (because tax = undefined)

console.log("============================================");

//Example for launching browser : 

function launchBrowser1(browserName) {
    switch (browserName.trim().toLowerCase()) {
        case 'chrome':
            console.log("Launching Chrome...");
            return true;
        case 'firefox':
            console.log("Launching Firefox...");
            return true;
        case 'edge':
            console.log("Launching Edge...");
            return true;
        case 'safari':
            console.log("Launching Safari...");
            return true;
        default:
            console.log("Invalid Browser...", browserName);
            return false;
    }
}


let isBrowserlaunched = launchBrowser1('Chrome');
console.log(isBrowserlaunched);


if (isBrowserlaunched) {
    console.log("Entering URL....");
}

console.log("========================================");

// Key Points on Functions in JavaScript
// -------------------------------------

// 1. Duplicate Function Declarations
function printingFunctions() {
    console.log("Printing Function1");
}

function printingFunctions() {
    console.log("Printing Function2");
}


printingFunctions();

// In Module-based JavaScript (ES Modules):
// - Declaring duplicate functions with the same name will throw an error.
// - Duplicate function names are not allowed even if it is overloaded.

// In CommonJS (Node.js default module system):
// - No error is thrown.
// - The latest function declaration overrides the previous one.
// - So calling printingFunctions() will execute "Printing Function2".


// 2. No Concept of Method Overloading in JavaScript
function printing() {
    console.log("Printing Function1");
}

function printing(name) {
    console.log("Printing Function2");
}


// In languages like Java or C#, method overloading allows multiple functions
// with the same name but different parameter lists.
// Example: printing(), printing(name), printing(name, age)

// In JavaScript:
// - The last declared function with the same name overrides earlier ones.
// - There is no true method overloading.
// - Only the latest definition is retained.
// - So calling printing() or printing("Lav") will always run "Printing Function2" in common js and error in module js.


// Notes:
// - JavaScript functions are flexible: parameters can be optional.
// - If fewer arguments are passed, missing parameters become 'undefined'.
// - If more arguments are passed, extra ones are ignored unless handled explicitly.
// - To simulate overloading, developers use:
//   a) Default parameters
//   b) Rest parameters (...args)
//   c) Conditional logic inside the function



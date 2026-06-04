// ======================= Default Parameters =======================

// Example 1:
function greet(name = 'Jag') {
    console.log('Hello' + name);
}

greet();       // Output: HelloJag → no argument passed, default value used
greet('Lav');  // Output: HelloLav → argument overrides default value

// Notes:
// - Default parameters allow you to set a fallback value for a function parameter.
// - If no argument is provided, the default value is used.
// - If an argument is provided, it overrides the default.
// - Default parameters improve code readability and prevent "undefined" values.
// - They are evaluated at call time, not at function definition time.
// - You can use expressions as default values (e.g., function f(x = 10*2) { ... }).
// - Multiple parameters can have defaults, but they must be defined in order.
// - Default parameters work well with optional arguments.


console.log("===============================================");

//Example 2: 
//Example for launching browser : 

function launchBrowser1(browserName = 'chrome') {
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




let isBrowserlaunched1 = launchBrowser1('Firefox');
console.log(isBrowserlaunched1);

if (isBrowserlaunched1) {
    console.log("Entering URL....");
}


let isBrowserlaunched2 = launchBrowser1();
console.log(isBrowserlaunched2);


if (isBrowserlaunched2) {
    console.log("Entering URL....");
}

console.log("========================================");


//Important
//Always write the default param should be at last 

// ======================= Default Parameters (undefined vs null) =======================

function add(a, b = 10) {
    return a + b;
}

let t1 = add(20);
console.log(t1); // 30 → b not passed, default value 10 used

let t2 = add(10, 40);
console.log(t2); // 50 → argument overrides default value

let t3 = add(5, undefined);
console.log(t3); // 15 → undefined triggers default value (b=10)

let t4 = add(5, null);
console.log(t4); // 5 → null is treated as a real value, not default
// a=5, b=null → 5 + null → 5 + 0 = 5

// Notes:
// - Default parameters provide fallback values when arguments are missing.
// - If no argument is passed → default value is used.
// - If 'undefined' is passed → default value is used (same as missing argument).
// - If 'null' is passed → default is NOT used, null is treated as 0 in numeric addition.
// - This difference is important for handling optional parameters safely.

// Key Takeaways:
// - Default parameters prevent 'undefined' issues.
// - undefined → triggers default.
// - null → overrides default, treated as 0 in numeric operations.
// - Always check whether you want to allow null as a valid input or fallback to default.

let t5 = add(5, NaN);
console.log(t5); // NaN
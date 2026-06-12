//Map Filter and Reduce : Very important 

// Difference between forEach, map, filter, and reduce :

/*
| Method      | Purpose                              | Return Value        | Mutates Array?  | Typical Use Case                  |
|-------------|--------------------------------------|---------------------|-----------------|-----------------------------------|
| forEach()   | Executes a function for each element | undefined           | ❌ No           | Logging, side effects             |
| map()       | Transforms each element              | New array           | ❌ No           | Convert values (double, uppercase)|
| filter()    | Selects elements by condition        | New array           | ❌ No           | Extract subset (evens, roles)     |
| reduce()    | Accumulates into single value        | Single value        | ❌ No           | Sum, product, aggregation         |
*/






//Map : 

// map() → accessor method
// Creates a new array populated with the results of calling a provided function 
// on every element in the original array.
// Does NOT change the original array.
// Commonly used for transformations.

// 📘 Syntax:
// array.map(function(element, index, array) { 
//     // return transformed element 
// });

//Example1:
let nums = [1, 2, 3, 4];
let doubled = nums.map(n => n * 2);
console.log(doubled); // [2, 4, 6, 8]
console.log(nums);    // [1, 2, 3, 4]

//Example2:
let words = ["mac", "iphone", "mouse"];
let upper = words.map(w => w.toUpperCase());
console.log(upper); // ["MAC", "IPHONE", "MOUSE"]
console.log(words);//[ 'mac', 'iphone', 'mouse' ]


//Example3:
let users = [
    { name: "Jag", role: "Tester" },
    { name: "Sam", role: "Developer" }
];

let roles = users.map(u => u.role);
console.log(roles); // ["Tester", "Developer"]
let names = users.map(u => u.name);
console.log(names); // [ 'Jag', 'Sam' ]


//Example4:
let arr = [10, 20, 30];
let withIndex = arr.map((val, idx) => `Index ${idx}: ${val}`);
console.log(withIndex); // ["Index 0: 10", "Index 1: 20", "Index 2: 30"]

console.log("==============================================");

// Filter :

// filter() → accessor method
// Creates a new array with all elements that pass the test implemented by the provided function.
// Does NOT change the original array.
// Commonly used for selection and filter from the existing array.

// 📘 Syntax:
// array.filter(function(element, index, array) { 
//     return condition; // true/false
// });

// Example1:
let numbers = [1, 2, 3, 4, 5, 6];
let evens = numbers.filter(n => n % 2 === 0);
console.log(numbers);//[ 1, 2, 3, 4, 5, 6 ]
console.log(evens); // [2, 4, 6]

// Example2:
let words = ["mac", "iphone", "mouse", "ipad"];
let longWords = words.filter(w => w.length > 3);
console.log(words);// [ 'mac', 'iphone', 'mouse', 'ipad' ]
console.log(longWords); // ["iphone", "mouse", "ipad"]

// Example3:
let users = [
    { name: "Jag", role: "Tester" },
    { name: "Sam", role: "Developer" },
    { name: "Ann", role: "Tester" }
];
let testers = users.filter(u => u.role === "Tester");
console.log(testers);
// [ { name: "Jag", role: "Tester" }, { name: "Ann", role: "Tester" } ]

//Example 4: 

// Filter + Map chaining example :

let cart = ["Apple macbook", "Apple iphone", "Canon", "Samsung Galxy", "Apple ipad"];

let finalProd = cart
    .filter(e => e.startsWith("Apple"))       // keep only items starting with "Apple"
    .filter(e => e.includes("ipad"))          // further filter to those containing "ipad"
    .map(e => e.replace("ipad", "iPadPro"));  // transform "ipad" → "iPadPro"

console.log(finalProd); // ["Apple iPadPro"]

console.log("======================================");

// Reduce :

// reduce() → accessor method
// Executes a reducer function on each element of the array, resulting in a single output value.
// Does NOT change the original array.
// Commonly used for accumulation (sum, product, aggregation).

// 📘 Syntax:
// array.reduce(function(accumulator, currentValue, index, array), initialValue);

// Example1 (sum):
let nums = [1, 2, 3, 4];
let sum = nums.reduce((sum, e) => sum + e, 0);
console.log(sum); // 10

//0 is the initial value of that sum ..if we give 2 will give take inital value as 2 
//its not necessary to give the inital value 


let num = [1, 2, 3, 4];
let sum = num.reduce((sum, e) => sum + e, 2);
console.log(sum); // 12 --Since initial value is 2



// Example2 (product):
let nums2 = [1, 2, 3, 4];
let product = nums2.reduce((mul, e) => mul * e, 1);
console.log(product); // 24

// Example3 (object aggregation):
let users = [
    { name: "Jag", role: "Tester" },
    { name: "Sam", role: "Developer" },
    { name: "Ann", role: "Tester" }
];
let roleCount = users.reduce((acc, u) => {
    acc[u.role] = (acc[u.role] || 0) + 1;
    return acc;
}, {});
console.log(roleCount); // { Tester: 2, Developer: 1 }

// Example4 (flatten array):
let nested = [[1, 2], [3, 4], [5]];
let flat = nested.reduce((acc, val) => acc.concat(val), []);
console.log(flat); // [1, 2, 3, 4, 5]


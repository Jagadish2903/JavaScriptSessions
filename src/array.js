// Arrays:
// Definition:
//    - An array is a collection of data stored in a single variable.
//    - Data could be similar or different 
//    - It can hold multiple values (strings, numbers, objects, etc.).
// Key Points:
//    - Index starts at 0 (first element).
//    - Length property gives total elements → arr.length.
//    - Elements can be added, removed, or updated.
// Syntax:
// Arrays: Indexing and Behavior

let arr = [10, 20, 30, 40];
let len = arr.length;

// Lowest index is always 0
console.log("lowest index is", 0); // 0

// Highest index = length - 1
console.log("highest index is", len - 1); // 3

// Length of the array
console.log("Length of the array is", len); // 4

// Range = 0 to 3 (for 4 elements)

// Important Examples:
console.log(arr[0]);  // Output: 10
console.log(arr[2]);  // Output: 30
console.log(arr[4]);  // undefined (index out of range)
console.log(arr[-1]); // undefined (negative index not valid)

// Updating values:
console.log(arr);     // [10, 20, 30, 40]
arr[2] = 50;          // update index 2
console.log(arr);     // [10, 20, 50, 40]

// Adding beyond current length:
arr[9] = 60;
console.log(arr);     // [10, 20, 50, 40, <5 empty items>, 60]

// Negative index assignment:
arr[-3] = -30;
console.log(arr);     // [10, 20, 50, 40, <5 empty items>, 60, '-3': -30]
//Note : Properties are always added at the last 

// Key Point:
// - Negative indices are treated as object keys, not array positions.
// - arr.length = 10 (does not count '-3' because length only considers numeric indices).
console.log(arr.length); // 10


arr[-1] = -10;
console.log(arr);//[ 10, 20, 50, 40, <5 empty items>, 60, '-3': -30, '-1': -10 ]
console.log(arr.length);//10

console.log(typeof arr); //Object
console.log(typeof null);//Object
console.log(typeof undefined);//Undefined


console.log(`-------------------------------------------------------`);



//Example 2: String type Array

let gadjets = ["ipad", "laptop", "mobile", "playstation"]
console.log(gadjets.length);//4
console.log(gadjets[0]);
console.log(typeof gadjets);//Object

console.log(`-------------------------------------------------------`);

//Example 3: Mixed type Array in javascript there is no Object type array 

let empdata = ["Lav", 35, 23.34, true]
console.log(empdata.length);//4
console.log(empdata[0]);//Lav
console.log(empdata[7]);//undefined

console.log(`-------------------------------------------------------`);

// Iterate over Array:


// For arrays, iteration is usually done with a for loop
// since the number of iterations (length) is known.

let number = [10, 20, 30, 40, 50];

for (let i = 0; i < number.length; i++) {
    console.log(number[i]);
}

console.log(`-------------------------------------------------------`);

//or we can also write as 

for (let i = 0; i <= number.length - 1; i++) {
    console.log(number[i]);
}
// Output: 10 20 30 40 50

// Key Points:
// - Initialization: let i = 0 → start at first index.
// - Condition: i < number.length → loop runs until last index.
// - Increment: i++ → moves to next index.
// - Access each element using number[i].

console.log(`-------------------------------------------------------`);

//Trying to print in reverse order : 
for (let i = number.length - 1; i >= 0; i--) {
    console.log(number[i]);
}

console.log(`-------------------------------------------------------`);


// Arrays: Negative Index Behavior

let pop = [20, 30, 40, 50];
pop[-3] = -30; // adds a property with key "-3", not a valid array index

for (let j = pop.length - 1; j >= -5; j--) {
    console.log(pop[j]);
}

// Output:
// 50
// 40
// 30
// 20
// undefined
// undefined
// -30
// undefined
// undefined

// Key Points:
// 1. Valid indices range from 0 to length - 1.
// 2. Accessing out-of-range indices returns undefined.
// 3. Negative indices are treated as object keys, not array positions.
//    - Example: pop[-3] = -30 creates a property { "-3": -30 }.
// 4. Array length only counts numeric indices (0 to highest valid index).
//    - pop.length = 4, even though "-3" exists as a property.
// 5. Iterating with negative indices usually gives undefined, unless explicitly set.

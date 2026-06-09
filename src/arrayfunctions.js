// ======================= Array Functions =======================
// Very Important for Playwright point



// ======================= Array Methods =======================

// Mutator Methods → directly change (mutate) the original array.
// Accessor Methods → do NOT change the original array, instead return new values.

/*
🔧 Mutator Methods (change the array)
------------------------------------
push()    → add element(s) to the end.
pop()     → remove last element.
unshift() → add element(s) to the beginning.
shift()   → remove first element.
splice()  → add/remove/replace elements at specific index.
sort()    → sort elements.
reverse() → reverse order of elements.

👉 Example:
let arr = ["mac", "iphone"];
arr.push("mouse");
console.log(arr); // ["mac", "iphone", "mouse"] → changed
*/

/*
📘 Accessor Methods (do not change the array)
--------------------------------------------
slice()    → returns a shallow copy.
concat()   → merges arrays, returns new one.
map()      → transforms each element, returns new array.
filter()   → returns elements that pass a condition.
reduce()   → reduces array to a single value.
find()     → returns first matching element.
includes() → returns boolean.
indexOf()  → returns index of first occurrence.
join()     → returns string of elements joined.

👉 Example:
let arr = ["mac", "iphone", "mouse"];
let r = arr.slice(1, 3);
console.log(r);   // ["iphone", "mouse"]
console.log(arr); // ["mac", "iphone", "mouse"] → unchanged
*/


// 1. Push - add an element to the end of the array
let num = [1, 2, 3, 4, 5];
console.log(num.length); // 5

// length is a property, not a method → no ()
// Arrays in JavaScript are objects, and 'length' is a defined property.

let r1 = num.push(6);
// push returns the new length of the array
console.log(num); // [1, 2, 3, 4, 5, 6]
console.log(r1);  // 6

console.log("=================================");


// 2. POP - Remove the last element from the array

let cart = ["mac", "iphone", "mouse", "pen"];
let r2 = cart.pop();

// pop returns the removed element
console.log(cart); // [ 'mac', 'iphone', 'mouse' ]
console.log(r2);   // pen

console.log("========================");


// 3. Unshift - add the element to the beginning of the array

let carts = ["mac", "iphone", "mouse", "pen"];
let r3 = carts.unshift("ipad");

// unshift returns the new length of the array
console.log(carts); // [ 'ipad', 'mac', 'iphone', 'mouse', 'pen' ]
console.log(r3);    // 5

console.log("=========================");


// 4. Shift - remove the element from the beginning of the array

let carts1 = ["mac", "iphone", "mouse", "pen"];
let r4 = carts1.shift();

// shift returns the removed element of the array
console.log(carts1); // [ 'iphone', 'mouse', 'pen' ]
console.log(r4);    // mac

console.log("===========================");

// 5. Splice - adds,remove,updates the element from the array at specific index

// Syntax:
// array.splice(start, deleteCount, item1, item2, ...)

// - start → index where changes begin
// - deleteCount → number of elements to remove
// - item1, item2, ... → elements to add at 'start' position


//Example : 
let cartB = ["mac", "iphone", "mouse", "pen"];
let rB = cartB.splice(0);
// start = 0 → first element
// deleteCount omitted → remove everything from index 0 to end
console.log(cartB); // []
console.log(rB);    // [ 'mac', 'iphone', 'mouse', 'pen' ]


// Example 1: Remove elements
let colors = ["red", "green", "blue", "yellow"];
let removed = colors.splice(1, 2);
// remove 2 elements starting at index 1
console.log(colors);  // [ 'red', 'yellow' ]
console.log(removed); // [ 'green', 'blue' ]

// Example 2: Add elements
let fruits = ["apple", "banana", "mango"];
fruits.splice(1, 0, "orange", "grapes");
// at index 1, remove 0, add "orange" & "grapes"
console.log(fruits); // [ 'apple', 'orange', 'grapes', 'banana', 'mango' ]

// Example 3: Replace elements
let nums = [10, 20, 30, 40];
nums.splice(2, 1, 99);
// at index 2, remove 1 element, insert 99
console.log(nums); // [10, 20, 99, 40]


//Example 4 : 
let items = ["mac", "iphone", "mouse", "pen"];
let r5 = items.splice(0, 0, "hi");

// splice(start, deleteCount, item1, item2, ...)
// start = 0 → begin at index 0
// deleteCount = 0 → remove nothing
// "hi" → insert at index 0

console.log(items); // [ 'hi', 'mac', 'iphone', 'mouse', 'pen' ]
console.log(r5);    // [] → no elements removed




console.log("==============================");

// ======================= Negative Index Examples =======================

let cartA = ["mac", "iphone", "mouse", "pen"];
let rA = cartA.splice(-1);
// start = -1 → last element
// deleteCount omitted → remove everything from index -1 to end
console.log(cartA); // [ 'mac', 'iphone', 'mouse' ]
console.log(rA);    // [ 'pen' ]



//Example 1:
// splice with -2 → second last element
let cart2 = ["mac", "iphone", "mouse", "pen"];
let r7 = cart2.splice(-2, 1);
console.log(cart2); // ["mac", "iphone", "pen"]
console.log(r7);    // ["mouse"]


//Example 2:
// splice(-2, 0, "tablet") → insert before second last
let cart3 = ["mac", "iphone", "mouse", "pen"];
cart3.splice(-2, 0, "tablet");
console.log(cart3); // ["mac", "iphone", "tablet", "mouse", "pen"]

//Example 3:
// splice(0, 0) → does nothing
let cart4 = ["mac", "iphone", "mouse", "pen"];
let r8 = cart4.splice(0, 0);
console.log(cart4); // ["mac", "iphone", "mouse", "pen"]
console.log(r8);    // []

console.log("========================================");


//6.  slice() - returns a shallow copy of a portion of an array
// IMPORTANT: slice does NOT mutate the original array

// Syntax:
// array.slice(start, end)
// - start → index to begin (inclusive)
// - end → index to stop (exclusive)
// - negative indexes → count from the end

// Example 1: Basic slice
let arr1 = ["mac", "iphone", "mouse", "pen"];
let b1 = arr1.slice(1, 3);
console.log(arr1); // [ 'mac', 'iphone', 'mouse', 'pen' ] → unchanged
console.log(b1);   // [ 'iphone', 'mouse' ]

// Example 2: Slice with only start
let arr2 = ["mac", "iphone", "mouse", "pen"];
let b2 = arr2.slice(2);
console.log(b2);   // [ 'mouse', 'pen' ]

// Example 3: Slice with negative start
let arr3 = ["mac", "iphone", "mouse", "pen"];
let b3 = arr3.slice(-2);
console.log(b3);   // [ 'mouse', 'pen' ]

// Example 4: Slice with negative start and end
let arr4 = ["mac", "iphone", "mouse", "pen"];
let b4 = arr4.slice(-3, -1);
// start = -3 → third last ("iphone")
// end = -1 → stop before last ("pen")
console.log(r4);   // [ 'iphone', 'mouse' ]

// Example 5: Copy entire array
let arr5 = ["mac", "iphone", "mouse", "pen"];
let b5 = arr5.slice();
console.log(r5);   // [ 'mac', 'iphone', 'mouse', 'pen' ]

//Example 6: 
let arr6 = ["mac", "iphone", "mouse", "pen"];
let b6 = arr6.slice(0);
console.log(arr6); // [ 'mac', 'iphone', 'mouse', 'pen' ]→ unchanged
console.log(b6);   // [ 'mac', 'iphone', 'mouse', 'pen' ]


console.log("=====================================");

// 7. reverse() → mutator method, reverses the order of elements in the array.
// IMPORTANT: reverse() changes the original array in place.

// Example 1

let ar = ["mac", "iphone", "mouse", "pen"];
let c1 = ar.reverse();

console.log(ar); // [ 'pen', 'mouse', 'iphone', 'mac' ] → original array changed
console.log(c1);  // [ 'pen', 'mouse', 'iphone', 'mac' ] → same array reference


//Example 2 (numbers)

let numsar = [1, 2, 3, 4, 5];
numsar.reverse();
console.log(numsar); // [5, 4, 3, 2, 1]


// Example 3 (with slice for copy)

let ar2 = ["mac", "iphone", "mouse"];
let c2 = ar2.slice().reverse();
// slice() makes a copy, reverse() applied on copy

console.log(ar2); // [ 'mac', 'iphone', 'mouse' ] → unchanged
console.log(c2);   // [ 'mouse', 'iphone', 'mac' ] → reversed copy

// 8. indexOf() → accessor method, returns the first index at which a given element
// can be found in the array, or -1 if it is not present.
// IMPORTANT: indexOf() does NOT change the original array.

// Example 1 (basic usage)

let brr = ["mac", "iphone", "mouse", "pen"];
let v1 = brr.indexOf("mouse");

console.log(v1);   // 2 → "mouse" is at index 2
console.log(arr);  // [ 'mac', 'iphone', 'mouse', 'pen' ] → unchanged


//Example 2 (element not found)

let brr2 = ["mac", "iphone", "mouse"];
let v2 = brr2.indexOf("tablet");

console.log(v2);   // -1 → "tablet" not found


//Example 3 (with fromIndex)
//Syntax: indexOf(searchElement, fromIndex)

let brr3 = ["mac", "iphone", "mouse", "iphone"];
let v3 = brr3.indexOf("iphone", 2);
// search starts at index 2 : syntax is starting from index 

console.log(v3);   // 3 → finds "iphone" at index 3


//Example 4 (negative fromIndex)

let brr4 = ["mac", "iphone", "pen", "mouse", "pen"];
let v4 = brr4.indexOf("pen", -2);
//If fromIndex is negative, JavaScript interprets it as length + fromIndex.

//Here: length = 5, fromIndex = -2 → 5 + (-2) = 3.

console.log(v4);   // 4 → "pen" found at index 4

//Example 5 : Using Formula
let crr = ["mac", "iphone", "mouse", "iphone", "pen"];
let n1 = crr.indexOf("iphone");
console.log(n1); // 1 → returns always the first occurrence only

//To Get the Second Occurance : using a formula 
let n2 = crr.indexOf("iphone", n1 + 1);
console.log(n2);//3
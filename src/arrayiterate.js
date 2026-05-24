// Arrays: Iteration Examples

let products = ["macbook", "ipad", "iphone", "laptop", "Tv"];

console.log(products);

console.log("==================================================");

// 1. Iterate using Index (for loop)
for (let i = 0; i <= products.length - 1; i++) {
    console.log(products[i]);
    // Condition inside loop
    if (products[i] === "iphone") {
        console.log(`Found the Product..${products[i]}`);
        break;
    }
}
//Output: 
// macbook
// ipad
// iphone
// Found the Product..iphone

// - Works with indexes (0 to length-1).
// - Best when you need index access or partial iteration.
// - Break stops the loop once condition is met.

console.log("==================================================");

// 2. Iterate using for...of loop
for (let e of products) {
    console.log(e);
    if (e === "iphone") {
        console.log(`Found the product...${e}`);
        break;
    }
}
//Output : 
// macbook
// ipad
// iphone
// Found the product...iphone

// - for...of works directly on values.
// - Cleaner syntax when index is not needed.
//Note : Properties will not be printed {Example. products[-1]="pen"...and will not be printed}

console.log("==================================================");

// 3. Iterate using for...in loop
for (let e in products) {
    console.log(products[e]);
}

//Output: 
// macbook
// ipad
// iphone
// laptop
// Tv

console.log("==================================================");

//TO print along with index 
for (let e in products) {
    console.log(e, "=", products[e]);
}
//Output : 
// 0 = macbook
// 1 = ipad
// 2 = iphone
// 3 = laptop
// 4 = Tv

// - for...in works on indexes (keys).
// - Must use products[e] to access values.
// - Typically used for objects, less common for arrays.

console.log("==================================================");

// 4. Print in Reverse Order (for loop)
for (let j = products.length - 1; j >= 0; j--) {
    console.log(products[j]);
}

//Output :
// Tv
// laptop
// iphone
// ipad
// macbook
// - Reverse iteration using index.
// - Useful for countdowns or reverse traversal.

console.log("==================================================");

//Using For of loop to print in reverse order 
//Introduce the new variable 

let count = products.length - 1;
for (let e of products) {
    console.log(products[count]);
    count--;
}

console.log("==================================================");
//Note there is a glitch in this ...No use of e in this 
//To still make use of this e we can do again like below that is adding e = counts
//But still its not recommended 

let counts = products.length - 1;
for (let e of products) {
    e = counts;
    console.log(products[e]);
    counts--;
}




//Note: For in Loop is specifically designed for Objects

// Summary Notes:
// - for loop → index control, partial traversal, reverse iteration.
// - for...of → clean value iteration, best for full traversal.
// - for...in → keys (indexes/props), mainly for objects.
// - Reverse iteration → most reliable with classic for loop.
// - For...of reverse workarounds exist but are not recommended.

// Use Cases Recap:
// - UI Automation: iterate dropdowns, lists of elements.
// - API Automation: loop through payloads, IDs, or response arrays.
// - General: search, validation, reverse printing, object property traversal.
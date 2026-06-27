//  Async & Await in JavaScript

//  Concept:
// - Async/Await is syntax built on top of Promises.
// - It helps avoid "callback hell" and long .then() chains.
// - Makes asynchronous code look synchronous (step-by-step).

//  async keyword:
// - Used with functions.
// - Declares that the function will always return a Promise. (whether we write return promise or not ...by default its returning promise)
// - Even if you return a simple value, it is wrapped in Promise.resolve().

//  await keyword:
// - Used inside async functions.
// - Pauses execution until the Promise resolves.
// - Makes code easier to read compared to nested .then() calls.



//Sumamry: 
//If a Function is written with async -> always written a promise -> so call it with await
//if a function is returning a promise -> call it with await 
//we should not write await without an async function 
//async function -> its not mandoatry to write await step --> but it always retunn a promise 
//if in a function has await steps then the function should be async    


async function print() {
    console.log("Printing");
}
print();
// Hover shows: Promise<void>
// Because async functions return a Promise automatically.

// -----------------------------

async function getNumber() {
    return 200;
}
let t1 = getNumber();
// Hover shows: Promise<number>
// Without async, it would just return a number directly.

console.log(t1);
// Output: Promise { 200 }
//  Printing directly shows the Promise object, not the resolved value.

// -----------------------------

//  Correct way: use .then() to handle the resolved value
getNumber().then((result) => { console.log(result); }); // 200

// -----------------------------

//  Cleaner way: use await
// Await pauses execution until the Promise resolves.
// Must be inside an async function.

async function demo() {
    let t2 = await getNumber();
    console.log(t2); // 200
}
demo();

// -----------------------------

//  Notes:
// - Async functions always return Promises (Promise<T>).
// - Await can only be used inside async functions.
// - To consume async results, use either:
//   → .then() / .catch()
//   → await (preferred for readability)
// - Errors can be handled with try/catch in async functions.
//
//  Takeaway:
// Whenever a function is async, you must consume its result
// using .then()/.catch() OR await — never by directly logging the Promise.


console.log("=========================================");

//Example.2

function getUser() {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(
                {
                    "name": "jaga",
                    "age": 23
                }
            )
        }, 2000);
    })
}


let u1 = await getUser();
console.log(u1);//{ name: 'jaga', age: 23 }



//Example for Cofee Machine :

function startMachine() {
    return new Promise((resolve) => {
        setTimeout(() => {
            console.log("Machine started");
            resolve();
        }, 2000);
    });
}

function boilWater() {
    return new Promise((resolve) => {
        setTimeout(() => {
            console.log("Water Boiled");
            resolve();
        }, 3000);
    });
}

function addCoffeePowder() {
    return new Promise((resolve) => {
        setTimeout(() => {
            console.log("Coffee Powder Added");
            resolve();
        }, 4000);
    });
}

function pourInCup() {
    return new Promise((resolve) => {
        setTimeout(() => {
            console.log("Poured in Cup");
            resolve();
        }, 2000);
    });
}

function serveCoffee() {
    return new Promise((resolve) => {
        setTimeout(() => {
            console.log("Coffee Served");
            resolve();
        }, 2000);
    });
}


//all the above function is returning the promises so using awaits 


//  Concept:
// - All functions return Promises (startMachine, boilWater, etc.).
// - Async/Await lets us write asynchronous code in a synchronous style.
// - Each await pauses until the Promise resolves, then continues.

async function prepareCoffee() {
    await startMachine();      // waits 2s → "Machine started"
    await boilWater();         // waits 3s → "Water Boiled"
    await addCoffeePowder();   // waits 4s → "Coffee Powder Added"
    await pourInCup();         // waits 2s → "Poured in Cup"
    await serveCoffee();       // waits 2s → "Coffee Served"
    console.log("☕ Coffee Served ..Enjoy it");
}

prepareCoffee();

//  Notes:
// - async functions always return Promises.
// - await can only be used inside async functions.
// - Each await ensures sequential execution (step-by-step).
// - Errors can be handled with try/catch instead of .catch():
//
//   async function prepareCoffeeSafely() {
//       try {
//           await startMachine();
//           await boilWater();
//           await addCoffeePowder();
//           await pourInCup();
//           await serveCoffee();
//           console.log("Coffee Served ..Enjoy it");
//       } catch (error) {
//           console.error("❌ Coffee preparation failed:", error);
//       }
//   }
//
//  Takeaway:
// - Async/Await makes code cleaner and easier to read.
// - It avoids nested .then() chains.
// - Perfect for workflows like coffee preparation where steps must happen in order.


// 📘 Callback Hell → Promises → Async/Await

// 🔎 Callback Hell
// - Nested callbacks for async tasks.
// - Leads to "Pyramid of Doom" → deeply indented, hard to read.
// Example:
function makeCoffeeCallback() {
    startMachine(() => {
        boilWater(() => {
            addCoffeePowder(() => {
                pourInCup(() => {
                    serveCoffee(() => {
                        console.log("☕ Coffee Served (Callback Hell)");
                    });
                });
            });
        });
    });
}

// 🔎 Promises with .then()
// - Each async step returns a Promise.
// - Chain with .then() to flatten callbacks.
// - Easier to read, but long chains can still look messy.
startMachine()
    .then(() => boilWater())
    .then(() => addCoffeePowder())
    .then(() => pourInCup())
    .then(() => serveCoffee())
    .then(() => console.log("☕ Coffee Served (Promise Chain)"));

// 🔎 Async & Await
// - Syntax sugar built on Promises.
// - Makes async code look synchronous.
// - Each await pauses until the Promise resolves.
// - Cleaner, step-by-step style.
async function prepareCoffee1() {
    await startMachine();
    await boilWater();
    await addCoffeePowder();
    await pourInCup();
    await serveCoffee();
    console.log("☕ Coffee Served (Async/Await)");
}
prepareCoffee1();

// 📝 Notes:
// - Callback Hell → deeply nested, hard to maintain.
// - Promises → flatten callbacks, better error handling with .catch().
// - Async/Await → most readable, avoids chaining, uses try/catch for errors.
// - All three are valid, but Async/Await is the modern best practice.


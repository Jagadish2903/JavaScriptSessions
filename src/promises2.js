//  Coffee Machine Example using Promises

//  Each function simulates a step in making coffee.
//    - Returns a Promise
//    - Uses setTimeout() to mimic delay
//    - Calls resolve() when done

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

// 📝 Notes:
// - resolve() is mandatory → signals completion
// - reject() is optional → used only if error handling is needed
// - First parameter is always resolve, second is reject
// - Promises make async code easier to read than callbacks

// 🔗 Sequential chaining with .then():
startMachine()
    .then(() => boilWater()
        .then(() => addCoffeePowder()
            .then(() => pourInCup()
                .then(() => serveCoffee()
                    .then(() => console.log("Coffee Served Enjoy..."))))));

//  Compared to callbacks, Promises are cleaner.
//    Modern JavaScript improves readability further with async/await:

console.log("======================");



//  Promise.resolve() and Promise.reject() Examples

//  Promise.resolve(value)
// - Creates a Promise that is immediately fulfilled with the given value.
// - Useful for wrapping synchronous values into a Promise chain.
// - Always resolves successfully.

function getNumber() {
    return Promise.resolve(100); // instantly resolves with 100
}

getNumber().then((result) => {
    console.log(result); // 100
});

console.log("=========================================");

//  Promise.reject(reason)
// - Creates a Promise that is immediately rejected with the given reason (error message).
// - Useful for testing error handling logic.
// - Always rejects.

function getError() {
    return Promise.reject("Hello this is my error"); // instantly rejects
}

getError().catch((result) => {
    console.log(result); // Hello this is my error
});

//  Notes:
// - Promise.resolve() → shortcut for creating a fulfilled Promise.
// - Promise.reject() → shortcut for creating a rejected Promise.
// - These are static methods on the Promise object.
// - They are often used in testing, or when you need a Promise interface
//   but already have a value or error ready.
// - .then() handles resolved values, .catch() handles rejected values.




//  Quiz Example – Promise Constructor Parameters

function getPizza() {
    return new Promise((reject) => {
        reject("Hello");
    });
}

getPizza().then((result) => {
    console.log(result); // "Hello"
});

//  Notes:
// - The Promise constructor always expects two parameters: (resolve, reject).
//   → resolve = fulfill the promise
//   → reject  = reject the promise
//
// - In this example, only ONE parameter is declared.
//   → Whatever you name it (here "reject"), it is actually the FIRST parameter.
//   → The first parameter is always resolve.
//   → So calling reject("Hello") is actually calling resolve("Hello").
//
// - That’s why the promise is fulfilled with "Hello"
//   and .then() receives the value.
//
// - If you want to truly reject, you must declare both parameters:
//
//   function getPizza() {
//       return new Promise((resolve, reject) => {
//           reject("Error: Pizza machine broken");
//       });
//   }
//
//   getPizza()
//     .then(result => console.log(result))   // not called
//     .catch(error => console.log(error));   // "Error: Pizza machine broken"
//
//  Takeaway:
// - Parameter names are positional, not fixed.
// - First param → resolve (fulfill).
// - Second param → reject (error).
// - If you declare only one, it will always be resolve, no matter what you name it.

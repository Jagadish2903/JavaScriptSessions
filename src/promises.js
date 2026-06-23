//  Promises – Notes

/* Definition:
- A Promise is an object representing the eventual completion (fulfilled) or failure (rejected) of an asynchronous operation.
- Think of it as: "I promise you something, but it may be fulfilled or rejected later."

States of a Promise:
1. Pending   → Initial state, not yet fulfilled or rejected.
2. Fulfilled → Operation completed successfully, returns a value/resource.
3. Rejected  → Operation failed, returns an error.
*/

//  Syntax Example (Pizza Order)
let pizzaPromise = new Promise((resolve, reject) => {
    let success = true;
    if (success) {
        resolve("Pizza is getting Ready as per the order ...will deliver(return back)");
    } else {
        reject("No Delivery Boy available..");
    }
});

// Three methods available after the promise reference:
// 1. then    → runs when promise is resolved
// 2. catch   → runs when promise is rejected
// 3. finally → runs always (either resolved or rejected)

pizzaPromise
    .then((result) => {
        console.log(result);   // fulfilled
    })
    .catch((reason) => {
        console.log(reason);   // rejected
    })
    .finally(() => {
        console.log("Thanks for Ordering"); // always runs
    });

/*  Key Points:
- Promises flatten nested callbacks → cleaner code.
- .then() handles success, .catch() handles errors.
- .finally() executes regardless of outcome.
- Helps avoid "Callback Hell" (Pyramid of Doom).
*/


console.log("========================================================");

//Example 2 : 

function getUserData(userID) {
    return new Promise((resolve, reject) => {
        console.log("Getting User Data for the user with id..", userID);
        setTimeout(() => {
            if (userID <= 0) {
                console.log("Invalid UserID");
            } else {
                let user = {
                    id: userID,
                    name: "jaga",
                    age: 30
                }
                resolve(user);
            }
        }, 4000);
    });
}


getUserData(100).then((user) => {
    console.log(user);
}).catch((error) => {
    console.log("No User Found");
}).finally(() => {
    console.log("Close the Db Connection...");
})
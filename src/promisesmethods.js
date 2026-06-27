// 1. Promise.all() – Fail Fast Behavior

//  Concept:
// - Runs multiple Promises in parallel.
// - Resolves when ALL Promises succeed.
// - Rejects immediately if ANY Promise fails.
// - Returns results in the same order as input.
// - Known as "fail fast" → stops at the first rejection.

function getNumber() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(20); // success
        }, 2000);
    });
}

function getPetName() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            reject("Bruno"); // failure
        }, 4000);
    });
}

function getMomName() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            reject("Usha"); // failure
        }, 4000);
    });
}

//  Using Promise.all()
Promise.all([getNumber(), getPetName(), getMomName()])
    .then((result) => {
        console.log(result);
        // Only runs if ALL succeed
    })
    .catch((error) => {
        console.log(error);
        //  Prints the FIRST rejection
        // Output: "Bruno" (since getPetName fails first)
    });

//  Notes:
// - If all Promises resolve → returns array of values. [ 20, 'Bruno', 'Usha' ]
// - If one rejects → immediately rejects with that error. Usha
// - If multiple fail → only the first rejection is reported. Bruno
// - If multiple fail with same timeout → whichever is first in sequence wins. Bruno
// - Useful when ALL results are required (e.g., load config, fetch data).
// - For collecting both success and failure results, use Promise.allSettled().



//2.Promise.race()
//  Promise.race() Example

//  Concept:
// - Runs multiple Promises in parallel.
// - Resolves/rejects as soon as the FIRST Promise settles (fulfilled or rejected).
// - Ignores the rest once the first one finishes.
// - Useful for timeouts or picking the fastest response.

function fastTask() {
    return new Promise(reject => {
        setTimeout(() => reject(" Fast task done"), 1000);
    });
}

function slowTask() {
    return new Promise(resolve => {
        setTimeout(() => resolve(" Slow task done"), 3000);
    });
}

function errorTask() {
    return new Promise((_, reject) => {
        setTimeout(() => reject("404 Error task failed"), 2000);
    });
}

//  Using Promise.race()
Promise.race([fastTask(), slowTask(), errorTask()])
    .then(result => {
        console.log("Winner:", result);
        // Output after ~1s: "Winner: Fast task done"
    })
    .catch(error => {
        console.error("Race failed:", error);
        // If the first settled promise rejects, this runs.
    });

//  Notes:
// - Promise.race() settles as soon as ANY promise settles (resolve or reject).
// - The "winner" is whichever finishes first.
// - Common use case: implement timeouts.
//   Example: Promise.race([fetchData(), timeoutPromise()])
// - Unlike Promise.all(), it does not wait for all tasks.
// - Unlike Promise.any(), it does not ignore rejections — first reject wins.



//3.Promises.allSettled()
//  Promise.allSettled() Example

//  Concept:
// - Runs multiple Promises in parallel.
// - Waits until ALL Promises settle (fulfilled or rejected).
// - Returns an array of result objects → each has { status, value } or { status, reason }.
// - Never rejects → always resolves with the full results array.
// - Useful when you want both successes and failures.

function getNumber1() {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(20); // success
        }, 2000);
    });
}

function getPetName1() {
    return new Promise((_, reject) => {
        setTimeout(() => {
            reject("Bruno"); // failure
        }, 4000);
    });
}

function getMomName1() {
    return new Promise((_, reject) => {
        setTimeout(() => {
            reject("Usha"); // failure
        }, 4000);
    });
}

//  Using Promise.allSettled()
Promise.allSettled([getNumber1(), getPetName1(), getMomName1()])
    .then((results) => {
        console.log(results);
        /*
        Output after ~4s:
        [
          { status: "fulfilled", value: 20 },
          { status: "rejected", reason: "Bruno" },
          { status: "rejected", reason: "Usha" }
        ]
        */
    });

//  Notes:
// - Unlike Promise.all(), it does not "fail fast".
// - Always waits for ALL promises to finish.
// - Each result object tells you whether it was fulfilled or rejected.
// - Best for scenarios where you need a complete report of outcomes
//   (e.g., batch operations, multiple API calls).
// - Compare:
//   → Promise.all() → stops at first rejection.
//   → Promise.allSettled() → collects everything, success + failure.



//4.Promise.any()

//  Promise.any() Example

//  Concept:
// - Runs multiple Promises in parallel.
// - Resolves as soon as the FIRST Promise fulfills (ignores rejections).
// - Rejects only if ALL Promises reject.
// - Returns the value of the first fulfilled Promise.
// - Useful when you want the first successful result, no matter which one.

function getPetName2() {
    return new Promise((resolve) => {
        setTimeout(() => resolve(" Pet name failed"), 2000);
    });
}

function getMomName2() {
    return new Promise((_, reject) => {
        setTimeout(() => reject(" Mom name failed"), 3000);
    });
}

function getNumber2() {
    return new Promise((_, reject) => {
        setTimeout(() => reject(20), 4000);
    });
}

// Using Promise.any()
Promise.any([getPetName2(), getMomName2(), getNumber2()])
    .then(result => {
        console.log("First success:", result);
        // Output after ~4s: "First success: 20"
    })
    .catch(error => {
        console.error("All failed:", error);
        // If ALL reject, error is an AggregateError
    });

//  Notes:
// - Ignores rejected Promises until one fulfills.
// - If all reject → throws AggregateError with all rejection reasons. ..All failed: [AggregateError: All promises were rejected] {
// [errors]: [ ' Pet name failed', ' Mom name failed', 20 ]}
// - Best for scenarios where you only need ONE successful result
//   (e.g., multiple backup servers, fastest API that succeeds).



// - Compare:
//   → Promise.all() → waits for all, fails fast.
//   → Promise.race() → first settle wins (resolve OR reject).
//   → Promise.any() → first fulfill wins (ignores rejects).
//   → Promise.allSettled() → collects all outcomes.



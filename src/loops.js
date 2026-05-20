// Loops :
//
// 1. Purpose:
//    Loops are used to perform repetitive tasks efficiently.
//    Instead of writing console.log multiple times, a loop automates repetition.
//
// 2. Example: Print numbers from 1 to 100
for (let i = 1; i <= 100; i++) {
    console.log(i);
}
//
// 3. Types of Loops:
//    - for loop: Best for known iteration counts.
//    - while loop: Runs until a condition becomes false.
//    - do-while loop: Executes at least once, then repeats while condition is true.
//    - for...of loop: Iterates over iterable objects (arrays, strings).
//    - for...in loop: Iterates over object properties.
//
// 4. Advantages:
//    - Reduces repetitive code.
//    - Improves readability and maintainability.
//    - Makes programs scalable (easy to extend to larger ranges).
//
// 5. Best Practices:
//    - Always ensure loop termination conditions are correct to avoid infinite loops.
//    - Use descriptive variable names (e.g., i, index, counter).
//    - Choose the right loop type based on the scenario.


// While Loop:
//
// 1. Definition:
//    A while loop runs repeatedly as long as the given condition evaluates to true.
//
// 2. Example:
let i = 1;
while (i <= 10) {
    console.log(i);
    i++;
}
// Output: 1 2 3 4 5 6 7 8 9 10
//
// 3. Key Points:
//    - Initialization: i = 1
//    - Condition: i <= 10
//    - Increment: i++ ensures the loop progresses and eventually stops.
//
// 4. Infinite Loop Risk:
//    - If the increment (i++) or (++i) or (i=i+1) is missing, the condition (i <= 10) will always be true.
//    - This causes an infinite loop, printing "1" endlessly in the console.
//    - Always ensure loop variables are updated inside the loop.
//
// 5. Best Practices:
//    - Use while loops when the number of iterations is not known in advance.
//    - Ensure termination conditions are correct to avoid infinite loops.
//    - For known iteration counts, prefer a for loop.
//
// 6. Variants:
//    - do-while loop: Executes at least once before checking the condition.
//    - while loop: Checks condition first, may not run at all if false.
//
// 7. Use Cases:
//    UI Automation:
//    - Waiting for element visibility → while(!element.isDisplayed()) { wait(); }
//    - Polling until a button becomes enabled.
//    - Checking dynamic page loads until a condition is met.
//    - Retrying login until captcha is solved.
//
//    API Automation:
//    - Retrying API calls until success or max attempts.
//    - Polling an endpoint until status changes (e.g., order status = "Completed").
//    - Reading paginated API responses until no more pages.
//    - Validating queue processing until empty.
//    - Waiting for async job completion (while job.status !== "done").


// Example 2:
while (true) {
    console.log("hi");
    break;
}
// Output: hi
// - Writing true/false directly in the condition is not recommended; use meaningful conditions instead.


// Example 3 : 
// Print 10 to 1 
let j = 10;
while (j >= 1) {
    console.log(j);
    j--;
}
// Output: 10 9 8 7 6 5 4 3 2 1
// - Countdown loop, useful for reverse iteration or timer-like scenarios.


// Example 4: 
// Adding a conditional statement inside loop 
let l = 1;
while (l <= 10) {
    console.log(l);
    if (l % 2 == 0) {
        console.log("hi");
    }
    l++;
}
// Output: 1 2 hi 3 4 hi 5 6 hi 7 8 hi 9 10 hi


// Example 5 : 
// Adding a conditional statement inside loop with Break 
let c = 1;
while (c <= 10) {
    console.log(c);
    if (c % 2 == 0) {
        console.log("hi");
        break;
    }
    c++;
}
// Output: 1 2 hi
//
// Break will break this entire loop, not only the condition.
// Key Points:
//    - Loop starts at c = 1 and runs while c <= 10.
//    - Prints each value of c.
//    - When c is even (first time at c = 2), it prints "hi" and then break exits the loop.
//    - The loop stops immediately after break, so only 1, 2, hi are printed.
//
// Use Cases in Automation:
//    - UI Automation: stop checking once a required element is found (e.g., scanning a dropdown list or links, click the match, then break).
//    - API Automation: exit polling once a desired status is reached.
//    - General: terminate loops early when a condition is satisfied.


// For Loop : 
// 1. Definition:
//    A for loop is used when the number of iterations is known in advance.
//    It has three parts: initialization, condition, and increment/decrement.
//
// 2. Syntax:
for (initialization; condition; increment / decrement) {
    // code to execute
}

// 3. Example: Print 1 to 10
for (let i = 1; i <= 10; i++) {
    console.log(i);
}
// Output: 1 2 3 4 5 6 7 8 9 10
//
// 4. Key Points:
//    - Initialization: let i = 1 → sets starting point.
//    - Condition: i <= 10 → loop runs while true.
//    - Increment: i++ → updates loop variable each iteration.
//    - Loop stops when condition becomes false.
//
// 5. Advantages:
//    - Best for fixed iteration counts.
//    - Compact syntax (all loop control in one line).
//    - Easier to read and maintain compared to while loops.
//
// 6. Use Cases in Automation:
//
//    UI Automation:
//    - Iterate through dropdown options and select each one.
//    - Loop through a list of links or buttons to validate navigation.
//    - Perform repeated actions like clicking multiple checkboxes.
//
//    API Automation:
//    - Send multiple requests with different payloads (e.g., 10 test cases).
//    - Validate response fields across a fixed set of IDs.
//    - Execute batch testing for known datasets.
//
// 7. Best Practices:
//    - Use descriptive loop variables (e.g., index, counter).
//    - Keep loop body simple and focused.
//    - For dynamic conditions, prefer while/do-while loops.



//Important : 
for (; ;) {
    console.log("welcome");
}
//it will print the welcome as infinite loop ...


// When to Use For vs While:

// For Loop:
// - Use when the number of iterations is known in advance.
// - Best for fixed ranges or datasets.
// - Example (UI Automation): iterate through all dropdown options, Month dropdown , Footer Links , Menu Items
// - Example (API Automation): send 10 requests with different payloads.

// While Loop:
// - Use when the number of iterations is unknown and depends on a condition.
// - Best for waiting, polling, or retry logic.
// - Example (UI Automation): wait until a button becomes enabled, Webtable Pagination , wait for page loading
// - Example (API Automation): poll an endpoint until status = "Completed".
//
// Quick Rule:
// - Known count → for loop
// - Unknown count → while loop





// Do-While Loop:



//
// 1. Definition:
//    - Executes the statement block at least once.
//    - After the first execution, it checks the condition.
//    - If the condition is true, it continues; otherwise, it stops.
//
// 2. Syntax:
do {
    // code to execute
} while (condition);

// 3. Example: Print 1 to 5
let k = 1;
do {
    console.log(k);
    k++;
} while (k <= 5);
// Output: 1 2 3 4 5
//
// 4. Key Points:
//    - Guaranteed to run once, even if the condition is false initially.
//    - Useful when you need at least one execution before checking the condition.
//
// 5. Use Cases in Automation:
//    - UI Automation: attempt login at least once, then retry while captcha persists.
//    - API Automation: send a request at least once, then repeat until status changes.
//    - General: ensure minimum one execution (e.g., prompt user input, retry logic).

//Example 2. 
let x = 10;
do {
    console.log(x);
    x--;
} while (x >= 1)
//Output: 10 9 8 7 6 5 4 3 2 1

//Example 3: 
let y = 1;
do {
    y++;
    console.log(y);
} while (y <= 10)

//Output:
//2 3 4 5 6 7 8 9 10 11 


//Example 4 
let u = 1;
do {
    u++;
    console.log(u);
    u++;
} while (u <= 10);

//Output : 2 4 6 8 10

//Example 5
let t = 1;
do {
    console.log(t);
    t++;
} while (t <= 5)
t++;

//Note : It wont reach t++ which is after the while so it will execute and give output as 12345

//Example 6
let r = 1;
do {
    console.log(r);
    r = r + 2;
} while (r <= 10)


//Example 7 with break 
let r = 1;
do {
    console.log(r);
    r = r + 2;
    break;
} while (r <= 10)

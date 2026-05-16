//print or execute the statement or code only if condition is met 
//


//if 
let age = 18;
if (age >= 18) {
    console.log("eligible of voting");
}


//if-else
let ag = 19;
if (ag >= 20) {
    console.log("eligible of drinking");
} else {
    console.log("not eligible for drinking");
}

//Always a standard way of writing the conditional statement is using the if statement 
//with else block 

//Dead Code : 
if (true) {
    console.log("hi");
} else {
    console.log('bye');
}

//in the above code else block becomes dead/unreachable code since if condition is aleays true 
//its a bad approach so correct way is always declare a variable abd based on that output go with if-else 

//example
let isActive = true;
if (isActive) {
    console.log("Hi");
} else {
    console.log("bye");
}
//in above code you can see it is depended on isactive variable 


let browser1 = "chrome";

if (browser1 === "chrome") {
    console.log("launch Chrome");
} if (browser1 === "firefox") {
    console.log("launch Firefox");
} if (browser1 === "safari") {
    console.log("launch Safari");
} else {
    console.log("please pass correct browser");
}

//Output:
//launch Chrome
//please pass correct browser


// In the above code, the condition for Chrome is checked first. 
// Since it evaluates to true, Chrome is launched. 
// After that, the Firefox condition is checked, followed by Safari. 
// Because the Safari condition is not satisfied, the program executes the else block 
// and prints "Please pass correct browser." 
// This approach is inefficient because it unnecessarily evaluates all conditions. 
// If the number of conditions grows, it can lead to performance issues. 
// Instead, the logic should be structured to stop checking once a valid condition is met.


// Note: The 'break' statement cannot be used directly within if or if-else blocks. 
// It only works inside loops (such as for, while, or do-while). 
// Within conditional blocks, execution simply flows based on the condition outcome 
// without the ability to break out unless the block itself is inside a loop.

//Now using ifelse 
let browser2 = "chrome";

if (browser2 === "chrome") {
    console.log("launch Chrome");
}
else if (browser2 === "firefox") {
    console.log("launch Firefox");
}
else if (browser2 === "safari") {
    console.log("launch Safari");
} else {
    console.log("please pass correct browser");
}



// Using if-else eliminates the earlier bug of multiple outputs,
// but the structure still evaluates conditions sequentially.
// Even when the first condition is satisfied, the program continues
// to check the remaining ones. With many conditions, this approach
// can become inefficient and impact performance.



//Switch Case


// To address the performance issue, we can use a switch-case statement.
// This approach avoids repeatedly checking every condition and directly 
// executes the matching case, making the code more efficient and scalable.



let browser3 = "Chrome";
switch (browser3.toLowerCase()) {
    case "chrome":
        console.log("launching Chrome");
        break;
    case "firefox":
        console.log("launching Firefox");
        break;
    case "safari":
        console.log("launching Safari");
        break;

    default:
        console.log("Invalid Browser..Please Pass the Correct browser to Proceed...");
        break;
}

// This program checks the value of the 'browser' variable using a switch-case statement.
// The value is converted to lowercase to avoid case sensitivity issues.
// Based on the matching case, it prints which browser is being launched.
// If no case matches, the default block runs and prints an error message.
// Note: The 'break' statement is essential after each case. Without it, execution will continue 
// into the next case (known as "fall-through"), causing unintended outputs.

let browser4 = "Safari";
switch (browser4.toLowerCase()) {
    case "chrome":
        console.log("launching Chrome");
        break;
    case "firefox":
        console.log("launching Firefox");
        break;
    case "safari":
        console.log("launching Safari");

    default:
        console.log("Invalid Browser..Please Pass the Correct browser to Proceed...");
        break;
}


//Note : it will not check all the condition it will start to check the safari conndition directly based on the key
//and then since break is not present it will go to default as well

// Output:
// launching Safari
// Invalid Browser..Please Pass the Correct browser to Proceed...
//
// Explanation:
// In a switch-case, execution jumps directly to the matching case (here "safari").
// Since the 'break' statement is missing, the program continues into the next block
// (the default case), which causes both messages to be printed.
// This behavior is called "fall-through" and shows why 'break' is important
// to stop execution after a matching case.


let browser5 = "IE";
switch (browser5.toLowerCase()) {
    case "chrome":
        console.log("launching Chrome");
        break;
    case "firefox":
        console.log("launching Firefox");
        break;
    case "safari":
        console.log("launching Safari");
        break
    default:
        console.log("Invalid Browser..Please Pass the Correct browser to Proceed...");

}

// Note: If 'break' is not added after the default case, 
// there is no functional difference because default is always the last block. 
// Execution ends naturally after default since there are no further cases to fall into. 
// However, adding 'break' after default is considered good practice for consistency 
// and to avoid confusion when reading or maintaining the code.



let browser6 = "IE";
switch (browser6.toLowerCase()) {
    case "chrome":
        console.log("launching Chrome");
        break;
    case "firefox":
        console.log("launching Firefox");
        break;
    case "safari":
        console.log("launching Safari");
        break;
    default:
        console.log("Invalid Browser..Please Pass the Correct browser to Proceed...");

    case "brave":
        console.log("Launching Brave");
        break;
}

// Note:
// In this switch-case, the 'default' block is not the last one —
// it appears before the "brave" case. Since there is no 'break'
// after default, execution will fall through into the "brave" case
// whenever default runs.
// This means if the browser is not chrome, firefox, or safari,
// the program will print both the default message and "Launching Brave".
// Normally, default is placed last to avoid this kind of fall-through and it is recommended



// Use Cases for Switch Case:
//
// 1. Cross Browser Logic
//    Example: Launching different browsers (Chrome, Firefox, Safari, Brave)
//    based on user input. Switch-case avoids multiple if-else checks.
//
// 2. Multiple Environment Handling
//    Example: Switching between environments like DEV, QA, STAGE, PROD.
//    Each case can load specific configurations or endpoints.
//
// 3. Multi-User Application (SPOC, Tenant)
//    Example: Handling different user roles (Admin, Tenant, SPOC).
//    Each case executes role-specific logic cleanly.
//
// 4. Localization Testing
//    Example: Switching language packs (English, Spanish, Arabic).
//    Each case loads localized strings or resources for testing.
//
// 5. HTTP Status Codes
//    Example: Mapping status codes (200, 400, 404, 500).
//    Each case prints or executes logic based on the response code.
//
// 6. Payment Modes
//    Example: Handling different payment methods (Credit Card, UPI, PayPal).
//    Each case executes the respective payment flow.



// When to Avoid Switch-Case:

// 1. Range-Based Conditions
//    Example: if (age >= 18 && age <= 25)
//    Switch-case only works with discrete values, not ranges or inequalities.
//    Use if-else instead.

// 2. Complex Logical Expressions
//    Example: if (score > 80 && grade === "A")
//    Switch-case cannot handle compound conditions with && or || operators.

// 3. Boolean Flags
//    Example: if (isActive) → show dashboard else → show login.
//    Switch-case is overkill for simple true/false checks.

// 4. Nested or Dependent Logic
//    Example: if user is Admin → check department → allow actions.
//    Switch-case becomes messy when decisions depend on multiple variables.


//Program for Vowel or consonant 
let ch = 'n'
switch (ch) {
    case 'a':
    case 'e':
    case 'i':
    case 'o':
    case 'u':
        console.log(`${ch} is a vowel`);
        break;

    default:
        console.log(`${ch} is not a vowel and is a consonant`);
        break;
}
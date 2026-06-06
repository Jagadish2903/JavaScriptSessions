// ======================= Falsy Values =======================

// In JavaScript, there are 8 falsy values:
// 1. 0
// 2. -0
// 3. 0n (BigInt zero)
// 4. "" (empty string)
// 5. `` (empty template string)
// 6. '' (empty single-quoted string)
// 7. null
// 8. undefined
// 9. NaN
// 10. false (the boolean false itself)

// Any of these values will evaluate to false in a conditional statement.

// Example:
if (0) {
    console.log("Hi");
} else {
    console.log("bye"); // Output: bye
}

// Truthy Values:
// - Everything else apart from falsy values is considered truthy.
// - Examples: 1, [], {}, "text", Infinity, -Infinity, true

// Notes:
// - Even empty arrays [] and empty objects {} are truthy.
// - "Anything other than 0" → treated as true in numeric contexts.
// - Understanding falsy values is important for conditional checks and bug prevention.

// Example with multiple checks:
function checkValue(val) {
    if (val) {
        console.log(val, "is Truthy");
    } else {
        console.log(val, "is Falsy");
    }
}

checkValue(0);        // Falsy
checkValue("");       // Falsy
checkValue(null);     // Falsy
checkValue(undefined);// Falsy
checkValue(NaN);      // Falsy
checkValue(false);    // Falsy
checkValue([]);       // Truthy
checkValue({});       // Truthy
checkValue("Lav");    // Truthy
checkValue(100);      // Truthy

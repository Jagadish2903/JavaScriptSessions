//Ternary Operator =>  ? :

//
// The ternary operator (? :) is a shorthand for if-else.
//    Syntax: condition ? expressionIfTrue : expressionIfFalse
//


let amount =50;
let flag=amount>=10 ? true:false;
console.log(flag);//true


let element='link';
let action=element==='link'?'click':'dontClick'
console.log(action);//click

//Multiple conditions operator 
let m=10;
let flag=m<5?true:m<8?true:m=10?'hi':'bye';
console.log(flag);


let age=17;
let isEligible=age>=18?`Eligible for Voting`:`Not Elible for Voting`
console.log(isEligible);


//  In this case:
//    let age = 17;
//    let isEligible = age >= 18 ? "Eligible for Voting" : "Not Eligible for Voting";
//    console.log(isEligible);
//
//    - Condition: age >= 18
//    - If true → "Eligible for Voting"
//    - If false → "Not Eligible for Voting"
//    - Since age = 17, output is "Not Eligible for Voting".
//
// Advantages:
//    - Concise one-liner instead of full if-else.
//    - Useful for variable initialization based on conditions.
//
// Pitfalls:
//    - Avoid nested ternaries (hard to read).
//    - Use if-else for complex logic instead.




//console.log with multiple values:
//
// 1. console.log can accept multiple arguments separated by commas.
//    Each argument is printed in order, separated by spaces.
//
// 2. Example:
let name = "Jaga";
let age = 30;
let salary = 22.33;
let isActive = true;
console.log(name, age, salary, isActive); 
// Output: Jaga 30 22.33 true
//
// 3. This is useful for debugging or displaying multiple variables at once,
//    instead of concatenating them into a single string.
//
// 4. Advantages:
//    - Cleaner syntax compared to string concatenation.
//    - Automatically inserts spaces between values.
//    - Works with mixed data types (string, number, boolean, etc.).
//
// 5. Alternatives:
//    - String concatenation: console.log(name + " " + age + " " + salary + " " + isActive);
//    - Template literals: console.log(`${name} ${age} ${salary} ${isActive}`);


//we can also use Backtick for this to print everything 
let name2 = "Jaga";
let age2 = 30;
let salary2 = 22.33;
let isActive2= true;
console.log(`${name2} ${age2} ${salary2} ${isActive2}`); 


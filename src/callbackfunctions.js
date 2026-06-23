// ======================= Callback Functions in JavaScript =======================

// Definition:
// - A callback is a function passed as an argument to another function.
// - The receiving function can "call back" (invoke) the passed function at the right time.
// - Callback is just a parameter name; we can use any name.


//1.Proper Function as Argument 
// Example1:
function testing(callback) {
    console.log("Doing Testing");
    callback(); // invoke the passed function
}

function proper() {
    console.log("Hello, I am ProperFunction");
}

// Passing 'proper' as a callback to 'testing'
testing(proper);

// Output:
// Doing Testing
// Hello, I am reading

console.log("===================================");

//2.Function Expression as Argument  
// we can also pass the function expression name as a argument as well 
//Example .
let coding = function () {
    console.log("I am Coding");
}


//now passing this one as argument to the testing function 
testing(coding)
//Output :
//Doing Testing
//I am Coding

console.log("==========================================");

//3.Anonymous Function as Argument  
// We can also pass the Anonymous Function as a argument 

testing(function () {
    console.log("I am Anonymous");
})
//Output :
//Doing Testing
//I am Anonymous

console.log("==========================================");

//4.Arrow Functions
//we can also pass the Arrow Function as Argument 

testing(() => {
    console.log("Hi I am Arrow Function");
})

//Output:
//Doing Testing
//Hi I am Arrow Function


//4 or 3 rd one is always the recommneded practice 

console.log("==================================");

//Example for Calculator functions

//Here add,sub,mul,div is a function expression and a, b are parameters and its a arrow functions

let add = (a, b) => a + b;
let sub = (a, b) => a - b;
let mul = (a, b) => a * b;
let div = (a, b) => a / b;


function calculator(callback, a, b) {
    console.log("Doing Calculation");
    return callback(a, b);
}

let t1 = calculator(add, 10, 20);
console.log(t1); //30

//explanation : 
//here add is a callback and 10 is a and 20 is b 
//so add(a,b) here we have to return something right so we are returning that callback ans value

let t2 = calculator(sub, 40, 20);
console.log(t2); //20

let t3 = calculator(mul, 10, 20);
console.log(t3); //200

let t4 = calculator(div, 10, 5);
console.log(t4); //2


//here add, sub, mul , div are internal components and we are hiding that implementation thorugh that callback function 

console.log("================================");



function printing(callback) {
    console.log("Hello Printing");
    callback(100);

}


printing((num) => {
    console.log("Passed Num " + num);
})

//explanation :
//callback=(num)=>{concole.log("Passed NUm "+num)}

//Here Callback has to have some num value right so we are passing that value 100 


console.log("==============================");

//Multiple callbacks as arguments 

function guy(callback1, callback2) {
    console.log("Multiple Callback Start");
    callback1();
    callback2();
}

function play() {
    console.log("Started Play");
}

function type() {
    console.log("Stated Type");
}

guy(play, type);

//Output :
//Multiple Callback Start
//Started Play
//Stated Type

console.log("============================");

function click(element) {
    console.log("Do Click", element);
}

function sendKeys(element, textToPass) {
    console.log("clicking", element);
    console.log("Passing value", textToPass);
}


//Used the spread operator (...args) so you can pass any number of arguments to the callback.
function doAction(callback, ...args) {
    console.log("Starting actions");
    callback(...args);
}

doAction(click, "dropdwn");// stating actions Do click dropdwn
doAction(sendKeys, "textBox", "Hello")// Starting actions
//clicking textBox
//Passing value Hello


// Real-Time Analogy
// - Callbacks are like giving your phone number to a friend.
// - They’ll call you back only when something happens (event, completion, or error).


//📘 Callback with setTimeout – Notes

/*Definition:
- In Java, we use Thread.sleep to pause execution.
- In JavaScript, we use setTimeout which takes 2 parameters:
   1. A callback function (what to execute later)
   2. Time in milliseconds (delay before execution)
- Node.js/browser automatically calls the callback after the delay. 
  We don’t explicitly invoke it.
  */

//Syntax:
setTimeout(() => {
    console.log("Hello");
}, 2000);

// Prints "Hello" after 2 seconds.


/*
 Debugging Use Case
    - Instead of console.log, we can use `debugger;` inside setTimeout.
- This pauses execution in DevTools(Inspect → Sources tab).
- Useful for finding elements or checking state after a delay.
*/

//   Example:
setTimeout(() => {
    debugger;
}, 2000);

// Execution halts after 2 seconds, letting you inspect variables in the browser console.


/*
⚡ Real - Time Analogy
    - Think of setTimeout like setting a ** reminder alarm **.
- You give it a task(callback) and a delay(time).
- After the delay, JavaScript automatically “rings the alarm” and executes the task.
*/


//Example 2 : 
//Getting data from database after some time due to some connection time
//It prints Getting data from database 
//After 4 sec it will get UserData  

function getData(callback) {
    console.log("Getting data from database");
    setTimeout(() => {
        callback();
    }, 4000)
}

getData(() => {
    console.log("UserData");
})

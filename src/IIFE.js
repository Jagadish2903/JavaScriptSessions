//IIFE --Immediately Invoke Function Expression
//also an Anonymous Functions
//No name
//This Function will be invoked or called by itself - Self Calling 


//Syntax: Using Arrow Function (without function keyword)
(() => {
    console.log("Hello");
})(); //Hello

//Syntax: Without Arrow Function (with function keyword)
(function () {
    console.log("Hello");
})(); //Hello

console.log("===========================");

//With Param : 
(function (name) {
    console.log(`Hello`, name);
})('Jaga'); //Hello Jaga

//using Arrow Function 

((name) => {
    console.log(`Hello`, name);
})('Jaga'); //Hello Jaga


(function (name, age) {
    console.log(`Hello`, name, age);
})('Jaga', `35`); //Hello Jaga 35

//using Arrow Function 
((name, age) => {
    console.log(`Hello`, name, age);
})('Jaga', `35`); //Hello Jaga 35



//with return 
let result = (function (a, b) {
    return a + b;
})(10, 20);

console.log(result);


//Type Of Functions:
//1.Simple Functions
//2.Function Expression
//3.Anonymous Function
//4.IIFE
//5.Arrow Functions
//6.Call back Functions
//7.Async Await Functions 
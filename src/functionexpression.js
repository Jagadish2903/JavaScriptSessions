// ======================= Function Expression & Reference =======================

// Example:
let getData = function getUserDetailsFromDashboardPageAndHomePage() {
    console.log("Hello Getting Details");
};

// Calling the function:
getData(); // Output: Hello Getting Details

// Trying to call the original long name:
//getUserDetailsFromDashboardPageAndHomePage(); // ReferenceError

// Notes:
// - This is a function expression, not a function declaration.
// - The function is assigned to the variable 'getData'.
// - The internal name (getUserDetailsFromDashboardPageAndHomePage) exists only
//   within the function body for recursion or debugging.
// - Outside the function, you must use the variable name (getData) to call it.
// - typeof getData → "function"
// - typeof getUserDetailsFromDashboardPageAndHomePage → "undefined"

// Example Outputs:
console.log(typeof getData); // function
console.log(typeof getUserDetailsFromDashboardPageAndHomePage); // undefined
console.log("===============================");

//Imp : Function Expression cannot be hoisted where as Function can be hoisted 
//Example : 


//Function : Hoisting Allowed

getData2("Lav")

function getData2(name) {
    console.log(`Hello User Details is for ${name}`);
};


console.log("=========================");

//Function Expression : Hoisting not allowed
getData1("Jaga")

let getData1 = function getUserDetailsFromDashboardPageAndHomePage1(name) {
    console.log(`Hello Getting Details,${name}`);
};

//here we will get Cannot access 'getData1' before initialization




//Note : we can get that big name in the output as well by using the name property by default
//Example. 


let getData2 = function getUserDetailsFromDashboardPageAndHomePage3(name) {
    console.log(`Hello Getting user Details for ${name}`);
};

console.log(getData2.name);//getUserDetailsFromDashboardPageAndHomePage3
//here name is the default property to know the function name we can use like this



//Once we declare it with New reference Name for a Function Name then old Name cannot be accessed 


//Arrow Functions are the functions with No Name
//No Function Keyword
//Denoted by ()=>
//Used in CallBack Function 
//Need Some Function Expression to Call the Arrow Function 

let data = () => {
    console.log("Hello");
}
//we cant able to Call this function automatically like IFFE's or using a function name so
//we need to use the Function Expression let data=

data();//Hello


//Using Function Keyword without Arrow Function 
let data1 = function () {
    console.log("Hello");
}

data1();//hello


console.log("==================================");

//Arrow Functions with Parameters: 
let test = (name, age) => {
    console.log(name, age);
}

test("Jag", 33)//Jag 33


//Arrow Function with 0 Param :
let test2 = () => {
    console.log("Hello World");
}
test2();//Hello World 


//Arrow Functions with 1 Param : 
let test3 = userName => console.log("Hello", userName);
test3("Lav"); //Hello Lav 

//We can also write like this for 1 param
//Note . Can be written without paranthesis () also if there is one param
//Also on the right side { } can be skipped if there is only one line but should be used if multiple line is there
//test3 is a Function Expression 

console.log("==========================");


//Example 3: 
//Add 2 Numbers 
//Two Param x and y 
//Return the sum 

let sum = (x, y) => {
    console.log('The Values are ' + x, y);
    return x + y;
}

let result = sum(2, 4);
console.log(result);


console.log("====================================");

//If no of lines are only 1 then we can use without return also example see below 
let sum1 = (x, y) => x + y;

let result1 = sum1(2, 4);
console.log(result1);

console.log("================================");

//Example 4.
//Launch Browser :CH,FF,Sa,Edge
//Return Boolean
//Found true
//Not Found :Invalid browser false 


/**
 * 
 * @param {String} browserName 
 * @returns 
 */
let isBroswerLaunched = browserName => {
    console.log('Trying to Launch', browserName);
    switch (browserName) {
        case 'chrome':
            console.log('launching Chrome');
            return true;
        case 'firefox':
            console.log('launching Firefox');
            return true;
        case 'edge':
            console.log('launching Edge');
            return true;
        case 'safari':
            console.log('launching Safari');
            return true;

        default:
            console.log('Invalid Browser', browserName);
            return false;
    }
}


let flag = isBroswerLaunched('chrome')
if (flag) {
    console.log("Entering URL");
}

console.log("========================");
//Example 5.
//Give a String and return with lowercase 

let newString = name => name.toLowerCase();
let word = newString("Hello");
console.log(word);

console.log("==============================");

//Example 6.
//Using Spread Parameter to supply multiple param ...this will act as an Array so we can 
//use lenth Param
let printEmpList = (...empNames) => {
    console.log(empNames.length);
    console.log(empNames);
}

printEmpList("Jaga", "Lav", "Vijay", "Dinesh");
//Output:
//4
//[ 'Jaga', 'Lav', 'Vijay', 'Dinesh' ]


//Arrow Functions with Objects 

let user = {
    name: "Jaga",
    age: 33,
    slaary: 33.33,
    isActive: true
}

let userDetails = (userObj) => {
    console.log(userObj);
}

userDetails(user);//{ name: 'Jaga', age: 33, slaary: 33.33, isActive: true }

console.log("==================================");

//Can we Do a Destructuring :Yes like below 
//Note: Ensure we need to have that curly braces to have the Destructuring
let userDetails2 = ({ name, age }) => console.log(name, age);


userDetails2(user);//Jaga 33




// includes() → accessor method
// Checks whether an element is present in the array.
// Returns a boolean value (true/false).
// Does NOT change the original array.

let num = [1, 2, 3, 4, 5];
let flag = num.includes(3);
console.log(flag); // true

let arr = ["mac", "iphone", "mouse"];
console.log(arr.includes("tablet")); // false

let arr2 = ["mac", "iphone", "mouse", "pen"];
console.log(arr2.includes("mac", -2)); // false (search starts at index length-2)

console.log("====================================");

// join() → accessor method
// Joins every element in the array into a string with a separator.
// Returns a string.
// Does NOT change the original array.

let cart = ["imac", "ipad", "Jag"];
let newStr = cart.join("");
console.log(newStr); // "imacipadJag"

let cart2 = ["imac", "ipad", "Jag"];
let newStr2 = cart2.join(" - ");
console.log(newStr2); // "imac - ipad - Jag"

let emptyArr = [];
console.log(emptyArr.join(",")); // "" → empty string


console.log("=================================");

// 11. toString()
// Converts the array into a comma-separated string.
// Returns a string.
// Does NOT change the original array.

let cart3 = ["imac", "ipad", "Jag"];
let str = cart3.toString();
console.log(str);  // "imac,ipad,Jag"
console.log(cart3); // [ 'imac', 'ipad', 'Jag' ]

console.log("==============================");

// 12. at()
// Returns the element at the given index.
// Supports negative indexes (counting from the end).
// Does NOT change the original array.

let num2 = [10, 20, 30, 40, 50];
console.log(num2.at(2));   // 30 → element at index 2
console.log(num2[2]);//30 
console.log(num2.at(-1));  // 50 → last element
console.log(num2.at(-3));  // 30 → third last element
console.log(num2[-2]);//undefined ....Since [] wont support negative indexes 

//Only at method supports negative index


console.log("============================");

// forEach() → accessor method
// Executes a provided function once for each array element.
// Does NOT change the original array.
// Commonly used for iteration, logging, or applying side effects.
//Syntax : forEach(callbackfn: (value: number, index: number, array: number[]) => void, thisArg?: any): void


let arr = ["mac", "iphone", "mouse"];
arr.forEach(function (item, index) {
    console.log(index, item);
});

//using arrow function:
arr.forEach((e) => {
    console.log(arr.indexOf(e), e);
});

let nums = [10, 20, 30];
nums.forEach((val, idx) => console.log(`Index ${idx}: ${val}`));

let total = 0;
let numbers = [1, 2, 3, 4];
numbers.forEach(n => total += n);
console.log(total);

let users = [
    { name: "Jag", role: "Tester" },
    { name: "Sam", role: "Developer" }
];
users.forEach(u => console.log(`${u.name} → ${u.role}`));


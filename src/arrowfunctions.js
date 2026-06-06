
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

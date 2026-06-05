//AnonymousFunctions : Function with No name 

//No Name 
let test = function () {
    console.log("Hello");
}

//if no name is there then how we will call the function then in thiscase we need to use the function expression 
//let test = 

//Calling the Function : 
test();
console.log("=====================================");

//Example2:

let test2 = function (x, y) {
    console.log(x, y);
    return x + y;
}
let totalValue = test2(2, 3);
console.log(`Total Value is ${totalValue}`);

console.log("===========================================");
//Example 3: 

/**
 * 
 * @param {String} browserName 
 * @returns 
 */
let launchBrowser = function (browserName) {
    switch (browserName.trim().toLowerCase()) {
        case 'chrome':
            console.log(`Launching Chrome`);
            return true;
        case 'firefox':
            console.log(`Launching Firefox`);
            return true;
        case 'safari':
            console.log(`Launching Safari`);
            return true;

        default:
            console.log(`Please pass the correct browser ${browserName}`);
            return false;
    }
}
let isBrowserLaunched = launchBrowser('Chrome');

if (isBrowserLaunched) {
    console.log(`Browser Launched`);
    console.log(`Entering the Url`);
} else {
    console.log(`Browser Not Launched`);
}



//Advanced Version of Anonymmous Function is a Arrow Function 


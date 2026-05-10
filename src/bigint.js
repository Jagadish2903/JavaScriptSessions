//Generally in Javascript we can write the number for all int and decimals (but only upto certail extent-2^53-1)
//TO achieve or to write number of big length we can use BigInt 

//to know the max allowed we can use MAX_SAFE_INTEGER

// Max safe integer
console.log(Number.MAX_SAFE_INTEGER); // 9007199254740991

// BigInt definitions
let bigNum1 = 100n;
console.log(typeof bigNum1); // bigint

let bigNum2 = BigInt(4000);
console.log(typeof bigNum2); // bigint

// Arithmetic operations with BigInt
let bigA = 100n;
let bigB = bigA + 10n;
console.log(bigB); // 110n

let bigC = 100n;
let bigD = bigC / 10n;
console.log(bigD); // 10n

let bigE = 100n;
let bigF = bigE * 10n;
console.log(bigF); // 1000n

// String concatenation
console.log("100n" + 10n); // "100n10"

// Unary plus with BigInt string → error
// console.log(+"100n" + 10n); // ❌ Cannot mix BigInt and other types

// Phone numbers, SSN, CC, etc. → use String
let phone = "+9789037799";
console.log(phone); // +9789037799
console.log(typeof phone); // string
console.log(phone.length); // 11

let adNo = "1234 5678 8765 7654";
console.log(typeof adNo); // string
console.log(adNo.length); // 19

// BigInt does not support decimals
// let invalidBig = 100.5n; // ❌ Compilation error

// Division with BigInt truncates
let bigM = 10n;
let bigN = 3n;
let bigResult = bigM / bigN;
console.log(bigResult); // 3n

// Convert Number → String
let numX = 1000;
let strX = numX + "";
console.log(typeof strX); // string
console.log(typeof numX); // number

// Convert BigInt → String
let bigY = 1000n;
let strY = "" + bigY;
console.log(strY); // "1000"
console.log(strY + 100); // "1000100"

// Rules demonstration
// 1. String + Anything => String
let str1 = "Hello";
let numY = 10;
console.log(str1 + numY); // "Hello10"

let str2 = "Value: ";
let bigZ = 20n;
console.log(str2 + bigZ); // "Value: 20"

// 2. Anything + String => String
let numZ = 50;
let str3 = " apples";
console.log(numZ + str3); // "50 apples"

let bigK = 100n;
let str4 = " is a BigInt";
console.log(bigK + str4); // "100 is a BigInt"

// 3. Number + Number => Number
let numA = 5;
let numB = 7;
console.log(numA + numB); // 12

// 4. BigInt + BigInt => BigInt
let bigL = 200n;
let bigM2 = 300n;
console.log(bigL + bigM2); // 500n

// 5. BigInt + Number => Error
let bigErr = 10n;
let numErr = 5;
// console.log(bigErr + numErr); // ❌ TypeError

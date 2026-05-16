// console.log():
// - Prints output followed by a newline character.
// - Works with strings, numbers, objects, arrays, etc.
// - Example:
console.log("hello"); // Output: hello (with newline)
let i = 1;
while (i <= 3) {
    console.log(i);
    i++;
}
////this will print 
// 1
// 2
// 3
// a new line always 


// process.stdout.write():
// - Prints output without automatically adding a newline.
// - Works only with strings (non-string values must be converted).
// - Example:
process.stdout.write("hello"); // Output: hello (no newline)
let j = 1;
while (j <= 10) {
    process.stdout.write(j + "");
    j++;
}
//this will print //12345678910 in a single line 
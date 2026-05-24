// Two Dimensional Array (Fixed Rows & Columns)

let num = [
    [1, 2, 3, 4],
    [10, 20, 30, 40],
    [100, 200, 300, 400]
];
// 3x4 array → 3 rows and 4 columns

// Accessing elements
console.log(num[0][0]); // 1
console.log(num[2][3]); // 400
// console.log(num[4][4]); // ❌ Error: Cannot read properties of undefined

console.log("====================================================");

// Length gives row count
console.log(num.length); // 3

console.log("====================================================");

// Iterating using nested for loops
for (let i = 0; i <= num.length - 1; i++) {
    for (let j = 0; j <= num[i].length - 1; j++) {
        process.stdout.write(num[i][j] + " "); // inline printing
    }
    console.log(); // newline after each row
}
// Output:
// 1 2 3 4
// 10 20 30 40
// 100 200 300 400

// Note: process.stdout.write works only with strings, so concatenation with "" or " " is required.

console.log("==========================================");

// Using for...of loop
for (let u of num) {
    for (let v of u) {
        process.stdout.write(v + " ");
    }
    console.log();
}

console.log("==========================================");

// Jagged Array (Rows with different column counts)

let data = [
    [1, 2, 3, 4, 5],
    [10, 20],
    [100, 200, 300],
    [1000, 2000, 4000, 6000],
    [9000]
];

console.log(data);

console.log("==========================================");

// Iterate using for...of loop
for (let u of data) {
    for (let v of u) {
        process.stdout.write(v + " ");
    }
    console.log();
}

console.log("==========================================");

// Iterate using nested for loops
for (let i = 0; i <= data.length - 1; i++) {
    for (let j = 0; j <= data[i].length - 1; j++) {
        process.stdout.write(data[i][j] + " ");
    }
    console.log();
}

// Note: Whether fixed 2D or jagged arrays, the concept remains the same:
// - Outer loop → rows
// - Inner loop → columns

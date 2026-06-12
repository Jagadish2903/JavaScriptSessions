// ======================= Import =======================

// Import :
// We can import specific items from a module using curly braces.
// The file extension (.js) must be specified in ES Modules.
// Default function does NOT participate in object destructuring,
// so it should be written separately (e.g., Bathing).

// 📘 Syntax:
// import defaultFunction, { functionName, variableName } from "./filename.js";

// Example:
import bathing, { coding, pi, Running } from "./exportexample.js";

coding();   // Jaggu is Coding
console.log(pi); // 3.14
Running();  // Jaggu is Running

bathing();  // Jaggu is Bathing

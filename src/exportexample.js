// ======================= Export and Import =======================

// Export :
// We can export constants, variables, functions, or classes.
// Each item can be exported separately using the 'export' keyword.

// ======================= Important Note =======================

// Note :
// Any console.log (or other top‑level statements) written outside of functions
// will automatically execute when the module is imported.
// This happens even if we do not explicitly export them.
// ⚠️ They are part of the module’s top‑level code, so importing the file
// will trigger those lines immediately.

// Example:
console.log("This will run automatically when the file is imported");

// Even without 'export', the above line executes as soon as another file does:
// import "./example.js";



// 📘 Syntax:
// export const variableName = value;
// export function functionName() { ... }
// export class ClassName { ... }

// Example:
export const pi = 3.14;

export function coding() {
    console.log("Jaggu is Coding");
}

export function printing() {
    console.log("Jaggu is Printing");
}

export default function bathing() {
    console.log("Jaggu is Bathing");
}

// We can write export for all functions and variables separately
// and import them accordingly.




// Way 2 : 
// We can also export all the methods and variables at once in the last line,
// without using the 'export' keyword for each declaration individually.
// But ⚠️ it will NOT work for default exports.
// For default, we must use Way 1 (export keyword directly on the function/variable).
// And remember → there can be only ONE default export per file. (can be default variable or default function but not both )

// 📘 Syntax:
// export { functionName1, functionName2, variableName, ... }

const sigme = 3;

function Running() {
    console.log("Jaggu is Running");
}

function playing() {
    console.log("Jaggu is playing");
}

export { Running, playing, sigme }





// ======================= Export & Import Rules =======================

// 1. Export items from one file and import them into another
//    using the 'export' keyword for all functions and variables.

// 2. Named exports:
//    export { a, b, c }
//    import { a, b, c } from "./example.js";

// 3. Default export:
//    - Only one default export is allowed per file.
//    - It is not part of object destructuring.
//    Example: export default function myFunc() { ... }

// 4. Renaming imports:
//    export { a, b, c }
//    import { a as myA, b as myB, c as myC } from "./example.js";

// 5. Import everything:
//    import * as myApp from "./example.js";

// 6. Built‑in modules like 'console.log' are available globally
//    and do not require explicit import.

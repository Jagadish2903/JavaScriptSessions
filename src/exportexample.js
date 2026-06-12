// ======================= Export and Import =======================

// Export :
// We can export constants, variables, functions, or classes.
// Each item can be exported separately using the 'export' keyword.

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
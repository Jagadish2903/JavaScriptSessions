// Function Documentation in JavaScript

/**
 * @param {Number} x - First number
 * @param {Number} y - Second number
 * @returns addition of two numbers
 */
function addition(x, y) {
    return x + y;
}

// Example Calls:
let m1 = addition(10, 20);
console.log(m1); // 30 → Number + Number = Number

let m2 = addition(10, 'Jaga');
console.log(m2); // "10Jaga" → Number + String = String (concatenation)

let m3 = addition('Lav', 'Jaga');
console.log(m3); // "LavJaga" → String + String = String

// Notes:
// - In JavaScript, parameters do not have fixed datatypes.
// - The '+' operator behaves differently depending on operand types:
//   * Number + Number → Arithmetic addition
//   * String + Anything → String concatenation
// - Because of dynamic typing, users may be unsure of behavior.
// - Documentation comments (/** ... */) help clarify intended usage.
// - Hovering over the function in editors (like VS Code) shows the doc info.
// - Documentation improves clarity but does not enforce types.
// - To enforce types, use TypeScript (e.g., function addition(x: number, y: number): number).




// Function Memory Allocation in JavaScript

// 1. Heap Memory
// - When we define a function, the function object itself is stored in heap memory.
// - Heap is where non-primitive values (objects, arrays, functions) live.
// - Garbage Collector (GC) works only in heap memory.
// - GC automatically frees heap memory when objects/functions become unreachable.

// 2. Stack Memory
// - When we call a function, a new stack frame is created in stack memory.
// - This stack frame holds local variables, parameters, and references.
// - Once the function finishes execution, the stack frame is popped (deleted).
// - Stack memory is managed automatically by the JavaScript runtime.
// - GC does not operate on stack memory — allocation/deallocation is automatic.

// Example:
function add(x, y) {
    return x + y;
}

let result = add(10, 20);
// - Function object 'add' is stored in heap.
// - When called, a stack frame is created with x=10, y=20.
// - After execution, stack frame is removed.
// - Heap still holds the function object until program ends or it becomes unreachable.

// Key Takeaways:
// - Heap → stores objects, arrays, functions. GC cleans unreachable data.
// - Stack → stores execution context (variables, parameters). Auto managed by runtime.
// - GC works only in heap, not stack.


//The Above Process is called Allocation and De-Allocation

//Note: Stack follows LIFO -Last In First Out (during deallocation)



//Example 3: 
// =======================  Nested Calls =======================

// Example:
function m1() {
    console.log("i am m1");
    m2();
}

function m2() {
    console.log("i am m2");
    m3();
}

function m3() {
    console.log("i am m3");
    m1();
}

let m = m1();
console.log(m);

// Explanation:
// - m1 calls m2 → new stack frame pushed.
// - m2 calls m3 → another stack frame pushed.
// - m3 calls m1 again → another stack frame pushed.
// - This cycle continues infinitely (no base condition).
// - Each call adds a new stack frame (allocation).
// - No function finishes, so no stack frame is popped (no deallocation).
// - Eventually, the stack runs out of space → "Maximum call stack size exceeded".

// Memory Behavior:
// - Stack Memory works in LIFO (Last In, First Out).
// - Each function call pushes a frame onto the stack.
// - Normally, when a function completes, its frame is popped (deallocated).
// - In infinite recursion, frames keep piling up without being popped.
// - Heap Memory still holds the function objects (m1, m2, m3).
// - Garbage Collector (GC) cannot help here because the issue is in stack, not heap.

// Key Takeaways:
// - Stack → allocation/deallocation follows LIFO.
// - Heap → stores function objects, cleaned by GC when unreachable.
// - Infinite recursion → continuous allocation in stack, no deallocation.
// - Error: "Maximum call stack size exceeded" occurs when stack limit is reached.

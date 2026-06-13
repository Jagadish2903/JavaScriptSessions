//Class: 

// Definition:
// A class is a template (blueprint) for creating objects.
// Objects are physical entities with variables (properties) and methods (actions).
// Example: Laptop → blueprint; MacBook, Dell, HP → objects
// Example: Human → blueprint; Jag, Lav → objects

// ----------------------- Rules -----------------------
// 1. Class names should start with a capital letter.
// 2. let, var, const are not allowed directly inside the class body.
// 3. A constructor is required to initialize variables and create objects.
// 4. Unlike Java, the constructor name does not match the class name.
// 5. No constructor overloading — only one constructor per class.
// 6. Constructor has no explicit name; it must define all variables.
// 7. Methods inside a class should not use the 'function' keyword.
// 8. Anonymous functions and arrow functions can be used as properties.
// 9. IIFE (Immediately Invoked Function Expressions) are not allowed inside a class.
//10.Object should be created outside the class :recommendd 


class Employee {
    name1 = "Jaga";
    //here we have created name = Jaga and if created object against this class then everything will 
    //have Jaga so its not recommended to use the hard coded one always use

    name;
    age;
    salary;
    isActive;

    //Here name,age,salary,isActive are the global variable or class variables 
    //this keyword --> current class object 

    constructor(name, age, salary, isActive) {
        this.name = name;
        this.age = age;
        this.salary = salary;
        this.isActive = isActive;
    }

    //this.global=local 
    //using this global variable gets initialised 

    //Actions : Methods 
    //General Practice : When we are creating function inside the class is called Methods 
    //we should not use function keyword inside the class to create methods - for a normal function
    //We should not use let,var,const keyword inside the clss for Anaonymous function,Arrow Functions - using function expression
    //We cannot create a IIFE's inside the class 

    coding() {
        console.log(this.name, ' is coding ');
    };

    running() {
        console.log(this.name, 'is running');
    }

    reading() {
        console.log(this.name, 'is reading');
        return 100;
    }

    //Anonymous Function:
    playing = function () {
        console.log(this.name, 'is playing');
    }

    //Arrow Function
    writing = () => {
        console.log(this.name, 'is writing');
    }

    //Anonymous function with param 

    calculate = (a, b) => {
        return a + b;
    }

}

//Creating the Object and when ever we are creating it automatically call the constructor 
//Object created and stored in heap and all the global variables,methods will be given to that object 
//this object is created inside the heap memory 
//emp is a object reference and stored in stack 
//Unline Java : here emp type will be let var, or const not Employee 

let emp = new Employee("jaga", 33, 23.34, true);


//Calling the Variables
console.log(emp.name, emp.age, emp.isActive, emp.salary);//jaga 33 true 23.34

//Calling the Functions 
emp.coding();//jaga  is coding 
emp.running();//jaga is running

//since we have some return for reading function we are storing invariable and printing
let result = emp.reading();
console.log(result);//jaga is reading 100 


let ans = emp.calculate(100, 200);
console.log(ans);//300

console.log("============================");

//Creating one more Object but not passing any value

let emp1 = new Employee();
console.log(emp1.name, emp1.age, emp1.isActive, emp1.salary)//undefined undefined undefined undefined
//But in Java we woll get the defaukt value 


console.log("==============================");

//Creating one more object 

let emp2 = new Employee("Usha", 23)
//prining whole object 
console.log(emp2);
/*Employee {
  name1: 'Jaga',
  name: 'Usha',
  age: 23,
  salary: undefined,
  isActive: undefined,
  playing: [Function: playing],
  writing: [Function: writing],
  calculate: [Function: calculate]
}
*/


console.log(emp2.name, emp2.age); //Usha 23

console.log(emp2.name, emp2.age, emp2.salary); //Usha 23 Undefined

console.log("====================================");

//Creating one more object 
let emp4 = new Employee("Bruno", 1, 22.4, false);
emp4 = null;

console.log(emp4.name);//Cannot read properties of null (reading 'name')

//Same for Undefined as well ...
//here we will get this error Cannot read properties of null (reading 'name') but in Java we will get
//Null Pointer exception

//Now the Garbage Collector will delete this object since no object reference 








// ======================= Class with Static =======================

// Static Properties:
// - Declared using the 'static' keyword.
// - Belong to the class itself, not to individual objects.
// - Stored in Common Memory Allocation (CMA).
// - Accessed using ClassName.property, not via 'this'.
// - Its a common Property so all the objects will have this property ...There can be many objects like Bruno but the breed is Tshitzu


class Employee {
    static breed = "Tshitzu"; // static property

    // Instance properties
    name;
    age;
    salary;
    isActive;

    constructor(name, age, salary, isActive) {
        this.name = name;
        this.age = age;
        this.salary = salary;
        this.isActive = isActive;
    }

    // Instance methods
    coding() {
        console.log(this.name, 'is coding');
    }

    running() {
        console.log(this.name, 'is running');
    }

    // Anonymous function as property
    playing = function () {
        console.log(this.name, 'is playing');
    }
}

// ----------------------- Usage -----------------------

// Accessing static property
//To Access the static property we need to use the Class Name 
console.log(Employee.breed); // Tshitzu

// Creating object
let emp1 = new Employee("Bruno", 33, 23.34, true);
console.log(emp1.name); // Bruno

// Accessing instance method
emp1.coding(); // Bruno is coding

emp1.running(); //Bruno is running 

// Trying to access static property via object → undefined
console.log(emp1.breed); // undefined


//We can also change the static value ...
Employee.breed = "Lab";
console.log(Employee.breed);//Lab

//Here this static key word value is changed ..which is not the right behavior what if incase we need something
//like in java ...final keyword ...its not there in javascript thats why we use Typescript
// static readonly breed: string = "Tshitzu"; // cannot be changed





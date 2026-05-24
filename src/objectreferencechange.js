let u1 = {
    name: "jaga",
    age: 35,
    salary: 33.45,
    isActive: true
}

let u2 = {
    name: "Lav",
    age: 34,
    salary: 23.45,
    isActive: false
}

let u3 = {
    name: "Usha",
    age: 64,
    salary: 13.45,
    isActive: true
}


console.log(u1);//jaga
console.log(u2);//lav
console.log(u3);//usha 

console.log("===========================");
u1 = u2;
console.log(u1);//lav
console.log(u2);//lav
console.log(u3);//usha

console.log("===========================");
u2 = u3;
console.log(u1);//lav
console.log(u2);//usha
console.log(u3);//usha

console.log("===========================");
u3 = u1;
console.log(u1);//lav
console.log(u2);//usha
console.log(u3);//lav

console.log("===========================");
u1 = u2 = u3;
console.log(u1);//lav
console.log(u2);//lav
console.log(u3);//lav



//Now the GC - Garbage collector will clear all the object with null reference and no reference and undefined reference
//  once memory is full 

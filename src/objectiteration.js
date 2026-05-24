//Iterate using object should be done using for ...in loop 

let user = {
    name: "lav",
    age: 35,
    salary: 40.44,
    isActive: true
}

console.log(user);//{ name: 'lav', age: 35, salary: 40.44, isActive: true }

//To iterate using for in loop 
for (let e in user) {
    console.log(e); //this will print only the key 
    // name
    //age
    // salary
    // isActive
}


for (let e in user) {
    console.log(user[e]); //this will print only the value 
    //lav
    // 35
    // 40.44
    // true
}

//we have a default methods to print the keys 
console.log(Object.keys(user)); //but its return the value as String Array 
//Output :
//[ 'name', 'age', 'salary', 'isActive' ]

//we have a default methods to print the values
console.log(Object.values(user)); //but its return the value as String Array 
//Output :
// ['lav', 35, 40.44, true]


//we can also print the complete entries 
console.log(Object.entries(user));
//
// [
//   [ 'name', 'lav' ],
//   [ 'age', 35 ],
//   [ 'salary', 40.44 ],
//   [ 'isActive', true ]
// ]



//Note : Forin Loop in Arrays will work on index and for Objects it works on Keys

console.log("=====================================================");
//Nested Object : 

let customer = {
    name: "lav",
    age: 35,
    salary: 40.44,
    isActive: true,
    address: {
        flat: 101,
        building: "RoshanEnclalve"
    }
}

console.log(Object.keys(customer));//[ 'name', 'age', 'salary', 'isActive', 'address' ]
// console.log(Object.keys(customer.address));/[ 'flat', 'building' ]
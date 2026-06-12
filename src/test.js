let year = 2025;
year = 2025 + 25 + 60 + "janaki";
//console.log(typeof year);
console.log(year);


const num = [1, 2, 3];
console.log(num);
num.push(4)
console.log(num);



let num = [1, 2, 3, 4, 5]
num[10] = 9;
console.log(num);//[ 1, 2, 3, 4, 5, <5 empty items>, 9 ]
num[-2] = 20;
console.log(num[-1]);


num[-1] = 20;
console.log(num);
console.log(num[-1]);
num[-10] = 11;
console.log(num);



let products = ["iphone 17", "Macbook", "Hp", "Dell"];
products[-4] = "Tv";
products[-1] = "sun";
for (let i = -4; i <= products.length - 1; i++) {
    console.log(products[i]);
}



let pop = [];
console.log(pop.length);//0
console.log(typeof pop);//object
pop[100] = 100;
console.log(pop);//[ <100 empty items>, 100 ]
console.log(pop.length);//101
console.log("-------------------------------");
pop[-1] = 200;
console.log(pop);





let num = [
    [1, 2, 3, 4, 5],
    [10, 20, 30, 40, 50]
]

for (let e of num) {
    for (let r of e) {
        //console.log(r);
        process.stdout.write(r + " ")
    }
    console.log();
}




let prods = ["mac", "pen", "ipad"]
//prods[-3]="hi";
let count = prods.length - 1
for (let e in prods) {
    e = count;
    console.log(prods[e]);
    count--;
}



let customer = {
    name: 'jaga',
    age: 35,
    salary: 33.33,
    address: {
        flat: 101,
        building: 'RoshanEnclave',
        zip: 1012
    }
}
console.log(customer);
console.log(typeof customer);//Object
console.log(customer.age);//35
console.log(customer.address.flat);//101

//to covert this JS object to JSON 
//Stringify
//Serialization 
let userJson = JSON.stringify(customer);
console.log(userJson);
console.log(typeof userJson);//String 


//To convert the above again to Js Object from json 
//Parse Method 
//Deserialization 
let userObject = JSON.parse(userJson);
console.log(userObject);
console.log(typeof userObject);//Object



let empdata = {
    name: 'jaga',
    age: 35,
    devices: ['iphone 17', "ipad", "pen"]
}

console.log(empdata.devices[1]);
//console.log(empdata[devices][1]);//will throw error

let empJson = JSON.stringify(empdata)
console.log(empJson);

//To print all the json as pretty
let empJson2 = JSON.stringify(empdata, null, 2)
console.log(empJson2);

console.log("==================");
let num = [1, 2, 3, 4, 5]
let r1 = num.splice(0, 2, 5);
console.log(r1);//[1,2]
console.log(num);//[ 5, 3, 4, 5 ]


let cart = ["imac", "iphone", "macbood"];
let r1 = cart.splice(0, 1, "Pen");
console.log(cart);//[ 'Pen', 'iphone', 'macbood' ]

console.log("==========================");

let num = [10, 20, 30, 40, 50];
let newArr = num.filter(e => e > 30);
console.log(newArr);
console.log(num);


let num = [1, 2, 3, 4, 5];
let result = num.reduce((sum, e) => sum = sum + e, 0);
console.log(result); //15

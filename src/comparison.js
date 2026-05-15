// Two type of Comparison we can do ..
    //1.Loose Equality => == checks the value 
    //2.Strict Equality => === checks the value and type 


//== => Loose Equality 

console.log(10==10);//true
console.log(10=="10");//true ... javascript converts that string to number automatically 

//=== =>Strict Equality 
console.log(10===10);//true
console.log(10==="10");//false ...cox === compares the type and value 

//Note. whenever we are doing comparison always we need to use strict equality and recommended 
//In javascript true =1 and false =0 
console.log(true ==1);//true
console.log(true ===0);//false
console.log(false ==0);//true
console.log(false ===0 );//false 


//In javascript anything empty it will be considered as 0 
// Comparison of Empty String 
console.log(""==0);//true 
console.log(""===0);//false
console.log([]==0);//true
console.log([]===0);//false
console.log([]=="");//true
console.log([] === "");//false



let a1=10;
let a2='10'
console.log(a1==a2);//true 
console.log(a1===a2);//false



//Important 
console.log(null == undefined);//true 
console.log(typeof null);//Object 
console.log(typeof undefined);//underfined
console.log(null === undefined);//false
console.log([] == []); //false cox for the value of the array it takes the value of Memory address 
console.log([]===[]);//false

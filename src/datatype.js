//Primitive and Non-Primitive datatype

//Primitive DateType -Memory is fixed
    //-Number, - String , - Boolean, - BigInt, -Null, -Undefined

//Non-Primitive DataType  - Memory is not fixed (Reference Type)
    //-Arrays, -Objects,-Functions,-List/Set/Map


//Identifiers: 3 types (after 2015) - let,const,var


//Number : Size - 8 Bytes

let x=10;
let y=12.33;
console.log(x);
console.log(y);
console.log(typeof x); //to get the type of data 
console.log(typeof y);
//here x is the variable let is the identifier and 10 is the value 



//String : Size - 2 Bytes for each character 
let a='c';
let b ="Hello world";
let c='10';
console.log(a);
console.log(typeof b);
console.log(c);//10
//can be declared with single charact or set of characters (No charac concept in Javascript)
//can be enclosed with single or double quotes


//Boolean : Size - 2 Bytes 
let flag = true;
let isValid = false;
console.log(flag);
console.log(typeof isValid);

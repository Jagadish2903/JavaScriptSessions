//DataType
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


//Boolean : Size - 4 Bytes as per documentation 
        let flag = true;
        let isValid = false;
        console.log(flag);
        console.log(typeof isValid);

//Undefined  :Size -  0 Bytes 
        let g = undefined;
        console.log(g);
        console.log(typeof g); //undefined
        //or
        let f;
        console.log(f);
        console.log(typeof f);//undefined
        //but always use undefined instead of leaving with no declaration

//Null : Size - 0 Bytes 
        let h=null;
        console.log(h); //Null
        console.log(typeof h); //Object 


//Difference Between Var,Let,Const
//Var - Reinitializarion(Yes) , ReAssignemnt(Yes)
//const - Reinitializarion(No) , ReAssignemnt(No)
//let - Reinitializarion(No) , ReAssignemnt(Yes)


//example : 
let m=10;
//let m=12; //this will throw error since reinitialisation is not possible in let 
m=30;//this will work since reassignemnt is possible and valid case
console.log(m);//30

var o=12;
var o=13;
console.log(o); //this will work since var is old legarcy and reinitialisation is possible and since its  a old 
//legacy and its almost depricated old way of declaring variable and it will pritn 13 but it will create 12 and 13 in the memory 


const title ="this is my book";
//const title ="hello";//this will throw erorr since reinitialization is not possible in const 
//title ="nju"; //this will throw error since reassignment also is not possible 
console.log(title);
//Note : So const is something like final keyword in java 




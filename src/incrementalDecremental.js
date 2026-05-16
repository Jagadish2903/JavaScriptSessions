//Incremental Operator : 
//Two Types 
//1.Post Incremental 
//2.Pre Incremental 


//Decremental Operator 
//Two Types 
//Post Decremental 
//Pre Decremental 



//Post Incremental - Increase the value by 1 later 
let a = 10;
let b = a++;
console.log(a);//11
console.log(b);//10

//it will first create two variable in the memory a and b and give the value as 10 for a first ...then b=a so it 
//gives the value to b that is 10 to b ...then increase the value by 1 for a a++ so a becomes 11 

let c = -9;
let d = c++;
console.log(c);//-8
console.log(d);//-9


let e = 0;
let f = e++;
console.log(e);//1
console.log(f);//0

//IQ : 
let g = 10;
console.log(g++); //10 --cox console.log will consume the immediate value of g and it has ++ at last so it updates the value by 1 later 
console.log(g);//11 --now in the memory it has increased the value by 1 so when we print a it will give 11 


//Pre-Incremental 

let i = 10;
let j = ++i;
console.log(i);//11
console.log(j);//11

//It will create i and j in the memory and give 10 first to a and then since it has ++i it will increase the value 
//first so now 10 becomes 11 for a and give the same to j so b comes 11 now 


let k = -1000;
let l = ++a;
console.log(k);//-999
console.log(l);//-999

//IQ: 
let h = 10;
console.log(++h);//11
console.log(h);//11


//Decremental 

//Post-Decremental: 
//Give the value first then decrease the value by 1   

let m = 9;
let n = k--;
console.log(m);//8
console.log(n);//9

//first it will create a two variable m and l in the memory and then give value to m as 9 and since n=m++ 
//it will give the value to l as 9 and post decrement will decrease the value by 1 so k will become 8 now 

let o = -999;
let p = o--;
console.log(o);//-1000
console.log(p);//-999

//IQ: 
let q = -100;
console.log(q--);//-100
console.log(q);//-101


//Pre-Decrement 
//decrease teh value first and then give the value 

let r = 10;
let s = --r;
console.log(r);//9
console.log(s);//9

//first it will create two variable and give 10 to r first and then since s=--r it will first descrease the valye of r
//first by 1 and then give the value of same to q so r =9 and s=9 

let t = -100;
let u = --t;
console.log(t);//-101
console.log(s);//-101

//IQ: 
let w = -20;
console.log(--w);//-21
console.log(w);//-21


//IQ: Practice Session
let pop = 10;
let num = pop++ + ++pop;
console.log(pop);
console.log(num);

//Create two variable in memory pop=10 and num and then check num=pop++ so it give 10 to num first and then increase 
//the value of pop to 11 and then now we can see normal + and then we have ++pop so increase the value of pop by 1 
//immediately so it will become 12 now so let num=10+12 =23 
//console.log pop is 12
//console.log num is 22

let van = 11;
let jeep = 22;
let veh = van + jeep + van++ + jeep++ + ++van + ++jeep;
console.log(van);//13
console.log(jeep);//24
console.log(veh);//103

//it will create 3 variables in memory van =11 jeep =22 and veh ...let veh = van + jeep (11 + 22 + 11) and since van++ 
//it has increase the value of van by 1 in memory so van is 12 now ...(11 + 22 + 11 + 22 ) since jeep++ 
//it has increase the value of jeep by 1 in memory so jeep is 23 now..(11 + 22 + 11 + 22 + ) since ++van 
//it has to increase the value of van by 1 first in memory so van is 13 now ...(11 + 22 + 11 + 22 + 13 + ) since ++jeep 
//it has to increase the value of jeep by 1 first in memory so jeep is 24 now...(11 + 22 + 11 + 22 + 13 + 24)=103



let tv = 0;
let remote = tv-- - --tv + ++tv - tv--;
console.log(tv);//-2
console.log(remote);//2

//it will create 2 variable in memory tv and give 0 and then rmeote =0 first ..let remote=tv-- so after giving 0
//it will decrease the value of 1 for tv so tv becomes -1 in memory now ..(0 - (-2) + )..it has ++tv now so increaste the
//value by 1 first so from -2 +1 it will be -1 in memory now ..(0-(-2) + (-1) - ) ...tv -- so decrease the valye by 1
//so in memory it becomes -2  ...(0-(-2) + (-1) - (-1))
//(2-1+1) //2




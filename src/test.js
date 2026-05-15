let year =2025;
year = 2025  + 25+ 60+ "janaki";
//console.log(typeof year);
console.log(year);


const num=[1,2,3];
console.log(num);
num.push(4)
console.log(num);



let num=[1,2,3,4,5]
num[10]=9;
console.log(num);//[ 1, 2, 3, 4, 5, <5 empty items>, 9 ]
num[-2]=20;
console.log(num[-1]);


num[-1]=20;
console.log(num);
console.log(num[-1]);
num[-10]=11;
console.log(num);



let products=["iphone 17","Macbook","Hp","Dell"];
products[-4]="Tv";
products[-1]="sun";
for(let i=-4;i<=products.length-1;i++){
    console.log(products[i]);
}



let pop=[];
console.log(pop.length);//0
console.log(typeof pop);//object
pop[100]=100;
console.log(pop);//[ <100 empty items>, 100 ]
console.log(pop.length);//101
console.log("-------------------------------");
pop[-1]=200;
console.log(pop);
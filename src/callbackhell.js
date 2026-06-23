//Callback Hell :
//=> Also called as Pyramid of Doom 

/*
Definition:
- Callback Hell occurs when multiple asynchronous functions are nested inside each other.
- This creates deeply nested code, often called the "Pyramid of Doom".
- Hard to read, debug, and maintain.
- Common in older JavaScript code (before Promises and async/await).
- Tools like Protractor used this style heavily.
*/

//Example :

function startMachine(callback) {
    setTimeout(() => {
        console.log("Machine started");
        callback();
    }, 2000)
}


function boilWater(callback) {
    setTimeout(() => {
        console.log("Water Boiled");
        callback();
    }, 3000)
}

function addCofeePowder(callback) {
    setTimeout(() => {
        console.log("Cofee Powder Added");
        callback();
    }, 4000)
}

function pourInCup(callback) {
    setTimeout(() => {
        console.log("Poured in Cup");
        callback();
    }, 2000)
}


function serveCofee(callback) {
    setTimeout(() => {
        console.log("Cofee Served");
        callback();
    }, 2000)
}


//Cofee Preparation : 

startMachine(() => {
    boilWater(() => {
        addCofeePowder(() => {
            pourInCup(() => {
                serveCofee(() => {
                    console.log("Your Cofee is Served. Enjoy it ............");
                })
            })
        })
    })
})


//all these is kinda a functions that is available in webpage ...like load logo load elements ..etc
//This is the old way of writing in javascript
//Protractor tool used this kind of codes
//This process is called Callback hell
//also called as Pyramid of Doom
// also called as Callback Chain
//To avoid this Modern Javascript uses Promises or Async/Awaits


/* Key Points:
- Each step depends on the previous step finishing.
- Nesting grows deeper with more steps → Pyramid of Doom.
- Difficult to scale when many async tasks are chained.
- Modern JavaScript avoids this using Promises or async/await.

---

 Terminology:
- Callback Hell
- Pyramid of Doom
- Callback Chain
*/

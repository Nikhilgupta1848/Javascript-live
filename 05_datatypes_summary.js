// Primitive 

// 7 types : String ,Number , Boolean , null , undefined ,symbol , BigInt

 const score = 100
 const scoreValue  = 100.3
 const isLoggedIn = false
 const outsideTemp = null
 let userEmail;

 const id = Symbol ('123')
 const anotherId = Symbol ('123')

// console.log(id === anotherId);

const bigNumber = 33333343654568n


// Reference type (Non Primitive)

// Array, Objects , Functions

const heros = ["Shaktiman", "nagraj" ,"Doga"]

let myObj ={
    name : "nikhil",
    age : 22,
}
const myFunctions = function() {
    console.log("Hello World");
    
}

console.log(typeof myFunctions);
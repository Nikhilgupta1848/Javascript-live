// Primitive 

// 7 types : String ,Number , Boolean , null , undefined ,symbol , BigInt

//  const score = 100
//  const scoreValue  = 100.3
//  const isLoggedIn = false
//  const outsideTemp = null
//  let userEmail;

//  const id = Symbol ('123')
//  const anotherId = Symbol ('123')

 // console.log(id === anotherId);

// const bigNumber = 33333343654568n





 // Reference type (Non Primitive)

 // Array, Objects , Functions

// const heros = ["Shaktiman", "nagraj" ,"Doga"]

// let myObj ={
//     name : "nikhil",
//     age : 22,
// }
// const myFunctions = function() {
//     console.log("Hello World");
    
// }

// console.log(typeof myFunctions);


//+++++++++++++++++++++++++++++++++++++++++++++++++++++

// Stack(Primitive) and Heap(Non-Primitive) Memory

let myYoutubename = "Nikhil"
let anothername = myYoutubename

anothername = "Nik"

console.log(myYoutubename);
console.log(anothername);

let userOne ={
    email : "nikhilkrkanti@gmail.com",
    upi : "nikhil@paytm"
}

let userTwo = userOne

userTwo.email = "nikhilkr9204@gmail.com"

console.log(userTwo.email);
console.log(userOne.email);
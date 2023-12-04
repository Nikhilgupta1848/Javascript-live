const user  = {
    username : "Nikhil",
    price : 999 ,

    welcomeMessage: function () {
        console.log(`${this.username} , welcome to website `);
        // console.log(this);
    }


}

// user.welcomeMessage()
// user.username = "ashrita"
// user.welcomeMessage()

// console.log(this);

// function crack (){
//     let username = " Nikhil "
//     console.log(this.username);
// }
// crack()


// const crack = function () {
//     let username = " NIkhil "
//     console.log(this.username);
// }


// crack()



const crack =  () => {
    let username = " NIkhil "
    console.log(this);
}
// crack()

// const addTwo = (num1, num2) => {
//     return num1 + num2
// }

// const addTwo = (num1, num2) => num1 + num2

// const addTwo = (num1, num2) => ( num1 + num2  )

const addTwo = (num1, num2) => ( {username : "hitesh"} )
console.log(addTwo(7, 9));



// const myArray = [2, 5, 6, 7, 8 ]

// myArray.forEach()
function sayMyName(params) {
    console.log("N");
    console.log("i");
    console.log("k");
    console.log("h");
    console.log("i");
    console.log("l");
    
}

// sayMyName()



// function addTwoNumber(n1,n2) {
    
//     console.log(n1 + n2);
// }


function addTwoNumber(n1,n2) {
    
    // let result = n1 + n2
    // return result
    return n1 + n2
}
const result = addTwoNumber(3,5)

// console.log("Result : ", result);

// `` - this implies string interpolation

function logiUserMessage(username = "nik") {
    if(!username ){
        console.log("Please enter a username");
         return
    }

    return `${username} just logged in`
    
}

// console.log(logiUserMessage("Nikhil"));
// console.log(logiUserMessage("niku"));




// VIdeo 2 of function

function calculateCartPrice(val1,val2, ...num1){
    return num1

}

// console.log(calculateCartPrice(200,300,400,2000));


const user ={
    username: "hitesh",
    price : 199
}

function handleObject(anyobject) {
    console.log(`Username is ${anyobject.username} and price is ${anyobject.price}`);
}


// handleObject(user)
handleObject({
    username: "hitesh",
    price : 199

})

const myNewArray = [200, 400, 100, 600]

function returnSecondvalue(getArray) {
    return getArray[1]
    
}

// console.log(returnSecondvalue(myNewArray));
console.log(returnSecondvalue([200, 400, 1000, 6000]));
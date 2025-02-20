// const tinderuser = new Object() // this is singleton object
const tinderuser = {} // this is non singleton object

tinderuser.id = "1ve20cs103"
tinderuser.name = "Nikhil"
tinderuser.isLoggedIn = false

// console.log(tinderuser);


const regularUser = {
    email : "nikhilkrkanti@gmail.com",
    fullname: {
        userfullname : {
            firstname : "Nikhil",      //unlimited object nesting
            Lastname : "kumar"
        }
    }
}
// console.log(regularUser.fullname.userfullname.firstname);

const obj1 = {1: "a", 2: "b"}
const obj2 = {3: "a", 4: "b"}
const obj4 = {5: "a", 6: "b"}

// const obj3 = {obj1, obj2}

// const obj3 = Object.assign({},obj1,obj2,obj4)
const obj3 = {...obj1,...obj2}
// console.log(obj3);

const users = [
    {
        id: 1,
        email: "nikhilkrkanti@gmail.com"
    },
    {
        id: 1,
        email: "nikhilkrkanti@gmail.com"
    },
    {
        id: 1,
        email: "nikhilkrkanti@gmail.com"
    },
]

users[1].email
console.log(tinderuser);

// console.log(Object.keys(tinderuser));
//  console.log(Object.values(tinderuser));
// console.log(Object.entries(tinderuser));

//  console.log(tinderuser.hasOwnProperty('isLoggedIn'));

const course = {
    coursename : "Js in hindi",
    price : "999",
    courseInstructor : "Hitesh"
}

// course.courseInstructor

const{courseInstructor : instructor} = course
// console.log(courseInstructor);
console.log(instructor);
/*++++++++++++++++++++++++++++++++++++++++++++++++++++++++++*/

// React mein aisa hota hai destructuring

// const navbar = ({company}) => {

// }

// navbar(company = "hitesh")
/*++++++++++++++++++++++++++++++++++++++++++++++++++++++++++*/



// ++++++++++++++++++++++++++++++++++++++++++++++++++++++++
// This is how json looks like 
// {
//    " name" : "Hitesh",
//    "coursename": "js in hindi",
//      "price" : "free"

// }

//+++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

[
    {},
    {},
    {}
]
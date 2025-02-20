// Singleton
// ye apni tarah ka ek hi object hai 


// Object.create


// Object literals 

const mySym = Symbol("Key1")

const JsUser = {
    name : "Nikhil",
    "full name" : "Nikhil Kumar",
     [mySym] : "Mykey1",
    age : 22,
    Location : "Bangalore",
    email : "nikhilkrkanti@gmail.com",
    isLoggedIn: false,
    lastLoginDays : ["Monday", "Sunday"]
}

// console.log(JsUser.email);
// console.log(JsUser["email"]);
// console.log(JsUser["full name"]);
// console.log( JsUser[mySym]);

JsUser.email = "Nikhilkr9204@gmail.com"
// Object.freeze(JsUser)
JsUser.email = "Nikhilkr9205@gmail.com"
// console.log(JsUser);

JsUser.greeting = function(){
    console.log("hello Js user");
}
JsUser.greetingTwo = function(){
    console.log(`hello Js user, ${this.name}`);
}
console.log(JsUser.greeting());
console.log(JsUser.greetingTwo());
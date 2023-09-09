// DATES

let myDate = new Date()
// console.log(myDate.toDateString());
// console.log(myDate.toLocaleDateString());
// console.log(myDate.toLocaleString());

// console.log(typeof myDate);

// let myCreateddate = new Date(2023 , 0 , 23)
// let myCreateddate = new Date(2023 , 0 , 23 , 5,3)
// let myCreateddate = new Date("2023-03-23")
let myCreateddate = new Date("01-15-2023")



// console.log(myCreateddate.toLocaleString());

let myTimeStamp = Date.now()

// console.log(myTimeStamp);
// console.log(myCreateddate.getTime());
// console.log(Math.floor(Date.now() / 1000));


let newDate = new Date()
console.log(newDate);
console.log(newDate.getMonth() + 1);
console.log(newDate.getDay());

// `${newDate.getDay()} and time `

newDate.toLocaleString('default',{
    weekday: "long" ,
})
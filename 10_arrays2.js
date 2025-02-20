const  names = ["nik" , "muk" ,"pranj" , "pratham"]
const lang = ["js" , "c" , "php", "java"]

//  names.push(lang)

//  console.log(names);
//  console.log(names[4][1]);// not a good way

// const namesandlang = names.concat(lang) 
// console.log(namesandlang); // its a good way

// const namesandandlang = [...names, ...lang]// spread operator

// console.log(namesandandlang);

// const nos = [1, 2, 3, [4, 5, 6], 7, [6, 7, [4, 5]]]

// const extrarray = nos.flat(Infinity)

// it  will show arrays in one single sqaure bracket

// console.log(extrarray);











console.log(Array.isArray("NIKHil"));
console.log(Array.from("Nikhil"));
console.log(Array.from({name: "hitesh"})); //interesting imp


let score1 = 100
let score2 = 200
let score3 = 300

console.log(Array.of(score1, score2, score3));
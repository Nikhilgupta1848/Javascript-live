//Arrays

const myArr = [0, 1, 2, 3, 4, 5]
const myHeros = ["Ironman" , "Nagraj"]

const myArray2  = new Array(1, 2, 3, 4)
// console.log(myArr[0]);

//Array Methods 

// myArr.push(6)
// myArr.push(7)
// myArr.pop() 

// myArr.unshift(9)
// myArr.shift()

// console.log(myArr.includes(9)); .// answer in true or false
// console.log(myArr.indexOf(3));
// console.log(myArr);

// const newArr = myArr.join()
// console.log(myArr);
// console.log(newArr);

// slice , splice

console.log("A ", myArr);

const myn1 = myArr.slice(1,3)

console.log(myn1);

console.log("B ",myArr);

const myn2 = myArr.splice(1,3)
console.log("C ",myArr);
console.log(myn2);

//major difference between slice and splice methods are if we use slice method there will be 
// no change in original array after that but whenever we use splice it will give 
// the spliced array after that when we try print the original array it will give the leftover index after splicing in original array 

/*A  output

[ 0, 1, 2, 3, 4, 5 ] ----- original array


slice ------------ [ 1, 2 ]

after slicing original array 
B  [ 0, 1, 2, 3, 4, 5 ]

 spliced array
C  [ 0, 4, 5 ]

after splicing original array 

[ 1, 2, 3 ] */
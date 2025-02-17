const accountId  = 144553
let accountEmail = "nikhilkrkanti@gmail.com"
var accountCity = "12345" // dont use var
accountCity = "jaipur"
let accountState;
// accountId = 2  not allowed because of const

accountEmail = "nik@gmail.comn"
accontPassword = "212121"
accountCity = "bengaluru"

console.log(accountId);

/*Note- prefer not to use var
 because of issue in block scope and functional scope

*/
console.table([accountEmail,accountId,accontPassword,accountCity,accountState])
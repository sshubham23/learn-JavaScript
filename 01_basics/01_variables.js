const accountId = 12345
let accountEmail = "ssa@amazon.com"
var accountPass = "098"
accountCity = "Jaipur"
let accountState

// accountId = 123 //Not Allowed as it's of const type
// console.log(accountId)

/* Scope:
var is function-scoped. If you declare a variable with var inside a function, it is accessible anywhere within that function.
let is block-scoped. If you declare a variable with let inside a block (e.g., within curly braces {}), it is only accessible within that block.
*/

console.table([accountId, accountEmail, accountPass, accountCity, accountState])
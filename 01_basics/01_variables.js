const accountId = 144553
let accountEmail = "vivek@gmail.com"
var accountPassword = "12345"
accountcity = "Jaipur"

//accountId = 2 // if u have declared constant accountid it can be declared again

accountEmail = "hc@gmail.com"
accountPassword = "21212121"
accountcity = "Bengaluru"
let accountstate

console.log(accountId);

/*
Prefer not to use var
because issue in block scope and functional scope
*/
console.table([accountId,accountEmail, accountPassword, accountcity, accountstate ])
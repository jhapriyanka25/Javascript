const accountId = 144765
let accountEmail = "priyanka7854@gmail.com"
var accountPassword = "12345"
accountCity = "gurgoan"
let accountState;
// accountId = 2 // not allowed
accountEmail = "hc@hc.com"
accountPassword = "987643"
accountCity = "delhi"
/*
prefer not to use var
beacause of issue in block scope and  functional scope
*/
console.log(accountId);
console.table([accountId, accountEmail, accountPassword,accountCity])
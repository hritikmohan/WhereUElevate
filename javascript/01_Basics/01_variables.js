const accountId = 45567
let accountEmail = "hritik@gmail.com"
var accountPassword = "1234"
accountCity = "Raipur"
{
    let accountEmail = "hm.gmail.com"
    console.log(accountEmail);
    
}
console.table([accountId, accountEmail, accountPassword, accountCity])

/*
Prefer not to use var because of issue in block scope and functional scope
*/
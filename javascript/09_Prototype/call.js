function SetUserName(userName){
    this.userName = userName;                       // This context will remove when the function SetUserName exits call stack
}

function createUser(userName, age, gender){
    // SetUserName(userName);                          // This will not set userName as the function cannot refer to current context
    SetUserName.call(this, userName);                   // to overcome above issue, .call() method is used

    this.age = age;
    this.gender = gender;
}

const newUser = new createUser("Hritik", 25, "Male");
console.log(newUser);

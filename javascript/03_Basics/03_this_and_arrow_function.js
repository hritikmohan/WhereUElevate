const user = {
    username : "hrtik",
    age : 25,
    message : function(){
        // console.log(`${user.username}, Welcome to the club`);       // ok, but will always refer user.username if message function is assigned to other object
        console.log(`${this.username}, Welcome to the club`);           // refers to the current context/instance-output: hrtik, Welcome to the club
        console.log(this);                                             // { username: 'hrtik', age: 25, message: [Function: message] }
        
    }
}

user.message();
console.log(this);                                                      // {}

const chai = function(){
    let username = "hritik";
    console.log(this.username);                                         // undefined, no this reference in function
    console.log(this);                                               // the value of this inside the function would typically refer to the global
                                                                        //object (window in browsers or global in Node.js)                              
}

chai();                                                                 // undefined

const code = ()=>{
    let username = "hritik";
    console.log(this.username);                                         // undefined, no this reference in function
    console.log(this);                                                  // {}
}

code();

const add = (num1, num2) => {
    return num1+num2;
}
console.log(add(2, 6));                                                 // 8

const add1 = (num1, num2) => num1+num2;
console.log(add1(2, 6));                                                 // 8

const add2 = (num1, num2) => (num1+num2);
console.log(add1(2, 6));                                                 // 8

const fun = () => ({name : "Hritik"})
console.log(fun());                                                      // { name: 'Hritik' }, returning object

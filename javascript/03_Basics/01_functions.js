function myfun(){
    console.log("Hello World");
    console.log("Hello World");
    console.log("Hello World");
    console.log("Hello World");
}

console.log(myfun);                                 // [Function: myfun]
myfun();

function sum(num1, num2){
    console.log(num1+num2);
}

sum(3, 4);                                          // 7
sum(3, "4");                                        // 34    
sum(3, "a");                                        // 3a
sum(3, null);                                       // 3

function sum1(num1, num2){
    let result = num1+num2;
    return result;
}

console.log(sum1(5, 7));                            // 12

function sum1(num1, num2){
    return num1+num2;
}

console.log(sum1(9, 7));                            // 16

const result = sum1(2, 4);
console.log("Result: ", result);                    // Result:  6

function print(name){
    return `${name} is an engineer`
}

console.log(print("Hritik"));                       // Hritik is an engineer

function print1(name){
    if(!name){
        console.log("Please enter a name");
        return;
    }
    return `${name} is an engineer`
}

console.log(print());                                // undefined is an engineer

function show(name = "Somu"){
    if(!name){
        console.log("Please enter a name");
        return;
    }
    return `${name} is an engineer`
}

console.log(show());                                // Somu is an engineer

// passing multiple arguments for single parameter
// SPREAD and REST

function myfunction(num){
    return num;
}

console.log(myfunction(200));                       // 200
console.log(myfunction(200, 300, 400));             // 200

function fun(var1, var2, ...num){
    return num;
}

console.log(fun(200, 300, 400, 500, 600));                    // [ 400, 500, 600 ]

// passing object to a function
function passObject(obj){
    console.log(`My name is ${obj.name} and I'm ${obj.age} years old.`);
    return;   
}

const object = {
    name: "Hritik",
    age: 25,
}

passObject(object);                                 // My name is Hritik and I'm 25 years old.


// passing array to function
function passArray(array){
    return array[2];
}

const arr = [2, 3, 4, 5, 6, 7]

console.log(passArray(arr));                        // 4

var a = 10
let b = 20
const c = 30

console.log(a);                 // 10
console.log(b);                 // 20
console.log(c);                 // 30

if(true){
    a = 1
    console.log(a);             // 1

    b = 2
    console.log(b);             // 2

    // c = 3
    console.log(c);             // TypeError: Assignment to constant variable.

    var d = 100
    let e = 200
    const f = 300
    
    console.log(d);             // 100
    console.log(e);             // 200
    console.log(f);             // 300
}

console.log(d);             // 100
// console.log(e);                 // ReferenceError: e is not defined
// console.log(f);                 // ReferenceError: f is not defined

console.log(add(5, 4));             // 9


function add(num1, num2){
    return num1+num2;
}



const sum = function addTwo(num1, num2){
    return num1+num2
}

console.log(sum(1, 2));                 // 3
// console.log(addTwo(1, 2));           // Reference Error, function name 'addTwo' is only available within the function itself (for recursion or debugging purposes)
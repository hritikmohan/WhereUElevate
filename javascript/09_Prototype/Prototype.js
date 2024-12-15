let testObj = {
    userName: "Hritik",
    age: 25,
}

console.log(testObj.age);

// Adding a function to prototype of Object shows that everything in JS is derived from Object.
Object.prototype.showAge = function(){
    console.log(`${this.userName}'s age is ${this.age}`);
}

console.log(testObj.showAge());

Object.prototype.demo = function(){
    console.log(`This is a demo function added to Object. Call it from anything. ${this}`);
    return 0;
}

Object.prototype.demo1 = function(){
    console.log("Demo 2 function call");
    return "";
}

const arr = [24, 22, 11, 33]
arr.demo();

const str = "This is a demo string";
console.log(str.demo());

let x = 2;
console.log(`x is calling: ${this.demo1()}`);


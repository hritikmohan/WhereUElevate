// Immediately Invoked Function Expression (IIFE)

(function code() {
    // named iife
    console.log("Hello World");
})();

// (function definition)()  ----> function call

((name)=>{
    // iife with arrow function and parameters
    console.log(`${name} is a teacher`);
})("hitesh")
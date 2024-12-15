const arr = ["One", "Two", "Three", "Four", "Five", "Six"];

const obj = {
    name: "Car",
    model: "Verna",
    company: "Hyundai",
    year: "2020",
};

const map = new Map();
map.set('In', "India");
map.set('USA', "America");
map.set('Aus', "Australia");

let str = "Hello, how are you?";

for(let elem of arr){
    console.log(`${elem} is an array element`);
}

// for (const prop of obj) {   
//     console.log(`${prop} is an object property`);               // TypeError: obj is not iterable
// }

for (const [key] of map) {
    console.log(`${key} -> ${map.get(key)}`);
}

for (const substr of str) {
    console.log(`${substr} is substring of string`);
}
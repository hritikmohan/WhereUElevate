// Literals are faster as compared to new
const arr = [1, 2, 3, 4, 5, 6, 7]

const arr1 = [2, 55.55, "Hritik", ['a', 'b', 'c']]

console.log("arr", arr);
console.log("arr1", arr1);



const myarr = new Array(1,2,3)
console.log("myarr ", myarr);
console.log(myarr.length);


// ARRAY METHODS

arr.push(8)
console.log("arr", arr);

arr.pop()
console.log("arr", arr);

arr.unshift(9)
console.log("arr", arr);

arr.unshift(11, 15)
console.log("arr", arr);

arr.shift()
console.log("arr", arr);

console.log(arr.includes(5));
console.log(arr.indexOf(6));
// console.log(arr.entries());
console.log(arr.toString());
console.log(arr.toLocaleString());
console.log(arr.sort());
console.log(arr.join('-'));

// join allows to give a separator between elements while toString don't
console.log("arr", arr);
console.log("slice", arr.slice(2,5));
console.log("splice", arr.splice(2,5, "hritik"));     // splice(start, count, optional(items ot be added))
console.log("arr", arr);

const marvel = ["Ironman", "Thor", "Spiderman"]
const dc = ["Batman", "Flash", "Superman"]

marvel.push(dc)
console.log(marvel);     // [ 'Ironman', 'Thor', 'Spiderman', [ 'Batman', 'Flash', 'Superman' ] ]

marvel.pop();

console.log(marvel.concat(dc));                       // [ 'Ironman', 'Thor', 'Spiderman', 'Batman', 'Flash', 'Superman' ]
console.log(marvel);                                  // [ 'Ironman', 'Thor', 'Spiderman' ]   ---> original array will not be modified

const heroes = [...marvel, ...dc]                     // [ 'Ironman', 'Thor', 'Spiderman', 'Batman', 'Flash', 'Superman' ]   ----> Since all arrays are spread
console.log(heroes);

const array = [1, 2, 3, [4, [5, 6, [5, 6], 6, 7], 8]]
const newArray = array.flat(2);                       
console.log(newArray);                                // [ 1, 2, 3, 4, 5, 6, [ 5, 6 ], 6, 7, 8 ] defines depth ----> default is 1

console.log(Array.isArray("Hritik"));                 // false
console.log(Array.from("Hritik"));                    // [ 'H', 'r', 'i', 't', 'i', 'k' ]
console.log(Array.from({name:"Hritik"}));             // []

let score1 = 100;
let score2 = 200;
let score3 = 300;
let str = "mohan"

console.log(Array.of(score1, score2, score3, str, "shukla"));        // [ 100, 200, 300 ]

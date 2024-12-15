// ARRAY FILTER

const arr = [1,2,3,4,5,6,7,8,9,10];

const newArr = arr.filter((item)=>{return item<5});
console.log(newArr);

const newArr1 = arr.filter((item)=> item<5);
console.log(newArr1);

const newArr2 = arr.filter((item)=> (item<5));
console.log(newArr2);



// ARRAY MAP

let newNum = arr.map((item)=>item*10).map((item)=>item+5);
console.log(newNum);

newNum = arr.map((item)=>item*10).map((item)=>item+5).filter((item)=>item>65);
console.log(newNum);


// ARRAY REDUCE

//const initialValue = x;                   // this x goes into accumulator, then accumulator adds the values in it
// Array.reduce((accumulator, currentValue)=>accumulator+currentValue, initialValue);

console.log("REDUCE");
const initialValue = 0;
const ans = arr.reduce((accumulator, currentValue) => accumulator+currentValue, initialValue);
const ans1 =arr.reduce((acc, currVal) => {
    console.log(`acc -> ${acc}, currVal -> ${currVal}`);
    return acc*currVal;    
}, 1)

console.log(ans);
console.log(ans1);
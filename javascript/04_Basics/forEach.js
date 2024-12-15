const nums = ["One", "Two", "Three", "Four", "Five", "Six"];

nums.forEach(function (item){
    console.log(item);
    
})

// ARROW FUNCTION
nums.forEach((item) => {
    console.log("-------");
    console.log(item);  
})

const num = [1, 2, 3, 4, 5]
let total = 0;
function sum(numsItem){
    total+=numsItem;
    console.log(total);
}

num.forEach(sum);
console.log(total);

const data = [
    {
        lang: "Javascript",
        file: "js"
    },
    {
        lang: "Python",
        file: "py"
    },
    {
        lang: "Java",
        file: "java"
    }
];

data.forEach((item) => {
    console.log(`'${item.lang}' has file name '${item.file}'.`);
})
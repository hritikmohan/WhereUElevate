// const promiseOne = new Promise(function (resolve, reject) {
//   setTimeout(function () {
//     console.log("Promise initiated");
//   }, 2000);
//   resolve();
// });





// promiseOne.then(function () {
//   console.log("Promise fulfilled");
// });

new Promise(function(resolve, reject){
    let error = false;
    if(!error){
        const sum = 2+2;
        console.log("Sum defined");
        resolve(sum);
    }
    else{
        console.log();
        reject('Error: ----------------')
    }
}).then(function(sum){
    console.log(sum);
}).then(()=>console.log('Arrow')
).catch(function(error){
    console.log(error);
}).finally(()=>console.log('Jo hua theek hua!!!')
)

// Similarly promises can be handled using 'async-await'

const promiseTwo = new Promise(function(resolve, reject){
    let error = false;
    if(!error){
        resolve({userName:'Hritik', age:25})
    }
    else{
        reject('ERROR : - - - - - - -')
    }
})

async function consumePromise(){
    try{
        const response = await promiseTwo;
        console.log(response);
    }catch(error){
        console.log(error);
    }
}
consumePromise();


// object literal

const mysym = Symbol("KeyNoted");

const num = 10;                                     // value is assigned to variable 'num'
const user = {                                      // object reference is assigned to 'user'
    name: "Hritik",                                 // properties by default considered string
    "full name": 'Hritik Mohan',
    [mysym]: "Key1",                                // Symbol is used with []
    age: 25,
    location: "Bareilly",
    email: "hritik@gmail.com",
    isLoggedIn: false,
    loginDays: ["Monday", "Wednesday", "Friday"],
}

console.log(typeof user);                           // object

console.log(user.email);
console.log(user["email"]);
console.log(user["full name"]);
console.log(user.mysym);                            // undefined
console.log(user[mysym]);

user.email = "hritik@yahoo.com"
console.log(user.email);
// Object.freeze(user);                                // no changes are allowed now
user.email = "hritik@hotmail.com"
console.log(user);

user.greeting = function(){
    console.log("Hello Morning");
}

user.greeting2 = function(){
    console.log(`Hello, I'm ${user["full name"]}`);
    console.log(`Hello, I'm ${this["full name"]}`);
}

console.log(user.greeting);                             // [Function (anonymous)]
console.log(user.greeting());                           // printing undefined because function in js implicitly return undefined if no explicit return
user.greeting();                                        // no undefined because return value not printed

user.greeting2();


// singleton
const tinder = new Object()
console.log(tinder);

tinder.id = "123ab";
tinder.name = "Robert";
tinder.isLoggedIn = false;

console.log(tinder);

const regularUser = {
    email: "someone@gmail.com",
    fullname:{
        userFullName:{
            firstName: "Robert",
            lastName: "D'Costa",
        }
    }
}

console.log(regularUser.fullname.userFullName);
console.log(regularUser.fullname.userFullName.lastName);

const obj1 = {1:"a", 2:"b"};
const obj2 = {3:"a", 4:"b"};
const obj3 = {5:"a", 6:"b"};

const obj4 = Object.assign({}, obj1, obj2, obj3)                             // Assigns obj1, obj2, obj3 to new object
console.log(obj4);                                                          // { '1': 'a', '2': 'b', '3': 'a', '4': 'b', '5': 'a', '6': 'b' }
console.log(obj1);                                                          // { '1': 'a', '2': 'b' }

const obj5 = Object.assign(obj1, obj2, obj3)                                // Assigns obj2, obj3 to obj1
console.log(obj5);                                                          // { '1': 'a', '2': 'b', '3': 'a', '4': 'b', '5': 'a', '6': 'b' }
console.log(obj1);                                                          // { '1': 'a', '2': 'b', '3': 'a', '4': 'b', '5': 'a', '6': 'b' }

const obj6 = {...obj2, ...obj3}
console.log(obj6);                                                          // { '3': 'a', '4': 'b', '5': 'a', '6': 'b' }

console.log(tinder);                                                        // { id: '123ab', name: 'Robert', isLoggedIn: false }
console.log(Object.keys(tinder));                                           // [ 'id', 'name', 'isLoggedIn' ]
console.log(Object.values(tinder));                                         // [ '123ab', 'Robert', false ]
console.log(Object.entries(tinder));                                        // [ [ 'id', '123ab' ], [ 'name', 'Robert' ], [ 'isLoggedIn', false ] ]
console.log(tinder.hasOwnProperty('isLoggedIn'));



// OBJECT DESTRUCTURING
const course = {
    id: 123,
    courseName: "Js in Hindi",
    courseInstructor: "Hritik"
};

console.log(course.courseInstructor);

const {courseInstructor} =  course;
console.log(courseInstructor);

const {courseInstructor:instructor} =  course;
console.log(instructor);

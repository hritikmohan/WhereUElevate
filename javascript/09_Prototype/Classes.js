class User{
    constructor(userName, age, password){
        this.userName = userName;
        this.age = age;
        this.password = password;
    }

    encryptPassword(){
        return `!@#${this.password}^&*`
    }

    changeUserCase(){
        return `${this.userName.toUpperCase()}`
    }
}

const user1 = new User("Hritik", 25, "jkbsjh");
console.log(user1.encryptPassword());
console.log(user1.changeUserCase());

const user2 = new User("Shubham", 27, "vknfdlkv");
console.log(user1.encryptPassword());
console.log(user2.changeUserCase());


// BEHIND THE SCENES
// below function shows the behind the scenes working of classes in JS
// it shows that classes are based on function objects

function User(userName, age, password){
        this.userName = userName;
        this.age = age;
        this.password = password;
}

User.prototype.encryptPassword = function(){
    return `!@#${this.password}^&*`;
}

User.prototype.changeUserCase = function(){
    return `${this.userName.toUpperCase()}`;
}
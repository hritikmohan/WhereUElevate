class User{
    constructor(userName){
        this.userName = userName;
    }

    logName(){
        console.log(`UserName is`, this.userName);
    }
}

class Agent extends User{
    constructor(userName, age, remark){
        super(userName);
        this.age = age;
        this.remark = remark;
    }

    addOn(){
        console.log(`This addon is by ${this.userName}`);
    }
}

const chai = new User("Chai");
chai.logName()

const coffee = new Agent("Coffee", 35, "OK")
coffee.logName();

console.log(chai instanceof User);
console.log(chai instanceof Agent);
console.log(coffee instanceof User);
console.log(coffee instanceof Agent);

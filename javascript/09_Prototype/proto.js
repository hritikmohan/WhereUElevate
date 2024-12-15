const car = {
    body: "Metal"
}
console.log(car);

const bike = {
    wheels: 2,
}
console.log(bike);

const vehicleSpecs = {
    function: "Drives",
    fuel: "Petrol"
}

const scooter = {
    type: "gearless",
    __proto__: vehicleSpecs                     // Prototyple inheritanc: properties of one object can be used in other --> Outdated
}

console.log(scooter.function);


bike.__proto__ = vehicleSpecs;
console.log(bike.function);


Object.setPrototypeOf(car, vehicleSpecs)                // Similar to __proto__ 
console.log(car.fuel);


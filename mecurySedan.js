//this includes the vehicle class as a module
const VehicleModule = require("./vehicleBaseClass")

//this shows how to call from this module...
/*
let v = new VehicleModule.Vehicle("Mecury", "Sedan", "1965", "color", "mileage");
console.log(v.make)
*/

//I can't rely on node.js, since I have Windows, but for this project I'll pretend

class Car extends VehicleModule.Vehicle {
    constructor (make, model, year, color, mileage, maximumPassengers, passenger, numberOfWheels, maximumSpeed, fuel, scheduleService) {
        super(make, model, year, color, mileage)
        this.maximumPassengers = maximumPassengers
        this.passenger = passenger
        this.numberOfWheels = numberOfWheels
        this.maximumSpeed = maximumSpeed
        this.fuel = fuel
        this.scheduleService = scheduleService
    }

    loadPassenger(num) {

    }

    start() {

    }

    scheduleService(mileage) {

    }
}



let aTwentyEight = new Car("Mecury", "Sedan", "1965", "blue", 200000, 5, 0, 4, 160, 10, false)

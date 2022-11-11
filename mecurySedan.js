//this includes the vehicle class as a module
const VehicleModule = require("./vehicle.js")

//this shows how to call from this module...
/*
let v = new VehicleModule.Vehicle("Mecury", "Sedan", "1965", "color", "mileage");
console.log(v.make)
*/

//I can't rely on node.js, since I have Windows, but for this project I'll pretend

class Car extends VehicleModule.Vehicle {
    constructor (make, model, year, color, mileage, passenger, maximumSpeed, fuel) {
        super(make, model, year, color, mileage)
        this.passenger = passenger
        this.maximumSpeed = maximumSpeed
        this.fuel = fuel
        this.maximumPassengers = 5
        this.numberOfWheels = 4
        this.scheduleServices = false
        this.availableRoom = null
        this.startUp = null
        this.timeForMaintenance = null
    }

    loadPassenger(num) {
        this.passenger += num
        if (this.passenger <= this.maximumPassengers) {
            this.availableRoom = true
        } else {
            this.availableRoom = false
        }
        return this.availableRoom
    }

    start() {
        if (this.fuel > 0) {
            this.startUp = true
        } else {
            this.startUp = false
        }
        return this.startUp
    }

    scheduleService(mileage) {
        this.mileage = mileage
        if (this.mileage > 30000) {
            this.timeForMaintenance = true
        } else {
            this.timeForMaintenance = false
        }
        if (this.timeForMaintenance === true) {
            this.scheduleServices = true
            return this.scheduleServices
        }
        return this.timeForMaintenance
    }
}



let aTwentyEight = new Car("Mecury", "Sedan", "1965", "blue", 200000, 0, 160, 10)

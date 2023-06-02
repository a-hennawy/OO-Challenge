class Vehicle {
  constructor(make, model, year) {
    this.make = make;
    this.model = model;
    this.year = year;
    // const { make, model, year } = this; // does deconstructing work?
  }
  honk() {
    return "Beeeep!";
  }
  toString() {
    const { make, model, year } = this;
    return `This vehicle is a ${make + " " + model} from ${year}`;
  }
}

class Car extends Vehicle {
  constructor(make, model, year) {
    super(make, model, year);
    this.numWheels = 4;
  }
}
class MotorCycle extends Vehicle {
  constructor(make, model, year) {
    super(make, model, year);
    this.numWheels = 2;
  }
  revEngine() {
    return "VROOM!";
  }
}
class Garage {
  constructor(capacity) {
    this.capacity = capacity;
    this.vehicle = [];
  }
  add(newVehicle) {
    const { capacity, vehicle } = this;
    if (!(newVehicle instanceof Vehicle)) {
      return "Only vehicles are accepted";
    }
    if (vehicle.length >= capacity) {
      return "Sorry we reached full capacity";
    }
    vehicle.push(newVehicle);
    return `your ${newVehicle.model} was added successfully`;
  }
}

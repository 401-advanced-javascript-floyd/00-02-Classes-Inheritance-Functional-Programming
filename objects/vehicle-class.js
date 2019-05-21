'use strict';
class Vehicle {
  constructor(wheels) {
    this.wheels = wheels;
  }
  
  stop() {
    return 'Stopping';
  }

  drive() {
    return 'Moving Forward';
  }
}
class Car extends Vehicle {

  constructor(wheels) {
    super(wheels);
  }


  stop() {
    return 'Stopping';
  }
}


class Motorcycle extends Vehicle {

  // When creating a new animal, store it's name
  constructor(wheels) {
    super(wheels);
  }
  wheelie(){
    return 'Wheee!';

  } 
  // All animals can walk.  This will be a prototype method


}
new Motorcycle(2);
new Car(4);
module.exports = { Car, Motorcycle };
// let helper = (module.exports = {});

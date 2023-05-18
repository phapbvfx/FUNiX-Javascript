"use strict";
//13.1, 13.3
const Car = function (speed, make) {
  this.make = make;
  this.speed = speed;

  // this.accelerate = function () {
  //   this.speed += 10;
  //   console.log("Your speed is ", this.speed, " km/h");
  // };
  // this.brake = function () {
  //   this.speed -= 5;
  //   console.log("Your speed is ", this.speed, " km/h");
  // };
};

const BMW = new Car(120, "BMW");
const Mercedes = new Car(95, "Mercedes");

Car.prototype.accelerate = function () {
  this.speed += 10;
  console.log("Your speed is ", this.speed, " km/h");
};
Car.prototype.brake = function () {
  this.speed -= 5;
  console.log("Your speed is ", this.speed, " km/h");
};

BMW.accelerate();
BMW.brake();

Mercedes.accelerate();
Mercedes.brake();

const EV = function (speed, make, charge) {
  Car.call(this, speed, make);
  this.charge = charge;
};

EV.prototype = Object.create(Car.prototype);

EV.prototype.chargeBattery = function (chargeTo) {
  this.charge = chargeTo;
};

EV.prototype.accelerate = function () {
  this.speed += 20;
  this.charge--;
  console.log(
    `${this.make} going at ${this.speed} km/h, with a charge of ${this.charge} %`
  );
};

const tesla = new EV(120, "Tesla", 23);
console.log(tesla);
tesla.accelerate();
tesla.brake();
tesla.chargeBattery(90);

//13.2, 13.4 ES6
// 13.2
class CarCl {
  constructor(speed, make) {
    this.speed = speed;
    this.make = make;
  }

  accelerate() {
    this.speed += 10;
    console.log("Your speed is ", this.speed), " km/h";
  }
  brake() {
    this.speed -= 5;
    console.log("Your speed is ", this.speed), " km/h";
  }

  /**
   * @param {number} speedUS
   */
  set SpeedUs(speedUS) {
    this.speed = speedUS * 1.6;
  }

  get SpeedUS() {
    return this.speed / 1.6;
  }
}

const BMWCl = new CarCl(120, "BMW");

BMWCl.accelerate();
BMWCl.brake();
BMWCl.SpeedUs = 300;
console.log(BMWCl.SpeedUS);

const MercedesCl = new CarCl(120, "BMW");
MercedesCl.accelerate();
MercedesCl.brake();
MercedesCl.SpeedUs = 120;
console.log(MercedesCl.SpeedUS);

//13.4
class EVCl extends CarCl {
  #charge;
  // static number = 10;
  constructor(speed, make, charge) {
    super(speed, make);
    this.#charge = charge;
  }

  chargeBattery(chargeTo) {
    this.#charge = chargeTo;
  }

  accelerate() {
    this.speed += 20;
    this.#charge--;
    console.log(
      `${this.make} going at ${this.speed} km/h, with a charge of ${
        this.#charge
      } %`
    );
  }
  getNumber() {
    return this.number;
  }
}

const rivian = new EVCl(120, "Rivian", 23);
console.log(rivian);
// console.log(rivian.#charge);
// console.log(rivian.getNumber());
rivian.accelerate();
rivian.brake();
rivian.chargeBattery(90);

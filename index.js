const student = {
  fullName: "omkarkakkad",
  marks: 94,

  printMarks: function () {
    console.log("marks = ", this.marks);
  },
};

const employee = {
  calcTax() {
    console.log("tax rate is 10%");
  },
};

class ToyotaCar {
  constructor(brand) {
    console.log("creating new object");
    this.brand = brand;
    this.mileage = mileage;
  }
  start() {
    console.log("start");
  }

  stop() {
    console.log("stop");
  }
}

let fortuner = new ToyotaCar("fortuner", 10);
console.log(fortuner);
let innova = new ToyotaCar("innova", 20);
console.log(innova);

class Parent {
  hello() {
    console.log("hello");
  }
}

class Child extends Parent {}

// let obj = new Child();

class Person {
  constructor() {
    this.species = "homo sapiens";
  }
  eat() {
    console.log("eat");
  }

  sleep() {
    console.log("sleep");
  }
}

class Engineer extends Person {
  work() {
    console.log("build something");
  }
}

class Doctor extends Person {
  work() {
    console.log("treat patients");
  }
}

let omkarObj = new Engineer();

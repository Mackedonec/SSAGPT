"use strict";
// Task 1 & 2 & 3

const firstUser = {
  name: "Bob",
  age: 12,
  id: 1,
};
const secondUser = {
  name: "Bib",
  age: 52,
  email: "somemail@nomail.net",
  id: 2,
};
console.log(firstUser);
console.log(secondUser);
console.log(secondUser.id);
const addFunc = (x, y) => {
  return x + y;
};
const multiplyFunc = (x, y) => {
  return x * y;
};
console.log(addFunc(10, 25));
console.log(multiplyFunc(10, 25));
const employeeBub = {
  name: "Bub",
  age: 22,
  email: "somemail2@nomail.net",
  id: 1,
  salary: 2500,
};
console.log(employeeBub);
const workerBib = {
  name: "Bib",
  role: "chief",
};
class Car {
  brand;
  model;
  type;
  year;
  // brand: string;
  // model: string;
  // type: string;
  // year: number;
  // constructor(brand: string, model: string, type: string, year: number) {
  //   this.brand = brand;
  //   this.model = model;
  //   this.type = type;
  //   this.year = year;
  // }
  constructor(brand, model, type, year) {
    this.brand = brand;
    this.model = model;
    this.type = type;
    this.year = year;
  }
  getInfo() {
    return `Car: ${this.brand} ${this.model} Type: ${this.type} Year: ${this.year}`;
  }
}
const myBMW = new Car("BMW", "V55", "electro", 2026);
console.log(myBMW.getInfo());
// Task 9
class ChinaCar {
  brand;
  model;
  type;
  year;
  manufacture;
  constructor(brand, model, type, year, manufacture) {
    this.brand = brand;
    this.model = model;
    this.type = type;
    this.year = year;
    this.manufacture = manufacture;
  }
  getInfo() {
    return `Car: ${this.brand} ${this.model} Type: ${this.type} Year: ${this.year} Manufacturer: ${this.manufacture}`;
  }
}
const myFakeBMW = new ChinaCar("BMW", "V55", "electro", 2026, "China");
console.log(myFakeBMW.getInfo());
// console.log(myFakeBMW.manufacture);
// myFakeBMW.manufacture = "Germany";
// Error: Property 'manufacture' is private and only accessible within class 'ChinaCar'.
// Task 10
class BankAccount {
  _balance = 0;
  constructor(initialBalance) {
    this.balance = initialBalance;
  }
  get balance() {
    return this._balance;
  }
  set balance(newValue) {
    if (newValue < 0) {
      return;
    }
    this._balance = newValue;
  }
  deposit(amount) {
    if (amount <= 0) {
      console.error("Сума депозиту має бути більшою за нуль");
      return;
    }
    this.balance += amount;
    console.log(`Поповнено на ${amount}. Поточний баланс: ${this.balance}`);
  }
  withdraw(amount) {
    if (amount <= 0) {
      console.error("Сума зняття має бути більшою за нуль");
      return;
    }
    const previousBalance = this.balance;
    this.balance -= amount;
    if (this.balance === previousBalance) {
      console.error("Зняття відхилено: недостатньо коштів.");
    } else {
      console.log(`Знято ${amount}. Залишок: ${this.balance}`);
    }
  }
}
const myAccount = new BankAccount(100);
console.log(`Мій баланс: ${myAccount.balance}`);
myAccount.balance = 500;
myAccount.balance = -200;
myAccount.deposit(200);
myAccount.withdraw(200);
myAccount.withdraw(2000);
console.log(`Мій баланс: ${myAccount.balance}`);
// Task 11 & 12 & 13 & 14
class NewUser {
  firstName;
  lastName;
  age;
  constructor(firstName, lastName, age) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.age = age;
  }
  userInfo() {
    console.log(
      `This is ${this.firstName} ${this.lastName}, ${this.age}'s old`,
    );
  }
}
class Admin extends NewUser {
  role;
  constructor(firstName, lastName, age, role) {
    super(firstName, lastName, age);
    this.role = role;
  }
  userInfo() {
    console.log(
      `This is ${this.firstName} ${this.lastName}, ${this.age}'s old, our ${this.role}`,
    );
  }
}
class Animal {
  name;
  constructor(name) {
    this.name = name;
  }
  breathe() {
    console.log(`${this.name} дихає...`);
  }
}
// const test = new Animal("Хтось");
// Error: Cannot create an instance of an abstract class.
class Dog extends Animal {
  makeSound() {
    console.log(`${this.name} каже: Гав-гав!`);
  }
}
class Cat extends Animal {
  makeSound() {
    console.log(`${this.name} каже: Мяу!`);
  }
}
const myDog = new Dog("Сірко");
myDog.breathe();
myDog.makeSound();
const myCat = new Cat("Мурко");
myCat.breathe();
myCat.makeSound();
function interactWithAnimal(animal) {
  animal.breathe();
  animal.makeSound();
  if (animal instanceof Dog) {
    console.log(`${animal.name} виляє хвостом!`);
  }
  if (animal instanceof Cat) {
    console.log(`${animal.name} мурчить...`);
  }
}
interactWithAnimal(myDog);
interactWithAnimal(myCat);
// Task 17
function getData(data) {
  if (typeof data === "string") {
    return data.split(" ").join(", ").toUpperCase();
  } else {
    return data * 2;
  }
}
console.log(getData("Twenty and two"));
console.log(getData(20.2));
const myPhone = {
  brand: "Apple",
  model: "iPhone 15",
  wifiPassword: "123noguest",
  isConnected: true,
  powerOn() {
    console.log(`${this.brand} вмикається...`);
  },
  connectToNetwork(password) {
    if (password === this.wifiPassword) {
      console.log(`Підключення ${this.model} до мережі...`);
    } else {
      console.log(
        `Підключення ${this.model} до мережі скасовано. Невірний пароль...`,
      );
    }
  },
};
myPhone.powerOn();
myPhone.connectToNetwork("123");
class BaseUser {
  id;
  userName;
  email;
  constructor(id, userName, email) {
    this.id = id;
    this.userName = userName;
    this.email = email;
  }
  getRole() {
    return "User";
  }
  getContactInfo() {
    return `Користувач: ${this.userName}, Email: ${this.email}`;
  }
}
class NewAdmin extends BaseUser {
  permissions;
  constructor(id, userName, email, permissions) {
    super(id, userName, email);
    this.permissions = permissions;
  }
  getRole() {
    return `Admin (Доступи: ${this.permissions.join(", ")})`;
  }
  checkSecurity() {
    console.log(`Перевірка безпеки для ${this.email}... Доступ дозволено.`);
  }
}
const commonUser = new BaseUser(1, "ivan_petrov", "ivan@mail.com");
const superAdmin = new NewAdmin(99, "admin_boss", "boss@corp.com", [
  "delete_users",
  "edit_content",
]);
console.log(commonUser.getRole());
console.log(commonUser.getContactInfo());
console.log(superAdmin.getRole());
console.log(superAdmin.getContactInfo());
superAdmin.checkSecurity();
// commonUser.checkSecurity();
// Error: Property 'checkSecurity' does not exist on type 'BaseUser'.

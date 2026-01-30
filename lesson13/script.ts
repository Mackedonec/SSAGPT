// Task 1 & 2 & 3

interface Users {
  name: string;
  age: number;
  email?: string;
  readonly id: number;
}

const firstUser: Users = {
  name: "Bob",
  age: 12,
  id: 1,
};
const secondUser: Users = {
  name: "Bib",
  age: 52,
  email: "somemail@nomail.net",
  id: 2,
};

console.log(firstUser);
console.log(secondUser);
console.log(secondUser.id);
// secondUser.id = 12;
// console.log(secondUser.id);
// Error: Cannot assign to 'id' because it is a read-only property.

// Task 4

interface MathFunc {
  (x: number, y: number): number;
}

const addFunc: MathFunc = (x, y) => {
  return x + y;
};

const multiplyFunc: MathFunc = (x, y) => {
  return x * y;
};

console.log(addFunc(10, 25));
console.log(multiplyFunc(10, 25));

// Task 5

interface Person {
  name: string;
  age: number;
  email?: string;
  readonly id: number;
}

interface Employee extends Person {
  readonly salary: number;
}

const employeeBub: Employee = {
  name: "Bub",
  age: 22,
  email: "somemail2@nomail.net",
  id: 1,
  salary: 2500,
};

console.log(employeeBub);

// Task 6 & 7

type User = { name: string };
type Permissions = { role: string };

type Worker = User & Permissions;

const workerBib: Worker = {
  name: "Bib",
  role: "chief",
};

// const workerBob: Worker = {
//   name: "Bob",
// };
// Error: Type '{ name: string; }' is not assignable to type 'Worker'.  Property 'role' is missing in type '{ name: string; }' but required in type 'Permissions'.

// Task 8

interface Vehicle {
  brand: string;
  model: string;
  type: string;
  year: number;
  getInfo(): string;
}

class Car implements Vehicle {
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

  constructor(
    public brand: string,
    public model: string,
    public type: string,
    public year: number,
  ) {}

  getInfo(): string {
    return `Car: ${this.brand} ${this.model} Type: ${this.type} Year: ${this.year}`;
  }
}

const myBMW = new Car("BMW", "V55", "electro", 2026);

console.log(myBMW.getInfo());

// Task 9

class ChinaCar implements Vehicle {
  constructor(
    public brand: string,
    public model: string,
    public type: string,
    public year: number,
    private manufacture: string,
  ) {}

  getInfo(): string {
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
  private _balance: number = 0;

  constructor(initialBalance: number) {
    this.balance = initialBalance;
  }

  get balance(): number {
    return this._balance;
  }

  set balance(newValue: number) {
    if (newValue < 0) {
      return;
    }
    this._balance = newValue;
  }

  public deposit(amount: number): void {
    if (amount <= 0) {
      console.error("Сума депозиту має бути більшою за нуль");
      return;
    }
    this.balance += amount;
    console.log(`Поповнено на ${amount}. Поточний баланс: ${this.balance}`);
  }

  public withdraw(amount: number): void {
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
  firstName: string;
  lastName: string;
  age: number;

  constructor(firstName: string, lastName: string, age: number) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.age = age;
  }

  userInfo(): void {
    console.log(
      `This is ${this.firstName} ${this.lastName}, ${this.age}'s old`,
    );
  }
}

class Admin extends NewUser {
  role: string;
  constructor(firstName: string, lastName: string, age: number, role: string) {
    super(firstName, lastName, age);
    this.role = role;
  }

  override userInfo(): void {
    console.log(
      `This is ${this.firstName} ${this.lastName}, ${this.age}'s old, our ${this.role}`,
    );
  }

  // greet = `This is ${this.firstName} ${this.lastName}, ${this.age}'s old`;

  // override userInfo(greet: string): void {
  //   console.log(`${greet} , our ${this.role}`);
  // }

  // Error Property 'userInfo' in type 'Admin' is not assignable to the same property in base type 'NewUser'.
  // Type '(greet: string) => void' is not assignable to type '() => void'.
  // Target signature provides too few arguments. Expected 1 or more, but got 0.
}

// Task 15 & 16 & 18

interface Sound {
  makeSound(): void;
}

abstract class Animal implements Sound {
  constructor(public name: string) {}

  breathe() {
    console.log(`${this.name} дихає...`);
  }

  abstract makeSound(): void;
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

function interactWithAnimal(animal: Animal) {
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

function getData(data: number | string) {
  if (typeof data === "string") {
    return data.split(" ").join(", ").toUpperCase();
  } else {
    return data * 2;
  }
}

console.log(getData("Twenty and two"));
console.log(getData(20.2));

// Task 19

interface ElectronicDevice {
  brand: string;
  model: string;
  powerOn(): void;
}

type Connectivity = {
  wifiPassword: string;
  isConnected: boolean;
  connectToNetwork(password: string): void;
};

type SmartGadget = ElectronicDevice & Connectivity;

const myPhone: SmartGadget = {
  brand: "Apple",
  model: "iPhone 15",
  wifiPassword: "123noguest",
  isConnected: true,

  powerOn() {
    console.log(`${this.brand} вмикається...`);
  },

  connectToNetwork(password: string) {
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

// Task 20

interface IUser {
  id: number;
  userName: string;
  getRole(): string;
}

class BaseUser implements IUser {
  constructor(
    public readonly id: number,
    public userName: string,
    protected email: string,
  ) {}

  public getRole(): string {
    return "User";
  }

  public getContactInfo(): string {
    return `Користувач: ${this.userName}, Email: ${this.email}`;
  }
}

class NewAdmin extends BaseUser {
  private permissions: string[];

  constructor(
    id: number,
    userName: string,
    email: string,
    permissions: string[],
  ) {
    super(id, userName, email);
    this.permissions = permissions;
  }

  public override getRole(): string {
    return `Admin (Доступи: ${this.permissions.join(", ")})`;
  }

  public checkSecurity(): void {
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

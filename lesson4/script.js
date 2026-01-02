// Task 1 & Task 7

class User {
  constructor(name, age) {
    this.name = name;
    this._age = age;
  }

  getInfo() {
    return `Користувач: ${this.name}, вік: ${this._age}`;
  }

  get isAdult() {
    return this._age >= 18 ? true : false;
  }
}

const user = new User("Bob", "46");
const user2 = new User("Bib", "6");
console.log(user.getInfo());
console.log(user.isAdult);
console.log(user2.getInfo());
console.log(user2.isAdult);

// Task 2

class Product {
  constructor(title, price) {
    this.title = title;
    this.price = price;
  }

  getPriceWithTax() {
    let tax = 20;
    return this.price + (this.price * tax) / 100;
  }
}

const banana = new Product("banana", 20);

console.log(banana.getPriceWithTax());

// Task 3

class Counter {
  constructor(initvalue = 0) {
    this.value = initvalue;
  }

  increment() {
    return this.value++;
  }

  decrement() {
    return this.value--;
  }

  getValue() {
    return this.value;
  }
}

const counted = new Counter(10);

counted.increment();
counted.increment();
counted.increment();
counted.decrement();
counted.increment();

console.log(counted.getValue());

// Task 4
class Rectangle {
  constructor(width, height) {
    this.width = width;
    this.height = height;
  }

  getArea() {
    return this.width * this.height;
  }

  getPerimeter() {
    return 2 * (this.width + this.height);
  }
}

const myRoom = new Rectangle(15, 3.5);

console.log(myRoom.getArea());
console.log(myRoom.getPerimeter());

// Task 5

class Animal {
  constructor(name) {
    this.name = name;
  }
  speak() {
    console.log(`${this.name} can speak`);
  }
}

class Dog extends Animal {
  constructor(name) {
    super(name);
  }
  speak() {
    super.speak();
    console.log(`${this.name} say 'rrrrrr`);
  }
}

const myDog = new Dog("Bjork");
myDog.speak();

// Task 6

class Person {
  constructor(name) {
    this.name = name;
  }
}

class Employee extends Person {
  constructor(name, position) {
    super(name);
    this.position = position;
  }
}

const newEmployee = new Employee("Eva", "Secretary");
console.log(newEmployee);

// Task 8

class Car {
  constructor(brand, speed) {
    this.brand = brand;
    this.speed = speed;
  }

  accelerate(value) {
    let maxSpeed = 360;
    this.speed += value;

    if (this.speed >= maxSpeed) {
      this.speed = maxSpeed;
      console.log(
        `${this.brand} досяг максимальної швидкості. Поточна швидкість: ${maxSpeed} км/год`
      );
    } else {
      console.log(
        `${this.brand} прискорюється. Поточна швидкість: ${this.speed} км/год`
      );
    }
  }

  brake(value) {
    this.speed -= value;

    if (this.speed <= 0) {
      this.speed = 0;
      console.log(
        `${this.brand} зупинився. Поточна швидкість: ${this.speed} км/god`
      );
    } else {
      console.log(
        `${this.brand} гальмує. Поточна швидкість: ${this.speed} км/god`
      );
    }
  }
}

const myTesla = new Car("Tesla", 40);

myTesla.accelerate(400);
myTesla.brake(400);

// Task 9

class MathUtils {
  static sum(a, b) {
    return a + b;
  }
}

console.log(MathUtils.sum(120, 85));

// Task 10

class BankAccount {
  constructor(balans) {
    this.balans = balans;
  }

  deposit(val = 0) {
    this.balans += val;
    console.log(
      `Ви поповнили баланс на ${val} тугрик. У Вас на балансі залишилось: ${this.balans} тугрик`
    );
  }

  withdraw(val) {
    this.balans -= val;
    if (this.balans < 0) {
      console.log(
        `Ви намагаєтесь знати ${val} тугрик з балансу. У Вас на балансі недостатньо коштів. Доступний баланс: ${(this.balans +=
          val)} тугрик`
      );
    } else if (this.balans === 0) {
      console.log(
        `Ви зняли ${val} тугрик з балансу. У Вас на балансі закінчились кошти. Доступний баланс: ${this.balans} тугрик`
      );
    } else {
      console.log(
        `Ви зняли ${val} тугрик з балансу. У Вас на балансі залишилось: ${this.balans} тугрик`
      );
    }
  }
}

const myNewAccaunt = new BankAccount(0);
myNewAccaunt.deposit(150);
myNewAccaunt.deposit(150);
myNewAccaunt.withdraw(150);
myNewAccaunt.withdraw(140);
myNewAccaunt.withdraw(150);
myNewAccaunt.withdraw(10);

// Additional Task 1

const usersArr = [
  new User("bob", 22),
  new User("bib", 12),
  new User("bab", 45),
  new User("bub", 34),
  new User("beb", 8),
];

const adult = usersArr.filter((user) => user.isAdult);

console.log(adult);

// Additional Task 2

const productArr = [
  new Product("pineapple", 15),
  new Product("paneapple", 5),
  new Product("peneapple", 18),
  new Product("poneapple", 11),
  new Product("paneapple", 14),
  new Product("megapeneapple", 118),
];

const productName = productArr.map((el) => el.title);
console.log(productName);

// Additional Task 3 & Additional Task 13

class Order extends Product {
  constructor(title, price, quantity = 1) {
    super(title, price);
    this.quantity = quantity;
  }

  getTotal() {
    return this.price * this.quantity;
  }
  getQuantity() {
    return this.quantity;
  }
}

const ordersArr = [
  new Order("pineapple", 15, 22),
  new Order("paneapple", 5, 14),
  new Order("peneapple", 18, 10),
  new Order("poneapple", 11, 12),
  new Order("paneapple", 14, 5),
  new Order("megapeneapple", 118, 2),
];

const total = ordersArr
  .map((order) => order.getTotal())
  .reduce((a, c) => a + c, 0);

const quantity = ordersArr.map((item) => item.getQuantity());
console.log(quantity);
console.log(ordersArr[1].getQuantity());

console.log(total);

// Additional Task 4 & Additional Task 11

class UserWithRole extends User {
  constructor(name, age, role) {
    super(name, age);
    this.role = role ?? this.assignRole();
  }
  assignRole() {
    return this.isAdult ? "admin" : "user";
  }
  getInitials() {
    let initial = this.name.split(" ");
    let first = initial[0];
    let second = initial[1];
    console.log(
      `${first.charAt(0).toUpperCase()} ${second.charAt(0).toUpperCase()}`
    );
  }
}

const usersArr1 = [
  new UserWithRole("bob rob", 22),
  new UserWithRole("bib tib", 12, "user"),
  new UserWithRole("bab wab", 45),
  new UserWithRole("bub sub", 34),
  new UserWithRole("beb deb", 8),
];

usersArr1.forEach((user) => user.getInitials());

const getRole = usersArr1.some((user) => user.role === "admin");
console.log(getRole);

// Additional Task 5
class Employees extends User {
  constructor(name, age, position) {
    super(name, age);
    this.position = position;
  }
}

const employeesArr = [
  new Employees("bob", 22, "boss"),
  new Employees("bib", 12, "employee"),
  new Employees("bab", 45, "big boss"),
  new Employees("bub", 34, "looser"),
  new Employees("beb", 8, "employee"),
];

const sorterEmployee = employeesArr.toSorted((a, b) => a._age - b._age);

console.log(employeesArr);

// Additional Task 6 & Additional Task 7 & Additional Task 19

class Cart {
  constructor() {
    this.items = [];
  }

  addItem(name, price) {
    const newItem = { name, price };
    this.items.push(newItem);
    console.log(`Товар додано: ${name} (${price} грн)`);
  }

  removeItem(name) {
    const index = this.items.findIndex((item) => item.name === name);

    if (index !== -1) {
      const removed = this.items.splice(index, 1);
      console.log(`Товар видалено: ${removed[0].name}`);
    } else {
      console.log(`Товар "${name}" не знайдено в кошику.`);
    }
  }

  getExpensiveItems() {
    return this.items.filter((item) => item.price > 1000);
  }

  showAll() {
    console.log("Ваш кошик:");
    console.table(this.items);
  }

  resetCart() {
    this.items = [];
    console.log("Ваш кошик порожній");
  }
}

const myCart = new Cart();

myCart.addItem("Мишка", 450);
myCart.addItem("Клавіатура", 1200);
myCart.addItem("Монітор", 8500);
myCart.addItem("Килимок", 200);

const expensive = myCart.getExpensiveItems();
console.table(expensive);

myCart.removeItem("Мишка");
myCart.showAll();
myCart.resetCart();

// Additional Task 8

class CounterWithPrivateField {
  #count = 0;
  increment() {
    this.#count++;
    return this.#count;
  }
}

const privateCounted = new CounterWithPrivateField();
console.log(privateCounted.count);

// Additional Task 9

class Book {
  constructor(title, author, year, price) {
    this.title = title;
    this.author = author;
    this.year = year;
    this.price = price;
  }
}

class Library {
  constructor() {
    this.books = [];
  }

  addBook(book) {
    this.books.push(book);
  }

  findBook(val) {
    return this.books.filter((book) =>
      book.title.toLowerCase().includes(val.toLowerCase())
    );
  }
}

const myLibrary = new Library();

myLibrary.addBook(new Book("book1", "autor1", 1991, 500));
myLibrary.addBook(new Book("book2", "autor2", 1992, 501));
myLibrary.addBook(new Book("book3", "autor3", 1993, 502));
myLibrary.addBook(new Book("book3", "autor3", 1993, 502));
myLibrary.addBook(new Book("book3", "autor3", 1993, 502));
myLibrary.addBook(new Book("book3", "autor3", 1993, 502));
myLibrary.addBook(new Book("book3", "autor3", 1993, 502));

console.log(myLibrary);

const result = myLibrary.findBook("book2");
const result2 = myLibrary.findBook("book3");

console.log(result);
console.log(result2);

// Additional Task 10

class BankAccountTwo {
  constructor(accaunt, balans) {
    this.accaunt = accaunt;
    this.balans = balans;
  }
}

class Bank {
  constructor() {
    this.accaunt = [];
  }
  addAccaunt(acc) {
    this.accaunt.push(acc);
  }
  getBiggest() {
    const balanses = this.accaunt.map((el) => el.balans);
    const biggestBalans = Math.max(...balanses);
    console.log(biggestBalans);
  }
}

const myBankAccount = new Bank();

myBankAccount.addAccaunt(new BankAccountTwo("accaunt1", 500));
myBankAccount.addAccaunt(new BankAccountTwo("accaunt2", 2500));
myBankAccount.addAccaunt(new BankAccountTwo("accaunt3", 750));
myBankAccount.addAccaunt(new BankAccountTwo("accaunt4", 12458800));
myBankAccount.addAccaunt(new BankAccountTwo("accaunt5", 125075600));
myBankAccount.addAccaunt(new BankAccountTwo("accaunt6", 12000));
myBankAccount.addAccaunt(new BankAccountTwo("accaunt7", 168900));

const accaunrres = myBankAccount.getBiggest();

// Additional Task 12

class ShopGoods {
  constructor(name, price, stock) {
    this.name = name;
    this.price = price;
    this.stock = stock;
  }
}

class Shop {
  constructor() {
    this.goods = [];
  }
  addGoods(val) {
    this.goods.push(val);
  }
  checkStock() {
    return this.goods.every((el) => el.stock > 0);
  }
}

const myShop = new Shop();

myShop.addGoods(new ShopGoods("goods1", 2500, 50));
myShop.addGoods(new ShopGoods("goods2", 1200, 75));
myShop.addGoods(new ShopGoods("goods3", 800, 0));
myShop.addGoods(new ShopGoods("goods4", 550, 120));
myShop.addGoods(new ShopGoods("goods5", 650, 20));
myShop.addGoods(new ShopGoods("goods6", 12555, 350));

const inStock = myShop.checkStock();
console.log(inStock);

// Additional Task 14

class Song {
  constructor(name, autor, year) {
    this.name = name;
    this.author = autor;
    this.year = year;
  }
}

class Playlist {
  constructor() {
    this.songs = [];
  }
  addSongs(val) {
    this.songs.push(val);
  }
  sortBy(val) {
    if (val === "name") {
      return this.songs.toSorted((a, b) => a.name.localeCompare(b.name));
    }
    if (val === "author") {
      return this.songs.toSorted((a, b) => a.author.localeCompare(b.author));
    }
    if (val === "year") {
      return this.songs.toSorted((a, b) => a.year - b.year);
    }
  }
}

const myPlaylist = new Playlist();

myPlaylist.addSongs(new Song("vname2", "autor2", 1950));
myPlaylist.addSongs(new Song("nname1", "autor1", 1950));
myPlaylist.addSongs(new Song("aname3", "autor2", 1955));
myPlaylist.addSongs(new Song("bname4", "autor1", 1950));
myPlaylist.addSongs(new Song("tname5", "autor3", 1955));
myPlaylist.addSongs(new Song("jname6", "autor1", 1950));

const sortedByName = myPlaylist.sortBy("name");
console.log(sortedByName);

const sortedByAutor = myPlaylist.sortBy("author");
console.log(sortedByAutor);

const sortedByYear = myPlaylist.sortBy("year");
console.log(sortedByYear);

// Additional Task 15

class Game {
  constructor(playerName, targetScore = 100) {
    this.playerName = playerName;
    this.score = 0;
    this.targetScore = targetScore;
    this.isGameOver = false;
  }

  addPoints(points) {
    if (this.isGameOver) return console.log("Гра закінчена. Почніть нову!");

    this.score += points;
    console.log(
      `${this.playerName} отримав +${points} очок. Поточний рахунок: ${this.score}`
    );
    this.checkStatus();
  }

  takeDamage(points) {
    if (this.isGameOver) return;

    this.score -= points;
    console.log(
      `${this.playerName} втратив -${points} очок. Поточний рахунок: ${this.score}`
    );
    this.checkStatus();
  }

  checkStatus() {
    if (this.score >= this.targetScore) {
      console.log(
        `🏆 ВІТАЄМО! ${this.playerName} переміг, набравши ${this.score} очок!`
      );
      this.isGameOver = true;
    } else if (this.score < 0) {
      console.log(
        `💀 ГРА ЗАКІНЧЕНА. ${this.playerName} програв. Рахунок впав нижче нуля.`
      );
      this.isGameOver = true;
    }
  }

  restart() {
    this.score = 0;
    this.isGameOver = false;
    console.log("Гра почалася спочатку!");
  }
}

const myGame = new Game("Player1", 150);

myGame.addPoints(30);
myGame.takeDamage(10);
myGame.addPoints(40);
myGame.addPoints(10);
myGame.takeDamage(110);

// Additional Task 16

class TodoList {
  constructor() {
    this.tasks = [];
  }

  addTask(text) {
    const newTask = {
      id: Date.now() + Math.random(),
      text: text,
      completed: false,
    };
    this.tasks.push(newTask);
    console.log(`Додано задачу: "${text}"`);
  }

  completeTask(text) {
    const task = this.tasks.find((t) => t.text === text);
    if (task) {
      task.completed = true;
      console.log(`✅ Задача "${text}" виконана!`);
    } else {
      console.log(`❌ Задачу "${text}" не знайдено.`);
    }
  }

  getCompletedTasks() {
    return this.tasks.filter((task) => task.completed === true);
  }

  getPendingTasks() {
    return this.tasks.filter((task) => !task.completed);
  }
}

const myTodo = new TodoList();

myTodo.addTask("Вивчити класи в JS");
myTodo.addTask("Купити хліб");
myTodo.addTask("Зробити зарядку");

myTodo.completeTask("Вивчити класи в JS");
myTodo.completeTask("Зробити зарядку");

console.log("--- Виконані задачі ---");
const done = myTodo.getCompletedTasks();
console.table(done);

console.log("--- Залишилося зробити ---");
console.table(myTodo.getPendingTasks());

// Additional Task 17

class Timer {
  constructor(seconds) {
    this.seconds = seconds;
  }

  start() {
    if (this.seconds <= 0) {
      console.log("Час вичерпано!");
      return;
    }

    console.log(`Залишилося: ${this.seconds} сек.`);

    setTimeout(() => {
      this.seconds--;
      this.start();
    }, 1000);
  }
}

const myTimer = new Timer(5);
myTimer.start();

// Additional Task 18

class NewUser {
  constructor(name, role) {
    this.name = name;
    this.role = role;
  }
}

class UserManager {
  constructor() {
    this.users = [];
  }

  addUser(name, role) {
    const user = new NewUser(name, role);
    this.users.push(user);
  }

  getAllUsers() {
    return this.users;
  }
}

const manager = new UserManager();

manager.addUser("Олексій", "admin");
manager.addUser("Марія", "user");

console.log(manager.getAllUsers());

// // Additional Task 20

class Statistics {
  constructor(numbers = []) {
    this.numbers = numbers;
  }

  getMin() {
    if (this.numbers.length === 0) return null;
    return Math.min(...this.numbers);
  }

  getMax() {
    if (this.numbers.length === 0) return null;
    return Math.max(...this.numbers);
  }

  getAverage() {
    if (this.numbers.length === 0) return 0;
    const sum = this.numbers.reduce((acc, curr) => acc + curr, 0);
    return sum / this.numbers.length;
  }
}

const myStats = new Statistics([10, 20, 30, 40, 50]);

console.log(`Мінімум: ${myStats.getMin()}`);
console.log(`Максимум: ${myStats.getMax()}`);
console.log(`Середнє: ${myStats.getAverage()}`);

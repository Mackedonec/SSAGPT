// task1
(function task1() {
  let a = 10;
  let b = 3;
  let sum = a + b;
  let difference = a - b;
  let product = a * b;
  let quotient = a / b;
  console.log(`Task 1 Results:`);
  console.log(`Sum: ${sum}`);
  console.log(`Difference: ${difference}`);
  console.log(`Product: ${product}`);
  console.log(`Quotient: ${quotient}`);
})();

// task2
let age = "18";
console.log(`Task 2 Result: ${Number(age)} + 1 = ${Number(age) + 1}`);

// task3

function checkNumber(n) {
  if (typeof n !== "number" || isNaN(n)) {
    return "Введено не число";
  }
  if (n > 0) {
    return "Позитивне";
  } else if (n < 0) {
    return "Негативне";
  } else {
    return "Нуль";
  }
}

console.log(`Task 3 Result: `);
console.log(`${checkNumber(NaN)}`);
console.log(`${checkNumber(5)}`);
console.log(`${checkNumber(-3)}`);
console.log(`${checkNumber(0)}`);

// task4

let isOnline = true;
console.log(`Task 4 Result:  ${!isOnline}`);

// task5

function checkNumberTwo(n) {
  if (n % 2 === 0) {
    return "Парне";
  } else {
    return "Непарне";
  }
}
console.log(`Task 5 Result: `);
console.log(`4 is ${checkNumberTwo(4)}`);
console.log(`7 is ${checkNumberTwo(7)}`);

// task6

let username = "";
let defaultName = "Гість";
function greetUser(name) {
  return name === "" ? `Привіт, ${defaultName}!` : `Привіт, ${name}!`;
}

console.log(`Task 6 Result: ${greetUser(username)}`);
console.log(`Task 6 Result: ${greetUser((username = "Іван"))}`);

// task7

function ternar(score) {
  return score >= 60 ? "Тест складено" : "Тест не складено";
}

console.log(`Task 7 Result: `);
console.log(`Score 75: ${ternar(75)}`);
console.log(`Score 45: ${ternar(45)}`);

// task8

let value = "abc";

function checkValue(value) {
  let checkedValue = Number(value);
  if (isNaN(checkedValue)) {
    return "Не число";
  } else if (checkedValue > 0) {
    return "Позитивне число";
  } else if (checkedValue < 0) {
    return "Негативне число";
  } else {
    return "Нуль";
  }
}
console.log(`Task 8 Result: `);
console.log(`Value 'abc': ${checkValue("abc")}`);
console.log(`Value '25': ${checkValue("25")}`);
console.log(`Value '-10': ${checkValue("-10")}`);
console.log(`Value '0': ${checkValue("0")}`);

// task9

function checkAnotherNumber(n) {
  if (n > 100) {
    return "Велике";
  } else if (n <= 100 && n >= 50) {
    // або (n < 101 && n > 51)
    return "Середне";
  } else {
    return "Мале";
  }
}

console.log(`Task 9 Result: `);
console.log(`150 is ${checkAnotherNumber(150)}`);
console.log(`75 is ${checkAnotherNumber(75)}`);
console.log(`25 is ${checkAnotherNumber(25)}`);

// task10

console.log(
  `Task 10 Result: вираз console.log(10 + "5" - 3); покаже в консолі 102, тому що операція додавання з рядком призведе до конкатенації: 10 + "5" = "105", потім "105" буде неявно приведений до числа 105 при виконанні операції віднімання: 105 - 3 = 102.`
);

// task11

let isLoggedIn = true;
let isAdmin = false;
let hasAccess = true;

function checkAccess() {
  if (isLoggedIn && (isAdmin || hasAccess)) {
    return "Доступ дозволено";
  } else {
    return "Доступ заборонено";
  }
}
console.log(`Task 11 Result: ${checkAccess()}`);

// task12

let inputValue = "0";
let booleanStringValue = Boolean(inputValue);
let booleanNumberValue = Boolean(Number(inputValue));

console.log(`Task 12 Result: ${booleanStringValue}`);
console.log(`Task 12 Result: ${booleanNumberValue}`);

// task13

function checkingNumber(num) {
  if (typeof num !== "number" || isNaN(num)) {
    return "Помилка";
  }
  if (num % 2 === 0) {
    return "Парне";
  }
  if (num % 2 !== 0) {
    return "Непарне";
  }
}
console.log(`Task 13 Result: `);
console.log(`4 is ${checkingNumber(4)}`);
console.log(`7 is ${checkingNumber(7)}`);
console.log(`'abc' is ${checkingNumber("abc")}`);

// task14
let role = "editor";
function getPermissions(role) {
  switch (role) {
    case "admin":
      return "Повний доступ";
    case "editor":
      return "Редагування";
    case "user":
      return "Перегляд";
    default:
      return "Гість";
  }
}

console.log(`Task 14 Result: ${getPermissions(role)}`);

// task15

console.log(`Task 15 Result: (age ?? 18) >= 18;`);

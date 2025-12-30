// Task 1

const firstArr = [10, 5, 25, 8, 42];
console.log(firstArr[0]);
console.log(firstArr[firstArr.length - 1]);

// Task 2

const fruits = ["apple", "banana"];
console.log(fruits);

fruits.push("orange");
console.log(fruits);

fruits.unshift("lemon");
console.log(fruits);

// Task 3

for (let i = 1; i <= 10; i++) {
  console.log(i);
}

// Task 4

function sayHello() {
  console.log("Привіт!");
}

sayHello();

// Task 5

const secondArr = [3, 7, 2];

function sum(arr) {
  let res = 0;
  for (let i = 0; i < arr.length; i++) {
    res += arr[i];
  }
  return res;
}
console.log(sum(secondArr));

// Task 6

function getLastElement(arr) {
  return arr[arr.length - 1];
}

console.log(getLastElement(firstArr));
console.log(getLastElement(secondArr));

// Task 7

function findEven(arr) {
  let even = [];
  for (const item of arr) {
    if (item % 2 === 0) {
      even.push(item);
    }
  }
  return even;
}

console.log(findEven(firstArr));
console.log(findEven(secondArr));

// Task 8

function countItems(arr) {
  let length = 0;
  arr.forEach(() => {
    length++;
  });
  return length;
}

console.log(countItems(firstArr));
console.log(countItems(secondArr));

// Task 9

const thirdArr = ["apple", "i", "banana", "st", "lemon", "orange", ""];

for (const item of thirdArr) {
  if (item !== "" && item.length >= 3) {
    console.log(item);
  }
}

// Task 10

function multiplyAll() {
  let result = 1;
  for (const item of arguments) {
    result *= item;
  }
  return result;
}

console.log(multiplyAll(1, 5, 8, 25, 4, 15));

// Task 11

function findMax(arr) {
  let max = arr[0];
  for (const item of arr) {
    if (item > max) {
      max = item;
    }
  }
  return max;
}

console.log(findMax(firstArr));
console.log(findMax(secondArr));

// Task 12

const users = ["admin", "user", "guest"];

for (const item of users) {
  if (item === "admin") {
    console.log("Адміністратор знайдений");
  } else {
    console.log("Ти не пройдеш!!! - Шукай адміна далі");
  }
}

// Task 13

function reverseArray(arr) {
  let reversed = [];
  for (const item of arr) {
    reversed.unshift(item);
  }
  return reversed;
}

console.log(reverseArray(firstArr));
console.log(reverseArray(secondArr));
console.log(reverseArray(users));

// Task 14

function createCounter() {
  let count = 0;
  return function () {
    count++;
    return count;
  };
}
const counted = createCounter();

console.log(counted());
console.log(counted());
console.log(counted());
console.log(counted());
console.log(counted());
console.log(counted());

// Task 15

function factorial(n) {
  if (typeof n !== "number" || isNaN(n) || n <= 0 || !Number.isInteger(n)) {
    return "Помилка: введіть ціле додатне число";
  }
  if (n === 1) {
    return 1;
  }

  return n * factorial(n - 1);
}

let factorialRes = factorial(2);

console.log(factorialRes);

// AdditionalTask 1

firstArr.forEach(function (num) {
  console.log(num * 2);
});

secondArr.forEach(function (num) {
  console.log(num * 2);
});

// AdditionalTask 2

thirdArr.forEach(function (str) {
  if (str.length > 4) {
    console.log(str);
  }
});

// AdditionalTask 3

let newFirstArr = firstArr.map(function (num) {
  return num + 10;
});

console.log(newFirstArr);

// AdditionalTask 4

let newUsers = users.map(function (str) {
  return str.toLocaleUpperCase();
});

console.log(newUsers);

// AdditionalTask 5

const numberArr = [-1, 550, 120, -115, 3, -7, 18, 225];

let filteredNumberArr = numberArr.filter(function (num) {
  return num > 0;
});

console.log(filteredNumberArr);

// AdditionalTask 6

let filteredThirdArr = thirdArr.filter(function (str) {
  return str.length > 5;
});

console.log(filteredThirdArr);

// AdditionalTask 7

let findedwNumberArr = numberArr.find(function (num) {
  return num > 100;
});

console.log(findedwNumberArr);

// AdditionalTask 8

let findedwThirdArr = thirdArr.find(function (str) {
  return str.startsWith("a");
});

console.log(findedwThirdArr);

// AdditionalTask 9

let reducednumberArr = numberArr.reduce(function (a, c) {
  return a + c;
});

console.log(reducednumberArr);

// AdditionalTask 10

let biggestReducednumberArr = numberArr.reduce(function (a, c) {
  if (c < a) {
    return a;
  } else {
    return c;
  }
}, numberArr[0]);

console.log(biggestReducednumberArr);

// Additional Task 1
const numbers = [5, 2, 9, 1, 4, 8, 7, 10, 3, 6];

let sortByBig = [...numbers].sort((a, b) => a - b);
console.log(sortByBig);

// Additional Task 2

let sortBySmall = [...numbers].sort((a, b) => b - a);
console.log(sortBySmall);

// Additional Task 3

const strArr = ["apple", "i", "banana", "st", "lemon", "orange", ""];

let sortStrArr = [...strArr].sort();
console.log(sortStrArr);

// Additional Task 4

const users2 = [
  { name: "Іван", age: 25, role: "user", isActive: true },
  { name: "Марія", age: 42, role: "user", isActive: true },
  { name: "Олексій", age: 18, role: "admin", isActive: false },
  { name: "Анна", age: 36, role: "user", isActive: true },
  { name: "Оля", age: 41, role: "user", isActive: true },
];

let sortUsers = [...users2].sort((a, b) => a.age - b.age);
let sortUsers2 = [...users2].sort((a, b) => b.age - a.age);
console.table(sortUsers);
console.table(sortUsers2);

// Additional Task 5

let evenOddArr = numbers.toSorted((a, b) => (a % 2) - (b % 2));
console.log(evenOddArr);

// Additional Task 6

const numbers2 = [-1, 550, 120, -115, 3, -7, -8, 18, 225];

let hasNegative = numbers2.some((num) => num < 0);
console.log(hasNegative);

// Additional Task 7

let hasBiggestThenHundred = numbers2.some((num) => num > 100);
console.log(hasBiggestThenHundred);

// Additional Task 8

let hasEmpty = strArr.some((char) => char === "");
console.log(hasEmpty);

// Additional Task 9

let hasEven = numbers2.some((num) => num % 2 === 0);
console.log(hasEven);

// Additional Task 10

let hasAdmin = users2.some((user) => user.role === "admin");
console.log(hasAdmin);

// Additional Task 11

let allPositive = numbers2.every((num) => num > 0);
console.log(allPositive);

// Additional Task 12

let allBigestThenThree = strArr.every((str) => str.length > 3);
console.log(allBigestThenThree);

// Additional Task 13

let allHasBeenNumbers = numbers2.every((num) => typeof num === "number");
console.log(allHasBeenNumbers);

// Additional Task 14

let allActive = users2.every((user) => user.isActive === true);
console.log(allActive);

// Additional Task 15

let allEven = numbers.every((num) => num % 2 === 0);
console.log(allEven);

// Additional Task 16

let hasIncludTen = numbers.includes(10);
console.log(hasIncludTen);

// Additional Task 17

let hasIncludAdmin = strArr.includes("admin");
console.log(hasIncludAdmin);

// Additional Task 18

const differentArr = [true, false, null, undefined, "str", 10];

let hasNull = differentArr.includes(null);
console.log(hasNull);

// Additional Task 19

let hasFalse = differentArr.includes(false);
console.log(hasFalse);

// Additional Task 20

const numTen = 10;

let hasTen = numbers.includes(numTen);
console.log(hasTen);

// Additional Task 21

let firstThree = strArr.slice(0, 3);
console.log(firstThree);

// Additional Task 22

let withoutSecond = strArr.slice(1);
console.log(withoutSecond);

// Additional Task 23

let arrcopy = strArr.slice();
console.log(arrcopy);
let deleteOneFromCenter = arrcopy.splice(arrcopy.length / 2, 1);
console.log(deleteOneFromCenter);
console.log(arrcopy);

// Additional Task 24
let arrcopy2 = strArr.slice();
console.log(arrcopy2);
let replaceOne = arrcopy2.splice(2, 1, "pineapple");
console.log(replaceOne);
console.log(arrcopy2);

// Additional Task 25

let arrcopy3 = strArr.slice();
console.log(arrcopy3);
let addOneFromCenter = arrcopy3.splice(arrcopy3.length / 2, 0, "mango");
console.log(addOneFromCenter);
console.log(arrcopy3);

// Additional Task 26

const arrInArr = [1, 2, 3, 4, [5, 6], [7, 8]];
const arrInArrInArr = [1, 2, 3, [4, [5, 6], [7, 8]]];
const arrInArrInfinity = [1, [2, [3, [[4, [5, 6], [7, 8]]]]]];

let flatArr = arrInArr.flat();
console.log(flatArr);

// Additional Task 27

let flatArrTwice = arrInArrInArr.flat(2);
console.log(flatArrTwice);

// Additional Task 28

let charFromArr = strArr.flatMap((s) => s.split(""));
console.log(charFromArr);

// Additional Task 29

let anotheFletArr = arrInArrInfinity.flat(Infinity);
console.log(anotheFletArr);

// Additional Task 30

let numberFlatMap = anotheFletArr.flatMap((num) => num * 2);
console.log(numberFlatMap);

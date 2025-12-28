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

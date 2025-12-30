// Task 1

let userName = "Ivan";
console.log(userName);

// Task 2

function sum(a, b) {
  return a + b;
}

console.log(sum(1, 2));

// Task 3

function multiply(a, b) {
  return a * b;
}

console.log(multiply(10, 2));

// Task 4

const user = null;
console.log(user);

// Task 5

const age = 18;

if (age === 18) {
  console.log("Доступ дозволено");
}

// Task 6

try {
  const result = data.value + 10;
  console.log(result);
} catch (error) {
  console.error(error.message);
}

// Task 7

function isEven(num) {
  if (num % 2 === 0) {
    return true;
  }
  return false;
}

console.log(isEven(3));
console.log(isEven(2));

// Task 8

function checkNumber(num) {
  // if (num === 0) {
  //   return "Нуль";
  // }
  // if (num > 0) {
  //   return "Позитивне";
  // }

  // ||

  if (num >= 0) {
    return "Позитивне";
  }
  if (num < 0) {
    return "Негативне";
  }
}

console.log(checkNumber(3));
console.log(checkNumber(-2));
console.log(checkNumber(0));

// Task 9

// setTimeout(() => {
//   for (let i = 0; i < 3; i++) {
//     console.log(i);
//   }
// }, 100);

for (let i = 0; i < 3; i++) {
  setTimeout(() => {
    console.log(i);
  }, 100);
}

// Task 10

function calculate(a, b) {
  // debugger;
  const result = a * b;
  // debugger;
  const c = result + 15;
  // debugger;
  return result + c;
}

console.log(calculate(5, 2));

// Task 11

try {
  console.log(user.name);
} catch (error) {
  console.log(error.message);
}

// Task 12

try {
  let num = "ten";
  let newNum = Number(num);
  if (isNaN(newNum)) {
    throw new Error("Введіть число");
  }
  console.log(newNum);
} catch (error) {
  console.log(error.message);
}

// Task 13

function divide(a, b) {
  try {
    if (b === 0) {
      throw new TypeError("Ділення на нуль");
    }
    return a / b;
  } catch (error) {
    console.log(error.message);
  }
}

divide(5, 0);

// Task 14

try {
  console.log("Робота з даними");
} catch (error) {
  console.log("Помилка");
} finally {
  console.log("Операція завершена");
}

// Task 15

function getNum(str) {
  try {
    let num = Number(str);
    if (isNaN(num) || str === "") {
      throw new Error("Введіть число");
    }
    console.log(num);
  } catch (error) {
    console.log(error.message);
  } finally {
    console.log("Перевірка завершена");
  }
}
getNum("ten");

// Additional Task 1

for (let i = 2; i <= 50; i += 2) {
  console.log(i);
}
// ||

for (let i = 1; i <= 50; i++) {
  if (i % 2 === 0) {
    console.log(i);
  }
}

// Additional Task 2

const numArr = [1, 15, 25, 7, -85, 91, 63, -42, 1, 58, 251, 102, 189];

let sum2 = numArr.reduce(function (a, c) {
  return a + c;
});

console.log(sum2);

// Additional Task 3

let reversedArr = numArr.toReversed();
// ||
let reversedArr2 = [...numArr].reverse();

console.log(reversedArr);
console.log(reversedArr2);

// Additional Task 4

let biggestNum = Math.max(...numArr);

console.log(biggestNum);

// Additional Task 5

let positiveNumArr = numArr.filter(function (el) {
  if (el > 0) {
    return el;
  }
});

console.log(positiveNumArr);

// Additional Task 6

const strArr = [
  "Я",
  "Ми",
  "Кіт",
  "Небо",
  "Сонце",
  "Машина",
  "Україна",
  "Програма",
  "Інтерфейс",
  "Технології",
];

let bigStr = strArr.filter(function (el) {
  return el.length > 3;
});

console.log(bigStr);

// Additional Task 7

let bigNums = numArr.find(function (el) {
  return el > 100;
});

console.log(bigNums);

// Additional Task 8

let multiplyArr = numArr.map(function (el) {
  return el * 2;
});

console.log(multiplyArr);

// Additional Task 9

const oneZeroArr = [0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0];
let zeroArr = [];
let oneArr = [];
for (const y of oneZeroArr) {
  if (y === 0) {
    zeroArr.push(y);
  } else {
    oneArr.push(y);
  }
}

console.log(zeroArr.length);
console.log(oneArr.length);

// Additional Task 10

let smallestNum = Math.min(...numArr);

console.log(smallestNum);

// Additional Task 11

function squareNum(num) {
  return num * num;
}

console.log(squareNum(10));

// Additional Task 12

function biggestNumber(a, b) {
  return a < b ? b : a;
}

console.log(biggestNumber(10, 30));

// Additional Task 13

function sumFromArr(arr) {
  return [...arr].reduce(function (a, c) {
    return a + c;
  });
}

console.log(sumFromArr(oneZeroArr));
console.log(sumFromArr(numArr));

// Additional Task 14

function lengthFromStr(str) {
  return str.length;
}

console.log(lengthFromStr("oneZeroArr"));
console.log(lengthFromStr("numArr"));

// Additional Task 15

function evensNum(num) {
  return num % 2 === 0 ? "even" : "not even";
}

console.log(evensNum(10));
console.log(evensNum(9));

// Additional Task 16

function lastArrEl(arr) {
  return arr[arr.length - 1];
}

console.log(lastArrEl(oneZeroArr));
console.log(lastArrEl(numArr));

// Additional Task 17

function positiveNumArr2(arr) {
  return arr.filter(function (num) {
    return num > 0;
  });
}

console.log(positiveNumArr2(numArr));

// Additional Task 18

function checkStr(str) {
  return str !== "" ? true : false;
}

console.log(checkStr("oneZeroArr"));
console.log(checkStr("numArr"));
console.log(checkStr(""));

// Additional Task 19

function factorial(num) {
  if (
    typeof num !== "number" ||
    isNaN(num) ||
    num <= 0 ||
    !Number.isInteger(num)
  ) {
    return "Enter positive number";
  }
  if (num === 1) {
    return 1;
  }

  return num * factorial(num - 1);
}

console.log(factorial(12));
console.log(factorial(-12));

// Additional Task 20

function createCounter() {
  let count = 0;
  return function () {
    count++;
    return count;
  };
}

let counted = createCounter();

console.log(counted());
console.log(counted());
console.log(counted());

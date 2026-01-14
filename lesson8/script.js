// Task 1

const numbers = [
  2, 58, 26, 59, 41, 75, 15587, 12, 98, 369, 521, 521, 102, 30, 75, 402, 65, 2,
  58, 26, 59, 41, 75, 15587, 12, 98, 369, 521, 521, 102, 30, 75, 402, 65,
];

const numbersCopy = [...numbers];
numbersCopy.splice(0, 1, 5);
console.log(numbers);
console.log(numbersCopy);

// Task 2

const concatedNumbers = [...numbers, ...numbersCopy];
console.log(concatedNumbers);

// Task 3

// let average = (...rest) => {
//   return Math.round(
//     rest.reduce((a, c) => {
//       return a + c / rest.length;
//     }, 0)
//   );
// };

let average = (...rest) =>
  Math.round(rest.reduce((a, b) => a + b, 0) / rest.length);

console.log(average(2, 12, 5, 3, 55));
console.log(average(...concatedNumbers));

// Task 4

const colors = ["red", "blue", "green", "black", "purple"];
const [red, blue, , , purple] = colors;
console.log(red);
console.log(blue);
console.log(purple);

// Task 5

const user = {
  name: "name",
  age: null,
  city: "city",
};

const { name, city } = user;
console.log(name, city);

// Task 6

const users = {
  user1: {
    name: "name11",
    age: null,
    city: "city11",
  },
  user2: {
    name: "name21",
    age: null,
    city: "city12",
  },
  user3: {
    name: "name31",
    age: null,
    city: "city13",
  },
};

const {
  user1: { name: name1, city: city1 },
  user2: { name: name2, city: city2 },
  user3: { name: name3, city: city3 },
} = users;

console.log(name1, city1);
console.log(name2, city2);
console.log(name3, city3);

// Task 7 & 16

const newColors = new Set([
  "red",
  "blue",
  "green",
  "black",
  "purple",
  "blue",
  "green",
  "blue",
]);

console.log(newColors);
console.log(newColors.size);

// Task 8

const unic = new Set(concatedNumbers);
// const unicNumber = Array.from(unic);
const unicNumber = [...unic];
console.log(unicNumber);

// Task 9 & 10 & 11 & 12

const userMap = new Map([
  ["Igor", 21],
  ["Oleh", 30],
]);
console.log(userMap);

userMap.set("Gleb", 31);
console.log(userMap);
userMap.set("Olya", 18);
console.log(userMap);

const getOlya = userMap.get("Olya");
console.log(getOlya);

const hasIgor = userMap.has("Igor");
console.log(hasIgor);

for (let keys of userMap.keys()) {
  console.log(keys);
}

for (let values of userMap.values()) {
  console.log(values);
}

// for (let entry of userMap.entries()) {
//   console.log(entry);
// }

for (let entry of userMap) {
  console.log(entry);
}

const usersMap = Object.fromEntries(userMap);
console.log(usersMap);

const newUser = {
  Igor: 21,
  Oleh: 30,
  Gleb: 31,
  Olya: 18,
};
console.log(newUser);

let userAgeFunc = ({ ...rest }) => {
  Object.entries(rest).forEach(([name, age]) => {
    console.log(`${name} ${age}`);
  });
};

let userAgeFunc2 = ({ Igor, Oleh, Gleb, Olya }) => {
  console.log(`${Igor} ${Oleh} ${Gleb} ${Olya}`);
};

userAgeFunc(newUser);
userAgeFunc(usersMap);

userAgeFunc2(newUser);
userAgeFunc2(usersMap);

// Task 13

const newNumbers = [...concatedNumbers];
console.log(Math.max(...newNumbers));

// Task 14

let firstAndOther = function (first, ...other) {
  let sum = other.reduce((a, b) => {
    return a + b;
  }, 0);
  return sum + first;
};

console.log(firstAndOther(2, 5, 5, 8, 4, 2, 5, 8, 6));

// Task 15

const userNextGen = {
  name: "Igor",
  age: 21,
};

const job = {
  position: "Developer",
  city: "Kyiv",
};

const fullProfile = { ...userNextGen, ...job };

console.log(fullProfile);

// Task 17

const itemsMap = new Map([
  ["сіль", 20],
  ["цукор", 25],
  ["борошно", 30],
  ["рис", 21],
  ["гречка", 123],
]);
console.log(itemsMap.size);
itemsMap.set("ячмінь", 31);
console.log(itemsMap.size);
itemsMap.delete("рис");
console.log(itemsMap.size);

// Task 18

const bigObject = {
  key1: "value1",
  key2: "value2",
  key3: "value3",
  key4: "value4",
  key5: "value5",
  key6: "value6",
  key7: "value7",
};
console.log(bigObject);
const bigObjectCopy = { ...bigObject, key1: "value12" };
console.log(bigObjectCopy);
bigObjectCopy.key1 = "value22";
console.log(bigObjectCopy);

// Task 19

function returnArr(arr) {
  let newArr = [...arr];
  let sum = newArr.map((el) => {
    return el * 2;
  });
  return sum;
}

const res = returnArr([...concatedNumbers]);
console.log(res);

// Task 20

// різниця між Set і масивом в тому що Set містить тільки унікальні значення
// Map краще використовувати, коли потрібна колекція ключ + значення

// Additional Task 1

const btn = document.querySelector("#add-str-btn");
const list = document.querySelector("#number-list");

let numbersStr = [50, 55, 23, 85];

btn.addEventListener("click", () => {
  const newNumber = Math.floor(Math.random() * 100) + 1;

  numbersStr = [...numbersStr, newNumber];

  renderList();
});

function renderList() {
  list.innerHTML = "";

  numbersStr.forEach((num) => {
    const li = document.createElement("li");
    li.textContent = `${num}`;
    list.appendChild(li);
  });
}

// Additional Task 2

const inputName = document.querySelector("#input-name");
const addNameBtn = document.querySelector("#add-name-btn");
const outputName = document.querySelector("#output-unic-name");
const isUnic = document.querySelector("#is-unic");

const names = new Set();

addNameBtn.addEventListener("click", () => {
  const regName = /^[a-z]{2,15}$/i;
  const nameValue = inputName.value.trim().toLowerCase();

  if (regName.test(nameValue)) {
    names.add(nameValue);
    outputName.textContent = [...names].join(", ");
    inputName.value = "";
    isUnic.classList.remove("alert");
    isUnic.textContent = "...";
  } else {
    isUnic.classList.add("alert");
    isUnic.textContent = "Wrong name";
  }
});

inputName.addEventListener("keypress", (e) => {
  if (e.key === "Enter") addNameBtn.click();
});

// Additional Task 3

const form = document.querySelector("#my-form");

form.addEventListener("submit", (event) => {
  event.preventDefault();

  const formData = new FormData(form);
  const data = Object.fromEntries(formData);

  const { userName, userAge } = data;

  const userResult = {
    name: userName,
    age: Number(userAge),
  };

  if (userName && userAge) {
    form.elements.userName.value = "";
    form.elements.userAge.value = "";
    // form.reset();
  }
  console.log("Data:", userResult);
});

// Additional Task 4

const outputSum = document.querySelector("#output-sum");
const intputNum = document.querySelector("#intput-num");

function sum(...rest) {
  const result = rest.reduce((a, c) => a + c, 0);
  outputSum.textContent = result;
}

intputNum.addEventListener("input", () => {
  const regForbidden = /[^0-9\s]/g;
  let cleanValue = intputNum.value.replace(regForbidden, "");

  intputNum.value = cleanValue;
  const numbersArray = cleanValue.split(" ").filter(Boolean).map(Number);
  sum(...numbersArray);
});

// Additional Task 5

const userName = document.querySelector("#user-name");
const userAge = document.querySelector("#user-age");
const addUser = document.querySelector("#add-user");
const nameMsg = document.querySelector("#name-msg");
const ageMsg = document.querySelector("#age-msg");

const newUserMap = new Map();

addUser.addEventListener("click", () => {
  const regName = /^[a-z]{2,15}$/i;
  const nameValue = userName.value.trim().toLowerCase();
  const ageValue = userAge.value;

  nameMsg.textContent = "...";
  ageMsg.textContent = "...";

  const isNameValid = regName.test(nameValue);
  const isAgeValid = ageValue >= 18 && ageValue <= 102;

  if (!isNameValid) {
    nameMsg.textContent = "Wrong name (2-15 letters)";
  }

  if (!isAgeValid) {
    ageMsg.textContent = "Wrong age (must be 18-102)";
  }

  if (isNameValid && isAgeValid) {
    newUserMap.set(nameValue, ageValue);
    nameMsg.textContent = "Success";
    ageMsg.textContent = "Success";
    userName.value = "";
    userAge.value = "";

    setTimeout(() => {
      nameMsg.textContent = "...";
      ageMsg.textContent = "...";
    }, 500);
  }
});

// Additional Task 6

const intputGoods = document.querySelector("#intput-goods");
const outputGoods = document.querySelector("#output-goods");
const addGoodsBtn = document.querySelector("#add-goods-set");
const goodsArr = ["phone", "laptop", "pc", "tv", "ups"];

const goodsSet = new Set(goodsArr);
outputGoods.textContent = [...goodsSet].join(", ");

addGoodsBtn.addEventListener("click", () => {
  const newGoods = intputGoods.value.trim().toLowerCase();
  if (!newGoods) return;
  goodsSet.add(newGoods);
  outputGoods.textContent = [...goodsSet].join(", ");
  intputGoods.value = "";
});

// Additional Task 7

const userInfo = {
  name: "Igor",
  age: 21,
  city: "Kiyv",
};

const showBtn = document.querySelector("#show-data-btn");

function renderUserInfo({ name, age, city }) {
  document.querySelector("#display-name").textContent = name;
  document.querySelector("#display-age").textContent = age;
  document.querySelector("#display-city").textContent = city;
}

showBtn.addEventListener("click", () => {
  renderUserInfo(userInfo);
});

// Additional Task 8

const intputForNum = document.querySelector("#intput-for-num");
const addNumBtn = document.querySelector("#add-num-btn");
const outputMaxNum = document.querySelector("#output-max-num");
const outputAllNums = document.querySelector("#output-all-nums");

let newNumberArr = [];

addNumBtn.addEventListener("click", () => {
  let newNumber = Number(intputForNum.value);
  newNumberArr = [...newNumberArr, newNumber];
  outputAllNums.textContent = [...newNumberArr].join(", ");
  outputMaxNum.textContent = Math.max(...newNumberArr);
  intputForNum.value = "";
});

// Additional Task 9 & 10

let tasks = [
  { id: 1, title: "Вивчити Spread" },
  {
    id: 2,
    title: "Вивчити Map",
  },
];

const taskList = document.querySelector("#task-list");
const statsDiv = document.querySelector("#stats");
const input = document.querySelector("#task-input");

function render() {
  taskList.innerHTML = "";

  const statsMap = new Map();
  statsMap.set("Всього", tasks.length);

  statsDiv.innerHTML = `📊 Всього: ${statsMap.get("Всього")} `;

  tasks.forEach(({ title, completed }) => {
    const li = document.createElement("li");
    li.textContent = `⏳ ${title}`;
    li.style.listStyle = "none";
    taskList.appendChild(li);
  });
}

document.querySelector("#add-task-btn").addEventListener("click", () => {
  const title = input.value.trim();
  if (!title) return;

  const newTask = {
    id: Date.now(),
    title: title,
  };

  tasks = [...tasks, newTask];

  input.value = "";
  render();
});

render();

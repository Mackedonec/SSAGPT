//  Task 1

const startBtn = document.querySelector("#start-btn");

startBtn.addEventListener("click", () => {
  console.log("Start");
  document.querySelector("#start-text").textContent = `"Start"`;
  setTimeout(() => {
    console.log("Async task");
    document.querySelector("#set-text").textContent = `"Async task"`;
  }, 2000);
  console.log("End");
  document.querySelector("#end-text").textContent = `"End"`;
});

// End зʼявляється раніше, тому що setTimeout
// передає callback у чергу виконання.
// Поки весь синхронний код не завершиться,
// callback виконуватися не буде.

//  Task 2

const userInfo = document.querySelector("#user-info");

function loadData(callback) {
  setTimeout(() => {
    const user = {
      name: "Igor",
      age: 21,
      city: "Kyiv",
    };

    callback(user);
  }, 2000);
}

function renderUser(userData) {
  userInfo.textContent = `Name: ${userData.name}, Age: ${userData.age}, City: ${userData.city}`;
}

loadData(renderUser);

//  Task 3

setTimeout(() => {
  console.log("Завантаження користувача");
  document.querySelector("#loading-user-text").textContent =
    `"Завантаження користувача"`;
  setTimeout(() => {
    console.log("Завантаження товарів");
    document.querySelector("#loading-goods-text").textContent =
      `"Завантаження товарів"`;
    setTimeout(() => {
      console.log("Завантаження замовлень");
      document.querySelector("#loading-orders-text").textContent =
        `"Завантаження замовлень"`;
    }, 500);
  }, 500);
}, 500);

//  Task 4

const userName = document.querySelector("#user-name");
const userAge = document.querySelector("#user-age");
const userRole = document.querySelector("#user-role");
const checkUserBtn = document.querySelector("#check-user");
const usersInfo = document.querySelector("#users-info");

function setUserRole(user) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const age = Number(user.age);
      const name = user.name;

      if (!age || !name) {
        reject(new Error(`empty input`));
      } else if (age >= 18) {
        user.role = "admin";
        user.isAccess = true;
        resolve(`${name} get "${user.role}" role`);
      } else {
        user.role = "user";
        user.isAccess = false;
        reject(new Error(`${name} too young`));
      }
    }, 1500);
  });
}

checkUserBtn.addEventListener("click", () => {
  const user = {
    name: userName.value,
    age: userAge.value,
    role: userRole.value,
    isAccess: false,
  };

  usersInfo.textContent = "Checking...";

  setUserRole(user)
    .then((data) => {
      usersInfo.textContent = data;
      userRole.value = user.role;
    })
    .catch((error) => {
      usersInfo.textContent = error.message;
      userRole.value = user.role || "undefined";
    });
});

//  Task 5

const inputNum = document.querySelector("#input-num");
const outputFirst = document.querySelector("#output-first");
const outputSecond = document.querySelector("#output-second");
const outputThird = document.querySelector("#output-third");

function numPromise(num) {
  return new Promise((resolve) => {
    const parsedNum = Number(num);

    resolve(parsedNum);
  });
}

inputNum.addEventListener("input", () => {
  const num = inputNum.value;

  numPromise(num)
    .then((result) => {
      outputFirst.textContent = `Initial: ${result}`;
      return result * 2;
    })
    .then((result) => {
      outputSecond.textContent = `Multiplied by 2: ${result}`;
      return result + 10;
    })
    .then((result) => {
      outputThird.textContent = `Added 10: ${result}`;
    });
});

// Task 6

const outputAllPromises = document.querySelector("#output-all-promises");

const userData = new Promise((resolve) => {
  setTimeout(() => {
    resolve({ name: "bob", age: 22, role: "customer" });
  }, 2000);
});

const goodsData = new Promise((resolve) => {
  setTimeout(() => {
    resolve([
      { name: "sugar", quantity: 10 },
      { name: "salt", quantity: 20 },
    ]);
  }, 500);
});

Promise.all([userData, goodsData])
  .then(([user, goods]) => {
    const userHTML = `
      <div>
        <h3>User: ${user.name}</h3>
        <p>Role: ${user.role}, Age: ${user.age}</p>
      </div>
    `;

    const goodsHTML = `
      <ul>
        ${goods.map((item) => `<li>${item.name} — ${item.quantity}</li>`).join("")}
      </ul>
    `;

    outputAllPromises.innerHTML = `${userHTML} <h4>Goods:</h4> ${goodsHTML}`;
  })
  .catch((err) => {
    outputAllPromises.textContent = "Error: " + err.message;
  });

// Task 7

const outputAwait = document.querySelector("#output-await");
const outputPromise = document.querySelector("#output-promise");

function testPromis() {
  return new Promise((resolve, reject) => {
    setTimeout(() => resolve("Stop-stop-stop"), 1000);
  });
}

testPromis().then((result) => {
  outputPromise.textContent = result;
  console.log(result);
});

async function testAwait() {
  const promise = new Promise((resolve, reject) => {
    setTimeout(() => resolve("Go-go-go"), 1500);
  });
  const result = await promise;
  outputAwait.textContent = result;
  console.log(result);
}
testAwait();

// Task 8

const outputError = document.querySelector("#output-error");

async function func() {
  const promis = new Promise((resolve, reject) => {
    setTimeout(() => reject(new Error("Some error")), 1500);
  });
  try {
    const result = await promis;
    console.log(result);
  } catch (error) {
    outputError.textContent = error.message;
  }
}
func();

// Task 9

// export async function getUser() {
//   const userData = new Promise((resolve) => {
//     setTimeout(() => {
//       resolve({ name: "Bob", age: 22, role: "customer" });
//     }, 2000);
//   });

//   return await userData;
// }

import { getUser } from "./script2.js";

const outputModule = document.querySelector("#output-module");

async function render() {
  outputModule.textContent = "Loading...";
  try {
    const user = await getUser();

    outputModule.textContent = `User: ${user.name}, Age: ${user.age}, Role: ${user.role}`;
  } catch (error) {
    outputModule.textContent = "Error loading user";
  }
}

render();

// Task 10

const addNewUserBtn = document.querySelector("#add-new-user");
const newUserName = document.querySelector("#new-user-name");
const outputList = document.querySelector("#users-list");

const usersMap = new Map();

async function saveUser(id, name) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (!name) {
        reject(new Error("Fields cannot be empty!"));
      } else {
        resolve({ id, name });
      }
    }, 1000);
  });
}

async function addNewUser() {
  const name = newUserName.value.trim();
  const id = Date.now();

  try {
    outputList.innerHTML += `<li>Saving ${name}...</li>`;

    const savedUser = await saveUser(id, name);

    usersMap.set(savedUser.id, savedUser.name);
  } catch (error) {
    alert("Error: " + error.message);
  }
  renderUsers();
}

function renderUsers() {
  outputList.innerHTML = "";
  usersMap.forEach((id, name) => {
    outputList.innerHTML += `<li><strong>${name}</strong> has ${id}</li>`;
  });
}

addNewUserBtn.addEventListener("click", addNewUser);

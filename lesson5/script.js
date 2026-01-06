// Task 1

const intoText = document.querySelector(".into-text");

intoText.textContent = "DOM працює";

// Task 2

const changeBtn = document.querySelector("#changeBtn");
const title = document.querySelector("#title");

function changeText() {
  if (title.textContent === "Текст змінено") {
    title.textContent = "Текст не змінено";
  } else {
    title.textContent = "Текст змінено";
  }
}

changeBtn.addEventListener("click", () => {
  changeText();
});

// Task 3

const menuItems = document.querySelectorAll(".menu-item");

menuItems.forEach((item) => (item.textContent = "Пункт меню"));

// Task 4

const textContainer = document.querySelector("#container");

textContainer.innerHTML = `
<p>Новий параграф</p>
`;

// Task 5

const textBox = document.querySelector("#box");
const addTextBtn = document.querySelector("#addTextBtn");
const deleteTextBtn = document.querySelector("#deleteTextBtn");

function addSpan() {
  const newSpan = document.createElement("span");
  newSpan.className = "newSpam";
  newSpan.style.display = "block";
  newSpan.style.padding = "2px";
  newSpan.textContent = "Новий елемент";
  textBox.appendChild(newSpan);
}

function deleteSpan() {
  const oldSpan = document.querySelector(".newSpam");
  if (oldSpan) {
    oldSpan.remove();
  }
}

addTextBtn.addEventListener("click", () => {
  addSpan();
});

deleteTextBtn.addEventListener("click", () => {
  deleteSpan();
});

// Task 6

const divMessage = document.querySelector("#message");
const changeBtn2 = document.querySelector("#changeBtn2");

function changeHTML() {
  if (divMessage.textContent === "DOM не оновлено") {
    divMessage.innerHTML = `
    <strong>Увага!</strong> DOM оновлено
    `;
  } else {
    divMessage.textContent = "DOM не оновлено";
  }
}

changeBtn2.addEventListener("click", () => {
  changeHTML();
});

// Task 7

const nameInput = document.querySelector("#nameInput");
const output = document.querySelector("#output");

nameInput.addEventListener("blur", () => {
  output.textContent = nameInput.value;
});

// nameInput.addEventListener("input", () => {
//   output.textContent = nameInput.value;
// });

nameInput.addEventListener("focus", () => {
  nameInput.value = "";
  output.textContent = "some text";
});

// Task 8

const bannerBox = document.querySelector("#baner-box");
const removeBtn = document.querySelector("#removeBtn");

removeBtn.addEventListener("click", () => {
  const banner = document.querySelector(".banner");
  if (banner) {
    banner.remove();
  } else {
    bannerBox.innerHTML = `
  <div class="banner">baner</div>
  `;
  }
});

// Task 9

const colorBox = document.querySelector("#colorBox");
colorBox.style.backgroundColor = "transparent";
colorBox.style.border = "2px solid red";
colorBox.style.cursor = "pointer";
colorBox.style.padding = "3px";

function tomato() {
  if (colorBox.textContent === "Пасивний") {
    colorBox.style.backgroundColor = "tomato";
    colorBox.textContent = "Активний";
  } else {
    colorBox.style.backgroundColor = "transparent";
    colorBox.textContent = "Пасивний";
  }
}

colorBox.addEventListener("click", () => {
  tomato();
});

// Task 10

const counterBtn = document.querySelector("#counterBtn");
const counterValue = document.querySelector("#counterValue");
let count = 0;

function updateCounter() {
  count++;
  counterValue.textContent = count;
}

counterBtn.addEventListener("click", () => {
  updateCounter();
});

// Additional Task 1

const addItemBtn = document.querySelector("#add-item-btn");
const ulList = document.querySelector("#list");

const stringArr = ["1", "2", "3"];

// function addItemInUlList() {
//   let ulHtml = "";
//   for (const item of stringArr) {
//     ulHtml += `
//   <li>${item}</li>
//   `;
//   }
//   ulList.innerHTML = ulHtml;
// }

function addItemInUlList() {
  let ulHtml = "";
  stringArr.map((item) => (ulHtml += `<li>${item}</li>`));
  ulList.innerHTML = ulHtml;
}

addItemBtn.addEventListener("click", () => {
  addItemInUlList();
});

// Additional Task 2

const showBtn = document.querySelector("#show-btn");
const textInput = document.querySelector("#text-input");
const textOutput = document.querySelector("#text-output");

function showInputInOutput() {
  if (!textInput.value) {
    textOutput.style.color = "red";
    textOutput.textContent = "Error";
  } else {
    textOutput.style.color = "black";
    textOutput.textContent = textInput.value;
  }
}

textInput.addEventListener("focus", () => {
  textInput.value = "";
  textOutput.textContent = "...";
});

showBtn.addEventListener("click", () => {
  showInputInOutput();
});

// Additional Task 3

const renderNumbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];

const liBox = document.querySelector("#li-box");
let liHtml = "";
renderNumbers.map((el) => {
  if (el % 2 === 0) {
    liHtml += `<li>${el}</li>`;
  }
  liBox.innerHTML = liHtml;
});

// Additional Task 4

const actionsBtn = document.querySelectorAll(".action-btn");

actionsBtn.forEach((btn) => {
  btn.addEventListener("click", (e) => {
    const defaultText = "Натисни мене";
    const activeText = "Натиснуто";

    if (e.target.textContent === defaultText) {
      e.target.textContent = activeText;
    } else {
      e.target.textContent = defaultText;
    }
  });
});

// Additional Task 5

const tasksArr = [
  "task 1",
  "task 2",
  "task 3",
  "task 4",
  "task 5",
  "task 6",
  "task 7",
  "task 8",
  "task 9",
  "task 10",
  "task 11",
  "task 12",
  "task 13",
  "task 14",
  "task 15",
];

const liBox2 = document.querySelector(".li-box");
// let liHtml2 = "";
// tasksArr.map((el) => {
//   liHtml2 += `<li class="at6-li">${el}</li>`;
//   liBox2.innerHTML = liHtml2;
// });

const liHtml2 = tasksArr.map((el) => `<li class="at5-li">${el}</li>`).join("");

liBox2.innerHTML = liHtml2;

const liItems = document.querySelectorAll(".at5-li");

liItems.forEach((btn) => {
  btn.addEventListener("click", (e) => {
    e.target.classList.toggle("crossed-text");
  });
});

// Additional Task 6

const checkNumber = document.querySelector(".check-number");
const inputNumber = document.querySelector(".input-number");
const ouputNumber = document.querySelector(".ouput-number");

checkNumber.addEventListener("click", () => {
  try {
    if (!inputNumber.value) {
      throw new Error("Enter correct value");
    }
    ouputNumber.textContent = inputNumber.value;
  } catch (error) {
    ouputNumber.textContent = error.message;
  }
});

inputNumber.addEventListener("focus", () => {
  inputNumber.value = "";
  ouputNumber.textContent = "...";
});

// Additional Task 7

const toggleBtn = document.querySelector("#toggle-btn");
const divBox = document.querySelector("#div-box");

function toggleActiv() {
  divBox.classList.toggle("active");
  if (divBox.classList.contains("active")) {
    divBox.textContent = "box is active";
  } else {
    divBox.textContent = "box";
  }
}

toggleBtn.addEventListener("click", () => {
  toggleActiv();
});

// Additional Task 8

const namesArr = [
  "bob",
  "bib",
  "biblebob",
  "beb",
  "chupadud",
  "bab",
  "chupakabra",
  "nobib",
];
const outputForNames = document.querySelector("#output-for-names");
const intputForNames = document.querySelector("#intput-for-names");

outputForNames.textContent = namesArr.join(", ");

intputForNames.addEventListener("input", () => {
  const values = intputForNames.value.toLowerCase();

  const filteredNames = namesArr.filter((name) =>
    name.toLowerCase().includes(values)
  );
  outputForNames.textContent = filteredNames.join(", ");
});

intputForNames.addEventListener("focus", () => {
  intputForNames.value = "";
  outputForNames.textContent = namesArr.join(", ");
});

// Additional Task 9

const calcBtn = document.querySelector("#calc-btn");
const uotputSum = document.querySelector("#uotput-sum");

function sumTwoRandom() {
  let a = Math.floor(Math.random() * 500 + 1);
  let b = Math.floor(Math.random() * 500 + 1);
  let sum = a + b;

  uotputSum.textContent = sum;
}

calcBtn.addEventListener("click", () => {
  sumTwoRandom();
});

// Additional Task 10

const newLi = document.querySelectorAll(".at10-li");

let lastSavedTarget = null;

newLi.forEach((item) => {
  item.addEventListener("click", (e) => {
    if (lastSavedTarget) {
      lastSavedTarget.classList.remove("crossed-text");
    }
    e.currentTarget.classList.add("crossed-text");
    lastSavedTarget = e.currentTarget;
  });
});

// Additional Task 11

const newNamesArr = [...namesArr];
const deleteLastBtn = document.querySelector("#delete-last-btn");
const uotputRest = document.querySelector("#uotput-rest");
uotputRest.textContent = newNamesArr.join(", ");

function deleteLast() {
  if (newNamesArr.length === 0) {
    newNamesArr.push(...namesArr);
    uotputRest.textContent = newNamesArr.join(", ");
    return;
  }
  newNamesArr.pop();
  uotputRest.textContent = newNamesArr.join(", ");
}

deleteLastBtn.addEventListener("click", () => {
  deleteLast();
});

// Additional Task 12

const form = document.querySelector("#form");
const formInput = document.querySelector("#form-input");
const formInputOutput = document.querySelector("#form-input-output");
const submitButton = document.querySelector("#submit");

form.addEventListener("submit", (event) => {
  event.preventDefault();
  const inputValue = formInput.value.trim();
  if (!formInput.value) {
    formInputOutput.textContent = `Error input-field is empty`;
    formInputOutput.style.color = "red";
  } else {
    formInputOutput.textContent = `You entered ${inputValue}`;
    formInputOutput.style.color = "green";
  }
});

formInput.addEventListener("focus", () => {
  formInput.value = "";
  formInputOutput.textContent = "...";
});

// Additional Task 13

const checkBoxes = document.querySelectorAll('input[type="checkbox"]');
const outputChecked = document.querySelector("#output-checked");

function updateCount() {
  const checkedCount = [...checkBoxes].filter((el) => el.checked).length;
  outputChecked.textContent = checkedCount;
}

checkBoxes.forEach((box) => {
  box.addEventListener("change", updateCount);
});

updateCount();

// Additional Task 14

const beforeSorted = document.querySelector("#before");
const afterSorted = document.querySelector("#after");
const sortedButton = document.querySelector("#tosorted");

function toSortArr(arr) {
  beforeSorted.textContent = arr.join(", ");
  afterSorted.textContent = arr.join(", ");
  sortedButton.addEventListener("click", () => {
    const sortedArr = arr.toSorted((a, b) => a - b);
    afterSorted.textContent = sortedArr.join(", ");
  });
}
const arrToSort = [120, 2, 51, 6, 93, 41, 8, 9, 12, 55, 77, 135];
toSortArr(arrToSort);

// Additional Task 15

const timerBtn = document.querySelector("#timer-btn");
const timerOutput = document.querySelector("#timer-output");

timerBtn.addEventListener("click", () => {
  let count = 5;
  const interval = setInterval(() => {
    timerOutput.textContent = count;
    count--;
    if (count < 0) {
      clearInterval(interval);
      timerOutput.textContent = "...";
    }
  }, 1000);
});

// Additional Task 16

const rundomArr = ["item1", "grog", "cupper", "loch", "window"];
const inputTextToadd = document.querySelector("#input-text-toadd");
const addInputTextButton = document.querySelector("#add-input-text");
const outputForArr = document.querySelector("#output-arr");

outputForArr.textContent = rundomArr.join(", ");

addInputTextButton.addEventListener("click", () => {
  let newArr = [];
  if (inputTextToadd.value === "") {
    return;
  }
  rundomArr.splice(rundomArr.length, 0, inputTextToadd.value);
  newArr = rundomArr;
  outputForArr.textContent = newArr.join(", ");
  inputTextToadd.value = "";
});

// Additional Task 17

const text1 =
  "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Placeat alias in similique?";

const text2 =
  "Voluptates asperiores nisi alias ullam eos? Quo ad quae eligendi rerum ullam voluptatum nam eos inventore architecto. Quibusdam.";

const textArr = document.querySelector("#text-arr");
textArr.textContent = text1;

textArr.addEventListener("mouseover", () => {
  textArr.textContent = text2;
});

textArr.addEventListener("mouseout", () => {
  textArr.textContent = text1;
});

// Additional Task 18

const rundomNumberArr = [5, 15, 86, 95, 20, 56, 87, 8888, 259121, 2];
const showMaxButton = document.querySelector("#show-max");
const numArr = document.querySelector("#num-arr");
numArr.textContent = rundomNumberArr.join(", ");

showMaxButton.addEventListener("click", () => {
  numArr.textContent = Math.max(...rundomNumberArr);
});

// Additional Task 19

const colors = [
  "rgba(93, 123, 240, 0.398)",
  "rgba(98, 240, 93, 0.398)",
  "rgba(240, 215, 93, 0.398)",
  "rgba(240, 100, 93, 0.398)",
  "rgba(240, 93, 228, 0.398)",
  "rgba(24, 23, 23, 0.398)",
  "rgba(255, 255, 255, 0.398)",
];
const coloredBody = document.querySelector("#at19-body");
const changeColorButton = document.querySelector("#change-color");

let lastIndex = -1;

changeColorButton.addEventListener("click", () => {
  let newIndex;
  do {
    newIndex = Math.floor(Math.random() * colors.length);
  } while (newIndex === lastIndex);
  lastIndex = newIndex;
  coloredBody.style.backgroundColor = colors[newIndex];
  changeColorButton.style.backgroundColor = colors[newIndex];
});

// Additional Task 20

const tasks = ["Task1", "Task2", "Task3", "Task4", "Task5"];
const liWrapper = document.querySelector("#li-wrapper");
const clearAllBtn = document.querySelector("#clear-all");

const liluHtml = tasks.map((el) => `<li>${el}</li>`).join("");
liWrapper.innerHTML = liluHtml;

clearAllBtn.addEventListener("click", () => {
  tasks.length = 0;
  liWrapper.innerHTML = "";
});

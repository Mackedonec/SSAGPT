// Task 1

const windowWH = document.querySelector("#wh");

function size() {
  let height = window.innerHeight;
  let width = window.innerWidth;
  windowWH.textContent = `Brouser: wight = ${width}, height = ${height} `;
}
size();

window.addEventListener("resize", size);

// Task 2

const reloadBtn = document.querySelector("#reload-btn");

reloadBtn.addEventListener("click", () => {
  location.reload();
});

// Task 3

const currentUrl = document.querySelector("#current-url");

currentUrl.textContent = location.href;

// Task 4

const openNewTab = document.querySelector("#open-tab");
const width = 450;
const height = 450;
const leftWidth = Math.floor(
  window.screen.width / 2 - width / 2 + window.screenX
);
const topHeight = Math.floor(
  window.screen.height / 2 - height / 2 + window.screenY
);

openNewTab.addEventListener("click", () => {
  window.open(
    "https://google.com",
    "google",
    `width=${width},height=${height},left=${leftWidth},top=${topHeight}`
  );
});

// Task 5

const onOrOff = document.querySelector("#on-off");

function onOff() {
  const online = navigator.onLine;
  if (online) {
    onOrOff.textContent = "Online";
  } else {
    onOrOff.textContent = "Offline";
  }
}
onOff();

window.addEventListener("online", onOff);
window.addEventListener("offline", onOff);

// Task 6

const backBtn = document.querySelector("#back-btn");

backBtn.addEventListener("click", () => {
  history.back();
});

// Task 7

const whScreen = document.querySelector("#wh-screen");

function screenSize() {
  let height = window.screen.height;
  let width = window.screen.width;
  whScreen.textContent = `Screen: wight = ${width}, height = ${height} `;
}
screenSize();

// Task 8

const redirectBtn = document.querySelector("#redirect-btn");

redirectBtn.addEventListener("click", () => {
  location.assign("https://google.com");
});

// Task 9

setTimeout(function () {
  alert("Час вийшов");
}, 3000);

// Task 10

const startCounter = document.querySelector("#start-counter");
const timer = document.querySelector("#timer");

startCounter.addEventListener("click", () => {
  let count = 5;
  const interval = setInterval(() => {
    timer.textContent = count;
    count--;

    if (count < 0) {
      clearInterval(interval);
      timer.textContent = 0;
    }
  }, 1000);
});

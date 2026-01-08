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

// Additional Task 1

const showSize = document.querySelector("#show-size");
const sizeOutput = document.querySelector("#size-output");

showSize.addEventListener("click", () => {
  sizeOutput.textContent = `Brouser: wight = ${window.innerWidth}, height = ${window.innerHeight} `;
});

// Additional Task 2

const scrollDown = document.querySelector("#scroll-down");

scrollDown.addEventListener("click", () => {
  window.scrollBy(0, 300);
});

// Additional Task 3

const openBtn = document.querySelector("#open-modal");
const closeModal = document.querySelector("#close-modal");
const modal = document.querySelector(".at3-modal");

openBtn.addEventListener("click", () => {
  modal.classList.remove("hidden");
  modal.scrollIntoView({ behavior: "smooth", block: "center" });
  document.body.style.overflow = "hidden";
  document.body.classList.add("modal-open");
});

closeModal.addEventListener("click", () => {
  modal.classList.add("hidden");
  openBtn.scrollIntoView({ behavior: "smooth", block: "center" });
  document.body.style.overflow = "auto";
  document.body.classList.remove("modal-open");
});

// Additional Task 4

const confirmBtn = document.querySelector("#confirm-btn");
const confirmResult = document.querySelector("#confirm-result");

confirmBtn.addEventListener("click", () => {
  const result = confirm("Are you agree?");
  confirmResult.textContent = `Result: ${result}`;
  confirmResult.style.color = result ? "green" : "red";
});

// Additional Task 5

const delayText = document.querySelector("#delay-text");
const delayedOutput = document.querySelector("#delayed-output");

delayText.addEventListener("click", () => {
  delayedOutput.classList.toggle("active");
  delayText.disabled = true;
  if (delayedOutput.classList.contains("active")) {
    setTimeout(() => {
      delayedOutput.textContent = "Text after delay";
      delayText.disabled = false;
    }, 2000);
  } else {
    delayedOutput.textContent = "Text before delay";
    delayText.disabled = false;
  }
});

// Additional Task 6

const checkOnline = document.querySelector("#check-online");
const onlineStatus = document.querySelector("#online-status");

checkOnline.addEventListener("click", () => {
  const online = navigator.onLine;
  online
    ? (onlineStatus.textContent = "Online")
    : (onlineStatus.textContent = "Offline");
});

// Additional Task 7

const goBack = document.querySelector("#go-back");

goBack.addEventListener("click", () => {
  history.back();
});

// Additional Task 8

const startTimerButton = document.querySelector("#start-timer");
const timeOutput = document.querySelector("#time");

startTimerButton.addEventListener("click", () => {
  let count = 10;
  const interval = setInterval(() => {
    timeOutput.textContent = count;
    count--;

    if (count < 0) {
      clearInterval(interval);
      timeOutput.textContent = "Готово";
      setTimeout(() => {
        timeOutput.textContent = "Очікування";
      }, 1500);
    }
  }, 1000);
});

// Additional Task 9

const redirectAfter = document.querySelector("#redirect-after");

redirectAfter.addEventListener("click", () => {
  setTimeout(() => {
    location.assign("https://google.com");
  }, 3000);
});

// Additional Task 10

const resizeAlert = document.querySelector("#resize-alert");

let isResizeTrackingActive = false;

function handleResize() {
  if (window.innerWidth < 600) {
    alert("Ширина вікна менше 600px!");
  }
}

resizeAlert.addEventListener("click", () => {
  isResizeTrackingActive = !isResizeTrackingActive;

  if (isResizeTrackingActive) {
    window.addEventListener("resize", handleResize);
    resizeAlert.textContent = "Вимкнути resize alert";
  } else {
    window.removeEventListener("resize", handleResize);
    resizeAlert.textContent = "Увімкнути resize alert";
  }
});

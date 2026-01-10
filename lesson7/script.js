// Easy lvl
// Task 1

const regCat = /cat/i;

// Task 2

const regHello = /^Hello/;

// Task 3

const regSunbol = /!$/;

// Task 4

// const reg09 = /[0-9]+/
const reg09 = /\d+/;

// Task 5

// const reg09 = /[0-9]+/g
const reg09All = /\d+/g;

// Task 6

const regAz = /[a-z]/;

// Task 7

const regAZ = /[A-Z]/;

// Task 8

const regWhiteSpace = /\s/;

// Task 9

const regTreeAz = /[a-z]{3}/i;

// Task 10

const regNumOnly = /^\d+$/;

// Middle lvl
// Task 1

const str = "dgdfgdf 12 dfgtrt 12.58 dfthtyj fghghg 15 fghfhhnhn 65 ghfhfgfgh";
const regNum = /\d+/;

console.log(regNum.test(str));

// Task 2

const emailExampleStr = "example@domaindomain";
const emailExampleStr2 = "example@domain.domain";
const regMail = /^\w+@[a-z]+\.[a-z]+$/i;
console.log(regMail.test(emailExampleStr));
console.log(regMail.test(emailExampleStr2));

// Task 3

const telNumber = "+380991234567";
const telNumber2 = "380991234567";
const telNumber3 = "+38099123456789";
const regTelNumber = /^\+380\d{9}$/;
console.log(regTelNumber.test(telNumber));
console.log(regTelNumber.test(telNumber2));
console.log(regTelNumber.test(telNumber3));

// Task 4

const regFiveAndMore = /\w{5,}/gi;
console.log(str.match(regFiveAndMore));

// Task 5

const htmlStr = `
<p>Text</p>
<p>Text</p>
<span>Text</span>
<div>
 <p>Text</p>
 <p>Text</p>
</div>
`;

const regDeleteHtml = /<\/?[a-z]+>/gim;
console.log(htmlStr.replace(regDeleteHtml, ""));

// Task 6

const dataStr = "2025-01-08";
const dataStr2 = "01-08-2025";
const dataStr3 = "2025-1-8";
const regData = /^\d{4}\-\d{2}\-\d{2}$/;
console.log(regData.test(dataStr));
console.log(regData.test(dataStr2));
console.log(regData.test(dataStr3));

// Task 7

const strWithSpace = "Hello   world    !";

const regManySpaces = /\s{2,}/g;
console.log(strWithSpace.replace(regManySpaces, " "));

// Task 8

const passwordStr = "PAssword23";
const passwordStr2 = "PAssw23";
const passwordStr3 = "passwo23";
const regPassword = /^(?=.*[A-Z])(?=.*\d).{8,}$/;

console.log(regPassword.test(passwordStr));
console.log(regPassword.test(passwordStr2));
console.log(regPassword.test(passwordStr3));

// Task 9

const strWithPrice = "Ціни: 100, 250, 30";
const regPrice = /\d+/g;
console.log(strWithPrice.match(regPrice));

// Task 10

const userName = "userName";
const userName2 = "2userName";
const userName3 = "userNamefgfgfgfgfgfgfgffgfgfgfgfgfgfgfgf";
const userName4 = "us";
const userName5 = "юзернейм";
const regUserName = /^[a-z]\w{2,15}$/i;
console.log(regUserName.test(userName));
console.log(regUserName.test(userName2));
console.log(regUserName.test(userName3));
console.log(regUserName.test(userName4));
console.log(regUserName.test(userName5));

// Additional Task 1 & 2 & 3 & 5

const myForm = document.querySelector("#my-form");
const emailInput = document.querySelector("#email-input");
const emailOutput = document.querySelector("#email-output");
const passwordInput = document.querySelector("#password-input");
const passwordOutput = document.querySelector("#password-output");
const nameInput = document.querySelector("#name-input");
const nameOutput = document.querySelector("#name-output");
const phoneInput = document.querySelector("#phone-input");
const phoneOutput = document.querySelector("#phone-output");
const submitBtn = document.querySelector("#submit-btn");

myForm.addEventListener("submit", (event) => {
  event.preventDefault();
  let valid = true;

  const regMail = /^\w+@[a-z]+\.[a-z]+$/i;
  const emailValue = emailInput.value;

  if (!emailValue) {
    emailOutput.textContent = "Error input-field is empty";
    emailOutput.classList.add("alert");
    valid = false;
  } else if (regMail.test(emailValue) === false) {
    emailOutput.textContent = "Error incorect email";
    emailOutput.classList.add("alert");
    valid = false;
  } else {
    emailOutput.textContent = "Success your email acepted";
    emailOutput.classList.remove("alert");
    emailOutput.classList.add("success");
  }

  const regPassword = /^(?=.*[A-Z])(?=.*\d).{8,}$/;
  const passwordValue = passwordInput.value;

  if (!passwordValue) {
    passwordOutput.textContent = "Error input-field is empty";
    passwordOutput.classList.add("alert");
    valid = false;
  } else if (regPassword.test(passwordValue) === false) {
    passwordOutput.textContent = "Error incorect password";
    passwordOutput.classList.add("alert");
    valid = false;
  } else {
    passwordOutput.textContent = "Success your password acepted";
    passwordOutput.classList.remove("alert");
    passwordOutput.classList.add("success");
  }

  const regName = /^[a-z]\w{2,15}$/i;
  const nameValue = nameInput.value;

  if (!nameValue) {
    nameOutput.textContent = "Error input-field is empty";
    nameOutput.classList.add("alert");
    valid = false;
  } else if (regName.test(nameValue) === false) {
    nameOutput.textContent = "Error incorect name";
    nameOutput.classList.add("alert");
    valid = false;
  } else {
    nameOutput.textContent = "Success your name acepted";
    nameOutput.classList.remove("alert");
    nameOutput.classList.add("success");
  }

  const regTelNumber = /^\+380\d{9}$/;
  const phoneValue = phoneInput.value;

  if (!phoneValue) {
    phoneOutput.textContent = "Error input-field is empty";
    phoneOutput.classList.add("alert");
    valid = false;
  } else if (regTelNumber.test(phoneValue) === false) {
    phoneOutput.textContent = "Error invalid phone";
    phoneOutput.classList.add("alert");
    valid = false;
  } else {
    phoneOutput.textContent = "Success valid phone";
    phoneOutput.classList.remove("alert");
    phoneOutput.classList.add("success");
  }

  if (valid) {
    setTimeout(() => {
      passwordInput.value = "";
      passwordOutput.textContent = "...";
      passwordOutput.classList.remove("success");
      emailInput.value = "";
      emailOutput.textContent = "...";
      emailOutput.classList.remove("success");
      nameInput.value = "";
      nameOutput.textContent = "...";
      nameOutput.classList.remove("success");
      phoneInput.value = "";
      phoneOutput.textContent = "...";
      phoneOutput.classList.remove("success");
    }, 1000);
  }
});

// Additional Task 4

const textarea = document.querySelector("#textarea");
const checkBtn = document.querySelector("#check-btn");

checkBtn.addEventListener("click", () => {
  const regManySpaces = /\s{2,}/g;
  const newStr = textarea.value.replace(regManySpaces, " ");
  textarea.value = newStr.trim();
});

// Additional Task 6

const searchInput = document.querySelector("#search-input");
const contentBlock = document.querySelector("#content-block");
const originalText = contentBlock.textContent;

searchInput.addEventListener("input", () => {
  const query = searchInput.value.trim();

  if (query === "") {
    contentBlock.textContent = originalText;
    return;
  }

  const regex = new RegExp(`(${query})`, "gi");
  const highlightedText = originalText.replace(
    regex,
    '<span class="highlight">$1</span>'
  );

  contentBlock.innerHTML = highlightedText;
});

searchInput.addEventListener("focus", () => {
  searchInput.value = "";
  contentBlock.textContent = originalText;
});

// Additional Task 7

const htmlTagsInput = document.querySelector("#html-tags");
const clearTagButton = document.querySelector("#clear-tags");
const defaultText = `<h1>sample text</h1>
<p>try clear button</p>
<span>or</span>
<h2>write</h2>
<p>your</p>
<span>own</span>
<p>text</p>`;
htmlTagsInput.value = defaultText;

clearTagButton.addEventListener("click", () => {
  const regDeleteHtml = /<\/?[a-z0-9]+>/gim;
  const cleanedText = htmlTagsInput.value.replace(regDeleteHtml, " ");
  htmlTagsInput.value = cleanedText.trim();
});

// Additional Task 8

const inputFindNum = document.querySelector("#input-find-num");
const numCount = document.querySelector("#num-count");

inputFindNum.addEventListener("input", () => {
  const regNum = /\d/g;
  const matches = inputFindNum.value.match(regNum) || [];
  numCount.textContent = matches.length;
});

inputFindNum.addEventListener("focus", () => {
  inputFindNum.value = "";
  numCount.textContent = 0;
});

// Additional Task 9

const dateInput = document.querySelector("#date-input");
const dateStatus = document.querySelector("#date-status");

dateInput.addEventListener("blur", () => {
  const regDate = /^\d{4}-\d{2}-\d{2}$/;
  const value = dateInput.value;

  if (regDate.test(value)) {
    dateStatus.textContent = "Формат вірний! ✅";
  } else {
    dateStatus.textContent = "Помилка: використовуйте формат YYYY-MM-DD ❌";
  }
});

dateInput.addEventListener("focus", () => {
  dateInput.value = "";
  dateStatus.textContent = "";
});

// Additional Task 10

const textInput = document.querySelector("#text-only-input");

textInput.addEventListener("input", () => {
  const regForbidden = /[^a-zA-Z\s]/g;
  const currentValue = textInput.value;

  textInput.value = currentValue.replace(regForbidden, "");
});

textInput.addEventListener("focus", () => {
  textInput.value = "";
});

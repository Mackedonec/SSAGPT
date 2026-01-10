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

// Additional Task 1

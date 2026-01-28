// Task 1

const userName: string = "Bob";
const age: number = 22;
const isAdmin: boolean = true;

console.log(`${userName} is ${age}'s old and he is admin? it's ${isAdmin}`);

// Task 2

let myNum: number = 15;
// myNum = "22";
// Error: Type 'string' is not assignable to type 'number'.

// Task 3

let myAny: any = "15";
myAny = 22;
myAny = true;
// з питом any код написаний в ts стає звичайним js, тобто ts втрачає сенс.

// Task 4

function sum(num1: number, num2: number) {
  return num1 + num2;
}

console.log(sum(2, 5));

// Task 5

function returnString(str: string): string {
  return str;
}

console.log(returnString("22"));
// console.log(returnString(22));
// Error: Argument of type 'number' is not assignable to parameter of type 'string'.

// Task 6

function returnVoid(str: string): void {
  console.log(str);
  // return str;
  // Error: Type 'string' is not assignable to type 'void'.
}

// Task 7

function createError(message: string): never {
  throw new Error(message);
}

// try {
//   createError("Some critical error");
// } catch (error) {
//   console.error("Catch:", error.message);
// }
// Error: 'error' is of type 'unknown'.

// Task 8

let myObj: { street: string; house: number } = {
  street: "Verhovinnaya",
  house: 22,
};

console.log(myObj);
myObj.house = 32;
console.log(myObj);
// myObj.house = "32";
// Error: Type 'string' is not assignable to type 'number'.

// Task 9

let myArr: number[] = [1, 2, 3, 4, 5, 6, 7, 8, 9];
console.log(myArr);
myArr.push(10);
console.log(myArr);
myArr.splice(Math.floor(myArr.length / 2), 0, 55);
console.log(myArr);
// myArr.splice(0, 1, "55");
// Error: Argument of type 'string' is not assignable to parameter of type 'number'.

// Task 10

let myDoubleArr: number[][] = [
  [1, 3, 5, 7],
  [2, 4, 6, 8],
];

console.log(myDoubleArr[0]);
let flatArr = myDoubleArr.flat();
console.log(flatArr[6]);

// Task 11

let tuple: [string, number, boolean] = ["student", 1, true];
// let tuple1: [string, number, boolean] = ["student2", 2, "economist"];
// Error: Type 'string' is not assignable to type 'boolean'.

// tuple.push("university");
// console.log(tuple);
// console.log(tuple[3]);
// Error: Tuple type '[string, number, boolean]' of length '3' has no element at index '3'.

// Task 12

enum role {
  ADMIN = 1,
  USER = 15,
  GUEST = 125,
}

const admin = role.ADMIN;
const user = role.USER;
const guest = role.GUEST;
console.log(admin);
console.log(user);
console.log(guest);

// Task 13

let myData: string | number = "33";
myData = 33;
// myData = true;
// Error: Type 'boolean' is not assignable to type 'string | number'.
// Добзоляє змінювати тип даних на один з заздалегіть визначених.
// Дає деяку гнучкість коду але не втрачає захисту від "шалених ручок"

// Task 14

function getData(data: string | number) {
  if (typeof data === "string") {
    return data.toUpperCase();
  } else {
    return data.toFixed();
  }
}

console.log(getData("Twenty and one"));
console.log(getData(20.1));

// Task 15

type testAlias = number | string;

function getData2(data: testAlias) {
  if (typeof data === "string") {
    return data.toUpperCase();
  } else {
    return data.toFixed();
  }
}

console.log(getData2("Twenty and two"));
console.log(getData2(20.2));

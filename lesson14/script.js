//  Task 1
var __decorate =
  (this && this.__decorate) ||
  function (decorators, target, key, desc) {
    var c = arguments.length,
      r =
        c < 3
          ? target
          : desc === null
            ? (desc = Object.getOwnPropertyDescriptor(target, key))
            : desc,
      d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function")
      r = Reflect.decorate(decorators, target, key, desc);
    else
      for (var i = decorators.length - 1; i >= 0; i--)
        if ((d = decorators[i]))
          r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return (c > 3 && r && Object.defineProperty(target, key, r), r);
  };
class Repository {
  data = [];
  add(item) {
    this.data.push(item);
    console.log(`Add item with ID: ${item.id}`);
  }
  getById(id) {
    return this.data.find((item) => item.id === id);
  }
  getAll() {
    return [...this.data];
  }
}
const userRepository = new Repository();
userRepository.add({ id: 1, name: "Alex", age: 22, email: "alex@test.com" });
userRepository.add({ id: 2, name: "Maria", age: 25, email: "maria@test.com" });
const user = userRepository.getById(1);
console.log(user?.name);
function formatData(value) {
  if (typeof value === "string") {
    return value.toUpperCase();
  } else if (typeof value === "number") {
    return `Number: ${value}`;
  } else if (value instanceof Date) {
    return value.toDateString();
  }
  return String(value);
}
console.log(formatData("12.02.2024"));
console.log(formatData(12022024));
console.log(formatData(new Date()));
//  Task 3
function LogMethod(target, propertyKey, descriptor) {
  const originalMethod = descriptor.value;
  descriptor.value = function (...args) {
    console.log(
      `[LOG]: Виклик методу "${propertyKey}" з аргументами: ${JSON.stringify(args)}`,
    );
    const result = originalMethod.apply(this, args);
    return result;
  };
  return descriptor;
}
class UserService {
  createUser(name) {
    console.log(`Користувача ${name} створено в базі даних.`);
  }
  deleteUser(id) {
    console.log(`Користувача з ID ${id} видалено.`);
  }
}
__decorate([LogMethod], UserService.prototype, "createUser", null);
__decorate([LogMethod], UserService.prototype, "deleteUser", null);
const service = new UserService();
service.createUser("Олександр");
service.deleteUser(42);

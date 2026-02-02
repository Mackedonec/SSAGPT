//  Task 1

interface IEntity {
  id: number;
}

class Repository<T extends IEntity> {
  private data: T[] = [];

  public add(item: T): void {
    this.data.push(item);
    console.log(`Add item with ID: ${item.id}`);
  }

  public getById(id: number): T | undefined {
    return this.data.find((item) => item.id === id);
  }

  public getAll(): T[] {
    return [...this.data];
  }
}

interface User extends IEntity {
  name: string;
  age: number;
  email: string;
}

const userRepository = new Repository<User>();

userRepository.add({ id: 1, name: "Alex", age: 22, email: "alex@test.com" });
userRepository.add({ id: 2, name: "Maria", age: 25, email: "maria@test.com" });

const user = userRepository.getById(1);
console.log(user?.name);

// interface Product extends IEntity {
//   title: string;
//   price: number;
// }
// const productRepository = new Repository<Product>();

//  Task 2

function formatData(value: string): string;
function formatData(value: number): string;
function formatData(value: Date): string;

function formatData(value: any): string {
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

function LogMethod(
  target: any,
  propertyKey: string,
  descriptor: PropertyDescriptor,
) {
  const originalMethod = descriptor.value;

  descriptor.value = function (...args: any[]) {
    console.log(
      `[LOG]: Виклик методу "${propertyKey}" з аргументами: ${JSON.stringify(args)}`,
    );

    const result = originalMethod.apply(this, args);

    return result;
  };

  return descriptor;
}

class UserService {
  @LogMethod
  createUser(name: string): void {
    console.log(`Користувача ${name} створено в базі даних.`);
  }

  @LogMethod
  deleteUser(id: number): void {
    console.log(`Користувача з ID ${id} видалено.`);
  }
}

const service = new UserService();
service.createUser("Олександр");

service.deleteUser(42);

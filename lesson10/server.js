// Task 4 & 5
const http = require("http");

http
  .createServer((request, response) => {
    // response.writeHead(200, { "Content-Type": "text/plain" });
    // response.write("Node.js server works");
    console.log(`Метод запиту: ${request.method}`);
    console.log(`Запитаний URL: ${request.url}`);
    response.writeHead(200, { "Content-Type": "text/html; charset=utf-8" });
    response.write("<h1>Node.js server works</h1>");
    response.write(
      `<p>Ви використали метод: ${request.method} для шляху: ${request.url}</p>`,
    );
    response.end();
  })
  .listen(3000);
console.log("Server running at http://127.0.0.1:3000/");

// request (req): Це об'єкт-потік, який містить усю інформацію про вхідний запит від клієнта (браузера).
//  Через нього ми дізнаємося, яку сторінку хоче відкрити користувач (url), який метод використовує
// (GET, POST), які дані передає та які в нього заголовки (наприклад, тип браузера).

// response (res): Це об'єкт-потік, який ми використовуємо для формування відповіді. За допомогою
// нього ми встановлюємо статус-код (наприклад, 200 OK або 404 Not Found), типи контенту та, власне,
// відправляємо дані (текст, HTML або JSON) назад у браузер.

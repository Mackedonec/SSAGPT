// Task 1 & 2 & 5

const loadUsersBtn = document.querySelector("#load-users-btn");
const usersList = document.querySelector("#users-list");

async function getUserName() {
  const url = "https://jsonplaceholder.typicode.com/users";
  try {
    const response = await fetch(url);

    if (!response.ok) {
      throw new Error(`Помилка завантаження даних`);
    }
    const data = await response.json();
    const htmlContent = data
      .map((user, index) => `<li>${index + 1}. ${user.name}</li>`)
      .join("");

    usersList.innerHTML = htmlContent;
  } catch (error) {
    usersList.innerHTML = `<li class="alert">${error.message}</li>`;
  }
  loadUsersBtn.disabled = false;
}

loadUsersBtn.addEventListener("click", () => {
  loadUsersBtn.disabled = true;
  usersList.innerHTML = "Loading...";
  setTimeout(() => {
    getUserName();
  }, 500);
});

// Task 3

const form = document.querySelector("#my-form");
const userName = document.querySelector("#input-name");
const userNameMsg = document.querySelector("#output-name");
const userEmail = document.querySelector("#input-email");
const userEmailMsg = document.querySelector("#output-email");
const outputMsg = document.querySelector("#output-msg");

form.addEventListener("submit", (event) => {
  event.preventDefault();
  let valid = true;

  const newUser = {
    id: Date.now(),
    title: userName.value,
    email: userEmail.value,
  };

  const regMail = /^\w+@[a-z]+\.[a-z]+$/i;
  const emailValue = userEmail.value;

  if (!emailValue) {
    userEmailMsg.textContent = "Error input-field is empty";
    userEmailMsg.classList.add("alert");
    valid = false;
  } else if (regMail.test(emailValue) === false) {
    userEmailMsg.textContent = "Error incorect email";
    userEmailMsg.classList.add("alert");
    valid = false;
  } else {
    userEmailMsg.textContent = "Success your email acepted";
    userEmailMsg.classList.remove("alert");
    userEmailMsg.classList.add("success");
  }

  const regName = /^[a-z]\w{2,15}$/i;
  const nameValue = userName.value;

  if (!nameValue) {
    userNameMsg.textContent = "Error input-field is empty";
    userNameMsg.classList.add("alert");
    valid = false;
  } else if (regName.test(nameValue) === false) {
    userNameMsg.textContent = "Error incorect name";
    userNameMsg.classList.add("alert");
    valid = false;
  } else {
    userNameMsg.textContent = "Success your name acepted";
    userNameMsg.classList.remove("alert");
    userNameMsg.classList.add("success");
  }

  outputMsg.textContent = "Sending error";
  outputMsg.classList.add("alert");

  if (valid) {
    outputMsg.textContent = "Sending...";
    outputMsg.classList.remove("alert");
    outputMsg.classList.add("success");
    fetch("https://jsonplaceholder.typicode.com/posts", {
      method: "POST",
      body: JSON.stringify(newUser),
      headers: {
        "Content-type": "application/json; charset=UTF-8",
      },
    })
      .then((response) => {
        if (!response.ok) throw new Error("Server error");
        return response.json();
      })
      .then((json) => {
        outputMsg.textContent = `Success! Server returned ID: ${json.id} user: ${json.title}, email: ${json.email}`;
      })
      .catch((error) => {
        outputMsg.textContent = "Error: " + error.message;
      });

    setTimeout(() => {
      form.reset();
      outputMsg.textContent = "...";
      outputMsg.classList.remove("success");
      userNameMsg.textContent = "...";
      userNameMsg.classList.remove("success");
      userEmailMsg.textContent = "...";
      userEmailMsg.classList.remove("success");
    }, 1000);
  }
});

// Task 4

const loadPostsBtn = document.querySelector("#load-posts-btn");
const postsList = document.querySelector("#posts-list");

function downloadPosts() {
  const ajaxRequest = new XMLHttpRequest();
  ajaxRequest.open("GET", "https://jsonplaceholder.typicode.com/posts", true);
  ajaxRequest.onreadystatechange = function () {
    if (ajaxRequest.readyState != 4) return;
    if (ajaxRequest.status != 200) {
      postsList.textContent = `Error ${ajaxRequest.status}:  ${ajaxRequest.statusText}`;
    } else {
      const postsData = JSON.parse(ajaxRequest.responseText);
      const htmlContent = postsData
        .slice(0, 5)
        .map((post, index) => `<li>${index + 1}. ${post.title}</li>`)
        .join("");
      loadPostsBtn.disabled = false;
      postsList.innerHTML = htmlContent;
    }
  };
  ajaxRequest.send();
}

loadPostsBtn.addEventListener("click", () => {
  loadPostsBtn.disabled = true;
  postsList.innerHTML = "Loading...";
  setTimeout(() => {
    downloadPosts();
  }, 500);
});

export async function getUser() {
  const userData = new Promise((resolve) => {
    setTimeout(() => {
      resolve({ name: "Bob", age: 22, role: "customer" });
    }, 2000);
  });

  return await userData;
}

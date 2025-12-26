const linkItems = document.querySelectorAll(".link_item");
const contentItems = document.querySelectorAll(".content_item");

linkItems.forEach((item, index) => {
  item.addEventListener("click", () => {
    linkItems.forEach((el) => {
      el.classList.remove("active");
    });
    contentItems.forEach((el) => {
      el.classList.remove("active");
    });

    item.classList.add("active");
    contentItems[index].classList.add("active");
  });
});

const accordionItems = document.querySelectorAll(".accordion-item");

accordionItems.forEach((item) => {
  const header = item.querySelector(".accordion-header");

  header.addEventListener("click", () => {
    item.classList.toggle("active");
  });
});

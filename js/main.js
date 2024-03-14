const toggleBtn = document.querySelector(".navbar__bars");
const toggleBtnIcon = document.querySelector(".navbar__bars i");
const dropDownMenu = document.querySelector(".dropdown__menu");

toggleBtn.onclick = function () {
  dropDownMenu.classList.toggle("open");
  const isOpen = dropDownMenu.classList.contains("open");

  toggleBtnIcon.classList = isOpen ? "fa-solid fa-xmark" : "fa-solid fa-bars";
};

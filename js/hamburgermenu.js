const hamBtn = document.querySelector(".ham-btn");
const menu = document.querySelector("#menuList");

hamBtn.addEventListener("click", showMenu);

function showMenu() {
  if (menu.style.display === "block") {
    menu.style.display = "none";
  } else {
    menu.style.display = "block";
  }
}

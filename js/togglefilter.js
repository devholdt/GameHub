const sortContainer = document.querySelector(".sort-container");
const productList = document.querySelector(".product-list");
const toggleButtons = document.querySelector(".toggle-button");
const toggleOn = document.querySelector(".toggle-on");
const toggleOff = document.querySelector(".toggle-off");

toggleOn.addEventListener("click", toggleFilterOn);

toggleOff.addEventListener("click", toggleFilterOff);

function toggleFilterOn() {
  sortContainer.style.display = "flex";
  toggleOff.style.display = "block";
  toggleOn.style.display = "none";
}

function toggleFilterOff() {
  sortContainer.style.display = "none";
  toggleOff.style.display = "none";
  toggleOn.style.display = "block";
}

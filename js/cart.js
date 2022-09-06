// Cart content check
function cartContentCheck() {
  const cartContents = document.querySelector(".cart-items");

  if (cartContents.childNodes.length > 0) {
    confirmBtn.disabled = false;
  } else {
    confirmBtn.disabled = true;
  }
}

// Confirm button
const confirmBtn = document.querySelector(".confirm-btn");
const purchaseModal = document.querySelector("#purchaseModal");
const continueBtn = document.querySelector(".modal-continue");

confirmBtn.addEventListener("click", purchaseConfirmation);

function purchaseConfirmation() {
  const cartItems = document.querySelector(".cart-items");
  while (cartItems.hasChildNodes()) {
    cartItems.removeChild(cartItems.firstChild);
  }

  cartContentCheck();
  updateTotal();
}

confirmBtn.onclick = function () {
  purchaseModal.style.display = "block";
};

continueBtn.onclick = function () {
  purchaseModal.style.display = "none";
};

window.onclick = function (event) {
  if (event.target === purchaseModal) {
    purchaseModal.style.display = "none";
  }
};

// Add to cart
const addItemButtons = document.querySelectorAll(".shop-item-button");
for (let i = 0; i < addItemButtons.length; i++) {
  addItemButtons[i].addEventListener("click", addToCart);
}

function addToCart() {
  const item = event.target.parentElement.parentElement.parentElement;
  const title = item.querySelector(".shop-item-title").innerText;
  const price = item.querySelector(".shop-item-price").innerText;
  const image = item.querySelector(".shop-item-image").src;
  addItem(title, price, image);

  cartContentCheck();
  updateTotal();
}

function addItem(title, price, image) {
  const cartRow = document.createElement("div");
  cartRow.classList.add("cart-row");
  const cartItems = document.querySelector(".cart-items");

  const cartItemNames = cartItems.querySelectorAll(".cart-item-title");
  for (let i = 0; i < cartItemNames.length; i++) {
    if (cartItemNames[i].innerText === title) {
      alert(`${title} is already added to your cart`);
      return;
    }
  }

  const cartRowContents = ` <div class="cart-item cart-column">
                                <img src="${image}" alt="Video Game image" class="cart-item-image">
                                <span class="cart-item-title">${title}</span>
                            </div>
                            <span class="cart-price cart-column">${price}</span>
                            <div class="cart-remove cart-column">
                                <button class="btn-remove"></button>
                            </div>`;

  cartRow.innerHTML = cartRowContents;
  cartItems.append(cartRow);
  cartRow.querySelector(".btn-remove").addEventListener("click", removeItem);
}

// Remove from cart
const removeButtons = document.querySelectorAll(".btn-remove");
for (let i = 0; i < removeButtons.length; i++) {
  removeButtons[i].addEventListener("click", removeItem);
}

function removeItem() {
  event.target.parentElement.parentElement.remove();

  cartContentCheck();
  updateTotal();
}

// Update total price
function updateTotal() {
  const cartItems = document.querySelector(".cart-items");
  const cartRows = cartItems.querySelectorAll(".cart-row");
  let total = 0;
  for (let i = 0; i < cartRows.length; i++) {
    const priceElement = cartRows[i].querySelector(".cart-price");
    const price = parseFloat(priceElement.innerText.replace("$", ""));
    total = total + price;
  }
  document.querySelector(".cart-total-price").innerText = total + "$";
}

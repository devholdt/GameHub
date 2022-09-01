const baseUrl =
  "http://localhost/gamehub/wp-json/wc/store/products?per_page=15";
const productContainer = document.querySelector(".product-list");
const categories = document.querySelectorAll(".category");
// const platforms = document.querySelectorAll(".platform");
const resetButton = document.querySelector("#resetButton");
const searchButton = document.querySelector(".search-button");
const search = document.querySelector("#search-input");

async function getProducts(url) {
  try {
    const response = await fetch(url);
    const products = await response.json();

    products.forEach(function (product) {
      productContainer.innerHTML += `<div class="product-card">
        <div>
            <img class="shop-item-image" src="${product.images[0].src}">
        </div>
        <div class="product-details">
            <div class="details-top">
                <p class="shop-item-title">${product.name}</p>
            </div>
            <div class="details-bot">
                <p class="shop-item-price">${product.price_html}</p>
                <button class="shop-item-button">Add to cart</button>
            </div>
        </div>
    </div>`;
    });
  } catch (error) {
    console.log(error);
  }
}

/* <div class="product-platforms">
                  <span class="platform-icon"><i class="fa-brands fa-playstation"></i></span>
                  <span class="platform-icon"><i class="fa-brands fa-xbox"></i></span>
                  <span class="platform-icon"><i class="fa-solid fa-computer"></i></span>
                </div> */

getProducts(baseUrl);

searchButton.onclick = function () {
  let newUrl;
  newUrl = baseUrl + `&search=${search.value}`;
  productContainer.innerHTML = "";
  getProducts(newUrl);
};

search.onclick = function () {
  if (document.querySelector(`input[name="category"]:checked`).checked) {
    document.querySelector(`input[name="category"]:checked`).checked = false;
  } else {
    return;
  }

  productContainer.innerHTML = "";
  getProducts(baseUrl);
};

categories.forEach(function (category) {
  category.onclick = function (event) {
    let newUrl;
    if (event.target.id === "featured") {
      newUrl = baseUrl + "&featured=true";
    } else {
      const categoryChosen = event.target.value;
      newUrl = baseUrl + `&category=${categoryChosen}`;
    }

    search.value = "";
    productContainer.innerHTML = "";
    getProducts(newUrl);
  };
});

platforms.forEach(function (platform) {
  platform.onclick = function (event) {
    let newUrl;
    const platformChosen = event.target.value;
    newUrl = baseUrl + `&category=${platformChosen}`;

    productContainer.innerHTML = "";
    getProducts(newUrl);
  };
});

resetButton.onclick = function () {
  search.value = "";
  productContainer.innerHTML = "";
  getProducts(baseUrl);

  if (document.querySelector(`input[name="category"]:checked`).checked) {
    document.querySelector(`input[name="category"]:checked`).checked = false;
  }
};

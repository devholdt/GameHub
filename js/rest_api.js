const baseUrl =
  "http://localhost/game-hub/wp-json/wc/store/products?per_page=15";
const productContainer = document.querySelector(".product-list");
const categories = document.querySelectorAll(".category");
const platforms = document.querySelectorAll(".platform");

async function getProducts(url) {
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
                <div class="product-platforms">
                    <span class="platform-icon">${product["PC"]}</span>
                    <span class="platform-icon">${product["PlayStation"]}</span>
                    <span class="platform-icon">${product["Xbox"]}</span>
                </div>
            </div>
            <div class="details-bot">
                <p class="shop-item-price">${product.price_html}</p>
                <button class="shop-item-button">BUY</button>
            </div>
        </div>
    </div>`;

    // <span class="platform-icon"><i class="fa-brands fa-playstation"></i></span>
    // <span class="platform-icon"><i class="fa-brands fa-xbox"></i></span>
    // <span class="platform-icon"><i class="fa-solid fa-computer"></i></span>
  });
}

getProducts(baseUrl);

categories.forEach(function (category) {
  category.onclick = function (event) {
    let newUrl;
    if (event.target.id === "featured") {
      newUrl = baseUrl + "&featured=true";
    } else {
      const categoryChosen = event.target.value;
      newUrl = baseUrl + `&category=${categoryChosen}`;
    }
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

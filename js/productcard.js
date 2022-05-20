const cardContainer = document.getElementsByClassName("placeholder-card");

for (let i = 0; i < cardContainer.length; i++) {
  cardContainer[i].innerHTML = `<div>
                                <img class="shop-item-image" src="/images/Placeholder.png">
                            </div>
                            <div class="product-details">
                                <div class="details-top">
                                    <h5 class="shop-item-title">Video Game</h5>
                                    <p>PlayStation</p>
                                </div>
                                <div class="details-bot">
                                    <p class="shop-item-price">$19</p>
                                    <button class="shop-item-button">BUY</button>
                                </div>
                            </div>`;
}

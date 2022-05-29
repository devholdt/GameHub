const cardContainer = document.getElementsByClassName("placeholder-card");

for (let i = 0; i < cardContainer.length; i++) {
  cardContainer[i].innerHTML = `<div>
                                <img class="shop-item-image" src="/images/Placeholder.png">
                            </div>
                            <div class="product-details">
                                <div class="details-top">
                                    <h5 class="shop-item-title">Video Game</h5>
                                    <div>
                                        <span class="unavailable-platform"><i class="fa-brands fa-playstation"></i></span>
                                        <span class="unavailable-platform"><i class="fa-brands fa-xbox"></i></span>
                                        <span class="unavailable-platform"><i class="fa-solid fa-computer"></i></span>
                                    </div>
                                </div>
                                <div class="details-bot">
                                    <p class="shop-item-price">$19</p>
                                    <button class="shop-item-button">BUY</button>
                                </div>
                            </div>`;
}

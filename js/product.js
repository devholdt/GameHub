const container = document.querySelector(".product-container");
const title = document.querySelector("#title");
const breadcrumb = document.querySelector("#productBreadcrumb");

const queryString = document.location.search;

const params = new URLSearchParams(queryString);

const id = params.get("id");

const url = "https://devholdt.no/gamehub/wp-json/wc/store/products/" + id;

async function gameDetails() {
  try {
    const response = await fetch(url);

    const game = await response.json();

    title.innerHTML = `GAME HUB - The Universe of Games | ${game.name}`;
    breadcrumb.innerHTML = `${game.name}`;

    container.innerHTML = `<div class="details-detpage">

                                <div class="back-detpage">
                                    <a href="store.html">back</a>
                                </div>

                                <div class="top-detpage">
                                    <h1>${game.name}</h1>
                                     
                                    <div>${game.short_description}</div>                                  
                                </div>

                                <div class="bot-detpage">
                                    <h4>About</h4>
                                    <img src="${game.images[1].src}" class="img1">
                                    <img src="${game.images[2].src}" class="img2">
                                    <div>${game.description}</div>
                                </div>

                            </div>`;
  } catch (error) {
    console.log(error);
    container.innerHTML = "An error occured when fetching game details";
  }
}

gameDetails();

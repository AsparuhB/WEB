class Product {
    title = "DEFAULT";
    imageUrl;
    description;
    price;
    
}

productList = {
  products: [
    {
      title: "A Pillow",
      imageUrl:
        "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse1.mm.bing.net%2Fth%3Fid%3DOIP.No3cFidaN9-2HErpeUy4BgHaE6%26pid%3DApi&f=1&ipt=e339b8b067d340dacab3aaf02d8282265a9937492f3966acf4b0a53632722ac8&ipo=images",
      price: 19.99,
      description: "A soft pillow!",
    },
    {
      title: "A Carpet",
      imageUrl:
        "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fi5.walmartimages.com%2Fasr%2F22ef571b-11a8-4b1a-89fd-53fec208d818.c0c6173d7d75cddaf96ab8db25679471.jpeg%3FodnWidth%3D1000%26odnHeight%3D1000%26odnBg%3Dffffff&f=1&nofb=1&ipt=3b4dab32c5aa064c48636840805c8be0121050b37fbae4dfd36acb969b2e8fec&ipo=images",
      price: 89.99,
      description: "A carpet which you might like - or not.",
    },
  ],
  render() {
    const renderHook = document.getElementById("app");
    const prodList = document.createElement("ul");
    prodList.className = "product-list";
    for (const prod of this.products) {
      const prodEl = document.createElement("li");
      prodEl.className = "product-item";
      prodEl.innerHTML = `
         <div>
            <img src="${prod.imageUrl}" alt="${prod.title}" >
            <div class="product-item__content">
                <h2>${prod.title}</h2>
                <h3>\$${prod.price}</h3>
                <p>${prod.description}</p>
                <button>Add to Cart</button>
            </div>
         <div>
        `;
      prodList.append(prodEl);
    }
    renderHook.append(prodList);
  },
};

productList.render();

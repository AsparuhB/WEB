class Product {
//   title = "DEFAULT";
//   imageUrl;
//   description;
//   price;

  constructor(title, imageUrl, desc, price) {
    this.title = title;
    this.imageUrl = imageUrl;
    this.description = desc;
    this.price = price;
  }
}

productList = {
  products: [
    new Product(
      "A Pillow",
      "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fi5.walmartimages.com%2Fasr%2F22ef571b-11a8-4b1a-89fd-53fec208d818.c0c6173d7d75cddaf96ab8db25679471.jpeg%3FodnWidth%3D1000%26odnHeight%3D1000%26odnBg%3Dffffff&f=1&nofb=1&ipt=3b4dab32c5aa064c48636840805c8be0121050b37fbae4dfd36acb969b2e8fec&ipo=images",
      "A soft Pillow!",
      19.99
    ),
    new Product(
      "A Carpet",
      "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fi5.walmartimages.com%2Fasr%2F22ef571b-11a8-4b1a-89fd-53fec208d818.c0c6173d7d75cddaf96ab8db25679471.jpeg%3FodnWidth%3D1000%26odnHeight%3D1000%26odnBg%3Dffffff&f=1&nofb=1&ipt=3b4dab32c5aa064c48636840805c8be0121050b37fbae4dfd36acb969b2e8fec&ipo=images",
      "A carpet which you might like - or not.",
      89.99
    ),
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

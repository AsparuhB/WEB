class Product {
  //   title = "DEFAULT";
  //   imageUrl;
  //   description;
  //   price;

  constructor(title, image, desc, price) {
    this.title = title;
    this.imageUrl = image;
    this.description = desc;
    this.price = price;
  }
}

class ProductList {
  products = [
    new Product(
      "A Pillow",
      "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fimages-na.ssl-images-amazon.com%2Fimages%2FI%2F61x7uBGN6tS._SL1500_.jpg&f=1&nofb=1&ipt=f16e047d7ec4e09fc00d0be98d2fd6df99f5fd11c91bd323b5a63c043368034f&ipo=images",
      "A soft Pillow!",
      19.99
    ),
    new Product(
      "A Carpet",
      "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fi5.walmartimages.com%2Fasr%2F22ef571b-11a8-4b1a-89fd-53fec208d818.c0c6173d7d75cddaf96ab8db25679471.jpeg%3FodnWidth%3D1000%26odnHeight%3D1000%26odnBg%3Dffffff&f=1&nofb=1&ipt=3b4dab32c5aa064c48636840805c8be0121050b37fbae4dfd36acb969b2e8fec&ipo=images",
      "A carpet which you might like - or not.",
      89.99
    ),
  ];

  constructor() {}

  render() {
    const renderHook = document.getElementById("app");
    const prodList = document.createElement("ul");
    prodList.className = "product-list";
    for (const prod of this.products) {
      const productItem = new ProductItem(prod);
      const prodEL = productItem.render();
      prodList.append(prodEL);
    }
    renderHook.append(prodList);
  }
}

class ProductItem {
  constructor(product) {
    this.product = product;
  }

  render() {
    const prodEl = document.createElement("li");
    prodEl.className = "product-item";
    prodEl.innerHTML = `
           <div>
              <img src="${this.product.imageUrl}" alt="${this.product.title}" >
              <div class="product-item__content">
                  <h2>${this.product.title}</h2>
                  <h3>\$${this.product.price}</h3>
                  <p>${this.product.description}</p>
                  <button>Add to Cart</button>
              </div>
           <div>
          `;
    return prodEl;
  }
}

const productList = new ProductList();
productList.render();

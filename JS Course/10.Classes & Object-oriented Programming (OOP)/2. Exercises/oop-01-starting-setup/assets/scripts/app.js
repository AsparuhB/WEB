class Product {
  //   title = "DEFAULT";
  //   imageUrl;
  //   description;
  //   price;

  constructor(title, imageUrl, description, price) {
    this.title = title;
    this.imageUrl = imageUrl;
    this.description = description;
    this.price = price;
  }
}

class ShoppingCart {
  items = [];

  render() {
    const cartEl = document.createElement("section");
    cartEl.innerHTML = `
            <h2>Total: \$${0}</h2>
            <button>Order now!</button>
        `;
    cartEl.className = "cart";
    return cartEl;
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
              <img src="${this.product.imageUrl} alt="${this.product.description}" >
              <div class="product-item__content">
              <h2>${this.product.title}</h2>
              <h3>\$${this.product.price}</h3>
              <p>${this.product.description}</p>
              <button>Add to Cart</button>
              </div>
          </div>
          `;
    return prodEl;
  }
}

class ProductList {
  products = [
    new Product(
      "A Pillow",
      "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fwww.dumas-paris.com%2F93-thickbox_default%2Fimperial-90-goose-down-pillow.jpg&f=1&nofb=1&ipt=34e6c2fbf86ca71690e579103d5a4e9c2686c814f08e60f16563f8adb854d0ab&ipo=images",
      "A soft pillow!",
      19.99
    ),
    new Product(
      "A carpet",
      "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fi5.walmartimages.com%2Fasr%2F1bcc7c86-c2e1-4bb6-bbbb-260c4b52215e.a41b8d66257d48ca92eb211e6ebf0df2.jpeg&f=1&nofb=1&ipt=03dd9ef2bd740ba765f197df88c41b31a332e945bb0de3d348b72a837fd05194&ipo=imagestps://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fwww.dumas-paris.com%2F93-thickbox_default%2Fimperial-90-goose-down-pillow.jpg&f=1&nofb=1&ipt=34e6c2fbf86ca71690e579103d5a4e9c2686c814f08e60f16563f8adb854d0ab&ipo=images",
      "A carpet which you might like - or not.",
      89.99
    ),
  ];

  constructor() {}

  render() {
    const prodList = document.createElement("ul");
    prodList.className = "product-list";
    for (const prod of this.products) {
      const productItem = new ProductItem(prod);
      const prodEl = productItem.render();
      prodList.append(prodEl);
    }
    return prodList
  }
}

class Shop {
  render() {
    const renderHook = document.getElementById("app");


    const cart = new ShoppingCart();
    const cartEl = cart.render();
    const productList = new ProductList();
    const prodListEl = productList.render();

    renderHook.append(cartEl)
    renderHook.append(prodListEl)
  }
}

const shop = new Shop();
shop.render();

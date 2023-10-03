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

class ShoppingCart {
  items = [];

  set cartItems(value) {
    this.items = value;
    this.totalOutput.innerHTML = `<h2>Total: \$${this.totalAmount.toFixed(2)}</h2>`;
  }

  get totalAmount() {
    const sum = this.items.reduce(
      (prevValue, curItem) => prevValue + curItem.price,
      0
    );
    return sum;
  }

  addProduct(product) {
    const updatedItems = [...this.items];
    updatedItems.push(product);
    this.cartItems = updatedItems;
  }

  render() {
    const cartEL = document.createElement("section");
    cartEL.innerHTML = `
        <h2>Total: \$${0}</h2>
        <button>Order Now!</button>
        `;
    cartEL.className = "cart";
    this.totalOutput = cartEL.querySelector("h2");
    return cartEL;
  }
}

class ProductItem {
  constructor(product) {
    this.product = product;
  }

  addToCart() {
    App.addProductToCart(this.product);
  }

  renderProduct() {
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
    const addCartButton = prodEl.querySelector("button");
    addCartButton.addEventListener("click", this.addToCart.bind(this));
    return prodEl;
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

  renderList() {
    const prodList = document.createElement("ul");
    prodList.className = "product-list";
    for (const prod of this.products) {
      const productItem = new ProductItem(prod);
      const prodEL = productItem.renderProduct();
      prodList.append(prodEL);
    }
    return prodList;
  }
}

class Shop {
  render() {
    const renderHook = document.getElementById("app");

    this.cart = new ShoppingCart();
    const cartEL = this.cart.render();
    const productList = new ProductList();
    const prodlistEl = productList.renderList();

    renderHook.append(cartEL);
    renderHook.append(prodlistEl);
  }
}

class App {
  static cart;

  static init() {
    const shop = new Shop();
    shop.render();
    this.cart = shop.cart;
  }

  static addProductToCart(product) {
    this.cart.addProduct(product);
  }
}

App.init();

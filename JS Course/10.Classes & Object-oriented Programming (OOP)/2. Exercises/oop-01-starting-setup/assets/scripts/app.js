class Product {
<<<<<<< HEAD
  title = "DEFAULT";
  imageUrl;
  description;
  price;
}

<<<<<<< HEAD
class ProductItem {
  constructor(product) {
=======
class ElementAttribute {
  constructor(attrName, attrValue) {
    this.name = attrName;
    this.value = attrValue;
  }
}

class Component {
  constructor(renderHookId, shouldRender = true) {
    this.hookId = renderHookId;
    if (shouldRender) {
      this.render();
    }
  }

  render() {}

  createRootElement(tag, cssClasses, attributes) {
    const rootElement = document.createElement(tag);
    if (cssClasses) {
      rootElement.className = cssClasses;
    }
    if (attributes && attributes.length > 0) {
      for (const attr of attributes) {
        rootElement.setAttribute(attr.name, attr.value);
      }
    }
    document.getElementById(this.hookId).append(rootElement);
    return rootElement;
  }
}

class ShoppingCart extends Component {
  items = [];

  set cartItems(value) {
    this.items = value;
    this.totalOutput.innerHTML = `<h2>Total: \$${this.totalAmount.toFixed(
      2
    )}</h2>`;
  }

  get totalAmount() {
    const sum = this.items.reduce(
      (prevVal, currVal) => prevVal + currVal.price,
      0
    );
    return sum;
  }
  constructor(renderHookId) {
    super(renderHookId, false);
    this.orderProducts = () => {
      console.log("Ordering...");
      console.log(this.items);
    };
    this.render();
  }

  addProduct(product) {
    const updatedItems = [...this.items];
    updatedItems.push(product);
    this.cartItems = updatedItems;
  }

  //   orderProducts() {
  //     console.log("Ordering...");
  //     console.log(this.items);
  //   }

  render() {
    const cartEl = this.createRootElement("section", "cart");
    cartEl.innerHTML = `
            <h2>Total: \$${0}</h2>
            <button>Order Now!</button>
        `;
    const orderButton = cartEl.querySelector("button");
    // orderButton.addEventListener("click", () => this.orderProducts()); You can use this approach, because "() =>"" doesn't know this
    // orderButton.addEventListener("click", this.orderProducts.bind(this)); // You can also use .bind(this) to bind it.
    orderButton.addEventListener("click", this.orderProducts); // This is the last way, but you have to move the method in the constructor.
    this.totalOutput = cartEl.querySelector("h2");
  }
}

class ProductItem extends Component {
  constructor(product, renderHookId) {
    super(renderHookId, false);
>>>>>>> different-ways-of-adding-methods
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
    const renderHook = document.getElementById("app");
    const prodList = document.createElement("ul");
    prodList.className = "product-list";
    for (const prod of this.products) {
        const productItem = new ProductItem(prod)
        const prodEl = productItem.render();
      prodList.append(prodEl);
    }
    renderHook.append(prodList);
  },
};

productList.render();
=======
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
  
  class ProductItem {
    constructor(product) {
      this.product = product;
    }
  
    addToCart() {
      console.log("Adding product to cart..")
      console.log(this.product)
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
      const addCartButton = prodEl.querySelector("button");
      addCartButton.addEventListener("click", this.addToCart.bind(this))
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
        "A Carpet",
        "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fi5.walmartimages.com%2Fasr%2F1bcc7c86-c2e1-4bb6-bbbb-260c4b52215e.a41b8d66257d48ca92eb211e6ebf0df2.jpeg&f=1&nofb=1&ipt=03dd9ef2bd740ba765f197df88c41b31a332e945bb0de3d348b72a837fd05194&ipo=imagestps://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fwww.dumas-paris.com%2F93-thickbox_default%2Fimperial-90-goose-down-pillow.jpg&f=1&nofb=1&ipt=34e6c2fbf86ca71690e579103d5a4e9c2686c814f08e60f16563f8adb854d0ab&ipo=images",
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
        const prodEl = productItem.render();
        prodList.append(prodEl);
      }
      renderHook.append(prodList);
    }
  }
  
  const productList = new ProductList();
  productList.render();
  
>>>>>>> 0c4ef231db466d21c83aa9e93751940e3e3c1986

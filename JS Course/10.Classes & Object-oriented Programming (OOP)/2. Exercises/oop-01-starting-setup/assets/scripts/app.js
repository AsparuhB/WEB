const productList = {
  products: [
    {
      title: "A Pillow",
      imageUrl:
        "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fwww.dumas-paris.com%2F93-thickbox_default%2Fimperial-90-goose-down-pillow.jpg&f=1&nofb=1&ipt=34e6c2fbf86ca71690e579103d5a4e9c2686c814f08e60f16563f8adb854d0ab&ipo=images",
      price: 19.99,
      description: "A soft pillow!",
    },
    {
      title: "A carpet",
      imageUrl:
        "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fi5.walmartimages.com%2Fasr%2F1bcc7c86-c2e1-4bb6-bbbb-260c4b52215e.a41b8d66257d48ca92eb211e6ebf0df2.jpeg&f=1&nofb=1&ipt=03dd9ef2bd740ba765f197df88c41b31a332e945bb0de3d348b72a837fd05194&ipo=images",
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
            <img src="${prod.imageUrl} alt="${prod.description}" >
            <div class="product-item__content">
            <h2>${prod.title}</h2>
            <h3>\$${prod.price}</h3>
            <p>${prod.description}</p>
            <button>Add to Cart</button>
            </div>
        </div>
        `
        prodList.append(prodEl);
    }
    renderHook.append(prodList);
  },
};

productList.render();

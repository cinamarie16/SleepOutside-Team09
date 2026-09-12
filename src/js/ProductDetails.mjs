import { getLocalStorage, setLocalStorage } from "./utils.mjs";

export default class ProductDetails {
<<<<<<< HEAD
  constructor(productId, dataSource) {
    this.productId = productId;
    this.product = {};
    this.dataSource = dataSource;
  }

  async init() {
    this.product = await this.dataSource.findProductById(this.productId);
    if (!this.product) return;

    this.renderProductDetails();
    document
      .getElementById("addToCart")
      .addEventListener("click", () => this.addProductToCart());
  }

  addProductToCart() {
    let cartItems = getLocalStorage("so-cart");
    if (!Array.isArray(cartItems)) {
      cartItems = cartItems ? [cartItems] : [];
    }
    cartItems.push({ ...this.product, Quantity: 1 });
    setLocalStorage("so-cart", cartItems);
  }

  renderProductDetails() {
    const productDetail = document.querySelector(".product-detail");
    const discount = Math.round(
      ((this.product.SuggestedRetailPrice - this.product.FinalPrice) /
        this.product.SuggestedRetailPrice) *
        100,
    );

    productDetail.querySelector(".product__brand").textContent =
      this.product.Brand.Name;
    productDetail.querySelector(".product__name").textContent =
      this.product.NameWithoutBrand;

    const productImage = productDetail.querySelector(".product__image");
    productImage.src = this.product.Image;
    productImage.alt = this.product.Name;

    if (discount > 0) {
      const discountIndicator = document.createElement("span");
      discountIndicator.classList.add("discount-indicator");
      discountIndicator.textContent = `${discount}% off`;
      productDetail
        .querySelector(".product-card__price")
        .insertAdjacentElement("beforebegin", discountIndicator);
    }

    productDetail.querySelector(".product-card__price").textContent =
      `$${this.product.FinalPrice}`;
    productDetail.querySelector(".product__color").textContent =
      this.product.Colors[0].ColorName;
    productDetail.querySelector(".product__description").innerHTML =
      this.product.DescriptionHtmlSimple;
  }
=======

    constructor(productId, dataSource) {
        this.productId = productId;
        this.product = {};
        this.dataSource = dataSource;
    }

    async init() {
        // use the datasource to get the details for the current product. findProductById will return a promise! use await or .then() to process it
        this.product = await this.dataSource.findProductById(this.productId);
        // the product details are needed before rendering the HTML
        this.renderProductDetails();
        // once the HTML is rendered, add a listener to the Add to Cart button
        // Notice the .bind(this). This callback will not work if the bind(this) is missing. Review the readings from this week on 'this' to understand why.
        document.getElementById('addToCart')
            .addEventListener('click', this.addProductToCart.bind(this));
    }

    addProductToCart(product) {
        const cartItems = getLocalStorage("so-cart") || [];
        cartItems.push(this.product);
        setLocalStorage("so-cart", cartItems);
        }

    renderProductDetails() {
        productDetailsTemplate(this.product);
    }

}

function productDetailsTemplate(product) {
    document.querySelector('h2').textContent = product.Brand.Name;
    document.querySelector('h3').textContent = product.NameWithoutBrand;

    const productImage = document.getElementById('productImage');
    productImage.src = product.Image;
    productImage.alt = product.NameWithoutBrand;

    document.getElementById('productPrice').textContent = product.FinalPrice;
    document.getElementById('productColor').textContent = product.Colors[0].ColorName;
    document.getElementById('productDesc').innerHTML = product.DescriptionHtmlSimple;

    document.getElementById('addToCart').dataset.id = product.Id;
>>>>>>> main
}

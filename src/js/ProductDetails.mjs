import { getLocalStorage, setLocalStorage } from "./utils.mjs";

export default class ProductDetails {
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
}

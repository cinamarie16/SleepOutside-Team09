export default class ProductList {
  constructor(selector, dataSource) {
    this.productList = document.querySelector(selector);
    this.dataSource = dataSource;
    this.productIds = ["880RR", "985RF", "985PR", "344YJ"];
  }

  async init() {
    const products = await this.dataSource.getData();
    const availableProducts = products.filter((product) =>
      this.productIds.includes(product.Id),
    );
    this.renderList(availableProducts);
  }

  renderList(products) {
    this.productList.innerHTML = products.map((product) => {
      const discount = Math.round(
        ((product.SuggestedRetailPrice - product.FinalPrice) /
          product.SuggestedRetailPrice) *
          100,
      );
      const discountIndicator =
        discount > 0
          ? `<span class="discount-indicator">${discount}% off</span>`
          : "";

      return `<li class="product-card">
        <a href="product_pages/?product=${product.Id}">
          <img src="${product.Image}" alt="${product.Name}" />
          ${discountIndicator}
          <h3 class="card__brand">${product.Brand.Name}</h3>
          <h2 class="card__name">${product.NameWithoutBrand}</h2>
          <p class="product-card__price">$${product.FinalPrice}</p>
        </a>
      </li>`;
    }).join("");
  }
}

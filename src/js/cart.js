import { getLocalStorage } from "./utils.mjs";
import { updateCartIcon } from "./CartCount.mjs";

function renderCartContents() {
  const cartItems = getLocalStorage("so-cart") || [];
  if (cartItems.length === 0) {
    document.querySelector(".product-list").innerHTML =
      '<li class="empty-cart">Your cart is empty.</li>';
    return;
  }
  const htmlItems = cartItems.map((item) => cartItemTemplate(item));
  document.querySelector(".product-list").innerHTML = htmlItems.join("");
}

function cartItemTemplate(item) {
  const color = item.Colors?.[0]?.ColorName || "Available color";
  const quantity = item.Quantity || 1;
  const newItem = `<li class="cart-card divider">
  <a href="#" class="cart-card__image">
    <img
      src="${item.Image}"
      alt="${item.Name}"
    />
  </a>
  <a href="#">
    <h2 class="card__name">${item.Name}</h2>
  </a>
  <p class="cart-card__color">${color}</p>
  <p class="cart-card__quantity">qty: ${quantity}</p>
  <p class="cart-card__price">$${item.FinalPrice}</p>
</li>`;

  return newItem;
}

renderCartContents();
updateCartIcon();

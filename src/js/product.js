<<<<<<< HEAD
import { getParam } from "./utils.mjs";
import ProductData from "./ProductData.mjs";
import ProductDetails from "./ProductDetails.mjs";
=======
import ProductData from "./ProductData.mjs";
import ProductDetails from "./ProductDetails.mjs";
import { getParam } from "./utils.mjs";
>>>>>>> main

const productId = getParam("product");
const dataSource = new ProductData("tents");
<<<<<<< HEAD
const product = new ProductDetails(productId, dataSource);

product.init();
=======
const productId = getParam("product");

// console.log(dataSource.findProductById(productId));
const product = new ProductDetails(productId, dataSource);
product.init();

function addProductToCart(product) {
  const products = getLocalStorage("so-cart") || [];
  products.push(product);
  setLocalStorage("so-cart", products);
}
// add to cart button event handler
// async function addToCartHandler(e) {
//   const product = await dataSource.findProductById(e.target.dataset.id);
//   addProductToCart(product);
// }

// // add listener to Add to Cart button
// document
//   .getElementById("addToCart")
//   .addEventListener("click", addToCartHandler);
>>>>>>> main

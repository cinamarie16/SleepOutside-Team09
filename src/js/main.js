import { updateCartIcon } from "./CartCount.mjs";
import ProductData from "./ProductData.mjs";
import ProductList from "./ProductList.mjs";
import Alert from "./Alert.js";

updateCartIcon();

const dataSource = new ProductData("tents");
const productList = new ProductList(".product-list", dataSource);
productList.init();

const alertSystem = new Alert("main");
alertSystem.init();
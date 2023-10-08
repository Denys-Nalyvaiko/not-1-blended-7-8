import "./styles/normalize.css";
import "./styles/index.css";
import { fetchAllProducts } from "./requests/products";
import { createProductsMarkup } from "./services/markupService";

const refs = { allProductsList: document.querySelector("#allProducts") };

fetchAllProducts().then(({ data: { products } }) => {
  console.log(products);

  const markupCarts = createProductsMarkup(products);

  refs.allProductsList.insertAdjacentHTML("beforeend", markupCarts);
});

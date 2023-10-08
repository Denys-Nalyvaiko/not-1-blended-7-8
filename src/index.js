import "./styles/normalize.css";
import "./styles/index.css";
import { fetchAllProducts, fetchProductById } from "./requests/products";
import {
  createProductsMarkup,
  createProductByIdMarkup,
} from "./services/markupService";

const refs = {
  allProductsList: document.querySelector("#allProducts"),
  singleProductForm: document.querySelector("#singleProductForm"),
  singleProduct: document.querySelector("#singleProduct"),
};

//* !2

fetchAllProducts().then(({ data: { products } }) => {
  console.log(products);

  // const markupCarts = createProductsMarkup(products);

  // refs.allProductsList.insertAdjacentHTML("beforeend", markupCarts);
});

//* !1
singleProductForm.addEventListener("submit", handleSingleProductFormSubmit);

function handleSingleProductFormSubmit(event) {
  event.preventDefault();

  const id = event.target.elements.id.value;

  fetchProductById(id).then(console.log);
  fetchProductById(id).then(({ data }) => {
    const markupCard = createProductByIdMarkup(data);

    refs.singleProduct.innerHTML = markupCard;

    refs.singleProductForm.reset();
  });
}

import "./styles/normalize.css";
import "./styles/index.css";
import { fetchAllProducts, addProduct } from "./requests/products";
import {
  createProductsMarkup,
  createNewProductMarkup,
} from "./services/markupService";

const refs = {
  allProductsList: document.querySelector("#allProducts"),
  addNewProductForm: document.querySelector("#addNewProductForm"),
  newProductSection: document.querySelector("#newProductSection"),
};
const { addNewProductForm, newProductSection } = refs;

addNewProductForm.addEventListener("submit", createNewProductByForm);

function createNewProductByForm(e) {
  e.preventDefault();

  const title = e.target.elements.title.value;
  const description = e.target.elements.description.value;
  const price = e.target.elements.price.value;

  const newProduct = { title, description, price };
  addProduct(newProduct).then(({ data }) => {
    const markupNewProductCard = createNewProductMarkup(data);
    newProductSection.innerHTML = markupNewProductCard;
  });
  addNewProductForm.reset();
}
fetchAllProducts().then(({ data: { products } }) => {
  console.log(products);

  const markupCarts = createProductsMarkup(products);

  refs.allProductsList.insertAdjacentHTML("beforeend", markupCarts);
});

import "./styles/normalize.css";
import "./styles/index.css";

import { fetchAllProducts, addProduct, fetchProductById} from "./requests/products";
import {
  createProductsMarkup,
	createNewProductMarkup,
  createProductByIdMarkup


} from "./services/markupService";

const refs = {
  allProductsList: document.querySelector("#allProducts"),

  addNewProductForm: document.querySelector("#addNewProductForm"),
	newProductSection: document.querySelector("#newProductSection"),
  singleProductForm: document.querySelector("#singleProductForm"),
  singleProduct: document.querySelector("#singleProduct"),
};
const { addNewProductForm, newProductSection } = refs;




//* !2


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

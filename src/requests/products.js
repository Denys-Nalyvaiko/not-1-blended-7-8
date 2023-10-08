import axios from "axios";
import { dummyjsonApi } from "../services/api";

// export function fetchAllProducts() {
//   return dummyjsonApi.get("/products");
// }

export const fetchAllProducts = () => dummyjsonApi.get("/products");

export const addProduct = (newProduct) =>
  dummyjsonApi.post("/products/add", newProduct);
export const fetchProductById = (id) => dummyjsonApi.get(`/products/${id}`);

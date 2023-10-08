import axios from "axios";
import { dummyjsonApi } from "../services/api";

// export function fetchAllProducts() {
//   return dummyjsonApi.get("/products");
// }

export const fetchAllProducts = () => dummyjsonApi.get("/products");

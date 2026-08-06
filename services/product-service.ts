import type { ProductsResponse } from "@/app/types";

const API_URL = "http://localhost:4000";
const defaultLimit = "6";

export default class ProductService {
  //GET: Products
  static async getProducts(currentPage: number) {
    const response: ProductsResponse = await fetch(
      `${API_URL}/products?_page=${currentPage}&_limit=${defaultLimit}&_sort=id&_order=desc&_expand=category`,
    ).then((res) => res.json());

    return response;
  }
}

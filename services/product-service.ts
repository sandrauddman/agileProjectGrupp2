import type { ApiErrorResponse, ApiResponse, ApiSuccessResponse, ProductsResponse } from '@/app/types';

const API_URL = 'http://localhost:4000';
const defaultLimit = '6';

export default class ProductService {
  // GET: Products
  static async getProducts(currentPage: number, categoryParams: string): Promise<ApiResponse<ProductsResponse>> {
    try {
      const category = categoryParams ? `&categoryId=${categoryParams}` : '';
      const response = await fetch(`${API_URL}/products?_page=${currentPage}&_limit=${defaultLimit}&_sort=id&_order=desc&_expand=category${category}`, {
        method: 'GET',
      });

      const result = await response.json();

      return {
        success: true,
        data: result,
      } satisfies ApiSuccessResponse<ProductsResponse>;
    } catch (error) {
      return {
        success: false,
        message: 'Kunde inte ansluta till servern',
      } satisfies ApiErrorResponse;
    }
  }
}

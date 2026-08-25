import type { ApiResponse, ApiSuccessResponse, ProductDeleteResponse, ProductsResponse } from '@/app/types';
import { errorResponse } from '@/utils/error-response';

const API_URL = 'http://localhost:4000';
const defaultLimit = '6';

export default class ProductService {
  // GET: Products
  static async getProducts(currentPage: number, categoryParams: string, stockParams: string): Promise<ApiResponse<ProductsResponse>> {
    try {
      const category = categoryParams ? `&categoryId=${categoryParams}` : '';
      const stockFilters: Record<string, string> = {
        inStock: `&stock_gte=10`,
        lowStock: `&stock_gte=1&stock_lte=10`,
        outofStock: `&stock_lte=0`,
      };

      const stock = stockFilters[stockParams] ?? '';

      const response = await fetch(`${API_URL}/products?_page=${currentPage}&_limit=${defaultLimit}&_sort=id&_order=desc&_expand=category${category}&_expand=stock${stock}`, {
        method: 'GET',
      });

      const result = await response.json();

      return {
        success: true,
        data: result,
      } satisfies ApiSuccessResponse<ProductsResponse>;
    } catch (error) {
      return errorResponse('Kunde inte ansluta till servern.');
    }
  }

  //DELETE: Product
  static async deleteProduct(productId: number): Promise<ProductDeleteResponse> {
    try {
      const response = await fetch(`${API_URL}/products/${productId}`, {
        method: 'DELETE',
      });

      return {
        success: true,
        message: 'Remove successful product',
      } satisfies ProductDeleteResponse;
    } catch (error) {
      return errorResponse('Kunde inte ansluta till servern.');
    }
  }
}

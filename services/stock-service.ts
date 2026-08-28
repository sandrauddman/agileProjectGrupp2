import { ApiResponse, ApiSuccessResponse, ProductsResponse, Stats } from "@/app/types";
import { errorResponse } from "@/utils/error-response";


const API_URL = process.env.API_URL ?? 'http://localhost:4000';

export default class StockService {

  //GET: allProducts move to product service?
  static async getAllProducts(): Promise<ApiResponse<ProductsResponse>> {
    try {
      const response = await fetch(`${API_URL}/products`, {
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


  //Calculates stock and returns stats
  static async getStock(): Promise<Stats> {

    const [productResponse] = await Promise.all([StockService.getAllProducts()]);

    const products = productResponse.success ? productResponse.data.products : [];

    const currentStats: Stats = {
      total: products.length,
      inStock: 0,
      lowStock: 0,
      outOfStock: 0
    }
    for (const prod of products) {
      if (prod.stock === 0) currentStats.outOfStock++
      if (prod.stock! >= 10) currentStats.inStock++
      if (prod.stock! > 0 && prod.stock! < 10) currentStats.lowStock++
    }

    return currentStats;

  }
}
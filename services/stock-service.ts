import { ApiResponse, ApiSuccessResponse, ProductsResponse } from "@/app/types";
import { errorResponse } from "@/utils/error-response";





type Stats = {
    total: number,
    inStock: number,
    lowStock: number,
    outOfStock: number
}

const API_URL = 'http://localhost:4000';




export default class StockService {
  
   

  //GET: Product
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
        if (prod.stock) {
            if (prod.stock === 0) currentStats.outOfStock++
            if (prod.stock >= 10) currentStats.inStock++
            if (prod.stock > 0 && prod.stock < 10) currentStats.lowStock++
        }
    }

    return currentStats;

}
}
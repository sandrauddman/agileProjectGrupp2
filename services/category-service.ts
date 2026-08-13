import {
  ApiCategoryResponse,
  ApiCategoryErrorResponse,
  ApiCategorySuccessResponse,
  Category,
} from '@/app/types';

const API_URL = 'http://localhost:4000';

export default class CategoryService {
  static async getAllCategories(): Promise<ApiCategoryResponse> {
    try {
      const response = await fetch(`${API_URL}/categories`, {
        method: 'GET',
      });

      const result: Category[] = await response.json();

      return {
        success: true,
        categories: result,
      } satisfies ApiCategorySuccessResponse;
    } catch (error) {
      return {
        success: false,
        message: 'Server fel vid hämtning av kategorier',
      } satisfies ApiCategoryErrorResponse;
    }
  }
}

import { ApiResponse, ApiCategoryErrorResponse, CategoryResponse } from '@/app/types';

const API_URL = 'http://localhost:4000';

export default class CategoryService {
  static async getAllCategories(): Promise<ApiResponse<CategoryResponse>> {
    try {
      const response = await fetch(`${API_URL}/categories`, {
        method: 'GET',
      });
      const result = await response.json();
      return result;
    } catch (error) {
      return {
        success: false,
        message: 'Server fel vid hämtning av kategorier',
      } satisfies ApiCategoryErrorResponse;
    }
  }
}

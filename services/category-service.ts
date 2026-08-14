import { ApiErrorResponse, ApiResponse, ApiSuccessResponse, CategoryResponse } from '@/app/types';

const API_URL = 'http://localhost:4000';

export default class CategoryService {
  static async getAllCategories(): Promise<ApiResponse<CategoryResponse>> {
    try {
      const response = await fetch(`${API_URL}/categories`, {
        method: 'GET',
      });

      const result = await response.json();
      return {
        success: true,
        data: {
          categories: result,
        },
      } satisfies ApiSuccessResponse<CategoryResponse>;
    } catch (error) {
      return {
        success: false,
        message: 'Server fel vid hämtning av kategorier',
      } satisfies ApiErrorResponse;
    }
  }
}

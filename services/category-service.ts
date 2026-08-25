import { ApiResponse, ApiSuccessResponse, CategoryResponse } from '@/app/types';
import { errorResponse } from '@/utils/error-response';

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
      return errorResponse('Kunde inte ansluta till servern.');
    }
  }
}

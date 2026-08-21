'use server';

import { revalidatePath } from 'next/cache';
import ProductService from '@/services/product-service';

export async function deleteProduct(productId: number) {
  const response = await ProductService.deleteProduct(productId);

  if (!response.success) {
    return {
      success: response.success,
      message: 'Product could not be deleted',
    };
  }

  //Telling NEXT.JS That product list neeed to be updated
  revalidatePath('/');

  return {
    success: true,
    message: 'Product deleted successfully',
  };
}

'use server';

import { revalidatePath } from 'next/cache';
import ProductService from '@/services/product-service';
import type { Product } from '@/app/types';

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
    success: response.success,
    message: 'Product deleted successfully',
  };
}

export async function updateProduct(productId: number, product: Partial<Product>) {
  const response = await ProductService.updateProduct(productId, product);

  if (!response.success) {
    return {
      success: response.success,
      message: 'Product could not be updated',
    };
  }

  // Telling NEXT.JS that product list needs to be updated
  revalidatePath('/');

  return {
    success: response.success,
    message: 'Product updated successfully',
  };
}
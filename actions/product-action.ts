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

export async function updateProduct(
  productId: number,
  previousState: { success: boolean; message: string },
  formData: FormData
) {
  const updatedProduct: Partial<Product> = {
    title: String(formData.get('title') ?? ''),
    description: String(formData.get('description') ?? ''),
    brand: String(formData.get('brand') ?? ''),
    tags: String(formData.get('tags') ?? '')
      .split(',')
      .map((tag) => tag.trim())
      .filter(Boolean),
    categoryId: Number(formData.get('categoryId')),
    price: Number(formData.get('price')),
    discountPercentage: Number(formData.get('discountPercentage')),
    stock: Number(formData.get('stock')),
    minimumOrderQuantity: Number(formData.get('minimumOrderQuantity')),
    thumbnail: String(formData.get('thumbnail') ?? ''),
    images: String(formData.get('images') ?? '')
      .split(',')
      .map((image) => image.trim())
      .filter(Boolean),
    dimensions: {
      width: Number(formData.get('width')),
      height: Number(formData.get('height')),
      depth: Number(formData.get('depth')),
    },
  };

  const response = await ProductService.updateProduct(productId, updatedProduct);

  if (!response.success) {
    return {
      success: false,
      message: 'Product could not be updated',
    };
  }

  revalidatePath('/');

  return {
    success: true,
    message: 'Product updated successfully',
  };
}
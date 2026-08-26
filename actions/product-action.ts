'use server';

import { revalidatePath } from 'next/cache';
import ProductService from '@/services/product-service';
import type { Product } from '@/app/types';
import { addProductSchema, editProduct } from '@/schemas/validation-schema';

export async function deleteProduct(productId: number) {
  const response = await ProductService.deleteProduct(productId);

  if (!response.success) {
    return {
      success: response.success,
      message: 'Product could not be deleted',
    };
  }

  // Telling NEXT.JS That product list needs to be updated
  revalidatePath('/');

  return {
    success: response.success,
    message: 'Product deleted successfully',
  };
}

// Convert FormData values into the format expected by ProductService
function getProductFromFormData(formData: FormData): Partial<Product> {
  return {
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
}

export async function updateProduct(
  productId: number,
  _previousState: { success: boolean; message: string },
  formData: FormData
) {
  // Validate form data before sending it to the API
  const validation = editProduct.safeParse({
    title: formData.get('title'),
    description: formData.get('description'),
    brand: formData.get('brand'),
    tags: formData.get('tags'),
    categoryId: formData.get('categoryId'),
    price: formData.get('price'),
    discountPercentage: formData.get('discountPercentage'),
    stock: formData.get('stock'),
    minimumOrderQuantity: formData.get('minimumOrderQuantity'),
    height: formData.get('height'),
    width: formData.get('width'),
    depth: formData.get('depth'),
  });
  
  // Stop if the form data does not pass validation
  if (!validation.success) {
    return {
      success: false,
      message: validation.error.issues[0].message,
    };
  }

  const product = getProductFromFormData(formData);

  const response = await ProductService.updateProduct(productId, product);

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

export async function createProduct(
  _previousState: { success: boolean; message: string },
  formData: FormData
) {
  const validation = addProductSchema.safeParse({
    title: formData.get('title'),
    description: formData.get('description'),
    brand: formData.get('brand'),
    tags: formData.get('tags'),
    categoryId: formData.get('categoryId'),
    price: formData.get('price'),
    discountPercentage: formData.get('discountPercentage'),
    stock: formData.get('stock'),
    minimumOrderQuantity: formData.get('minimumOrderQuantity'),
    height: formData.get('height'),
    width: formData.get('width'),
    depth: formData.get('depth'),
  });

  if (!validation.success) {
    return {
      success: false,
      message: validation.error.issues[0].message,
    };
  }

  const product = getProductFromFormData(formData);

  const response = await ProductService.createProduct(product);

  if (!response.success) {
    return {
      success: false,
      message: 'Product could not be created',
    };
  }

  revalidatePath('/');

  return {
    success: true,
    message: 'Product created successfully',
  };
}
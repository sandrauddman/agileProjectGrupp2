import { z } from 'zod';

export const addProductSchema = z.object({
  // Product Info
  title: z.string().trim().min(3, 'The title must be at least 3 character.').max(30, 'Title can maximum be 30 character long.'),
  description: z.string().trim().min(1, 'Description is required.'),
  brand: z.string().trim().min(1, 'Brand is requried'),
  tags: z.string().trim().min(1, 'At least one tag is required.'),
  categoryId: z.string().refine((value) => value !== '0', {
    message: 'Please select a category.',
  }),

  // Pricing & Inventory
  price: z.coerce.number().min(0, 'Price cannot be less than 0.'),
  discountPercentage: z.coerce.number().min(0, 'Discount cannot be less than 0.').max(100, 'Discount cannot be greater than 100.'),
  stock: z.coerce.number().int('Stock must be a whole number.').min(0, 'Stock cannot be less than 0.'),
  minimumOrderQuantity: z.coerce.number().int('Minimum order must be a whole number.').min(1, 'Minimum order must be at least 1.'),

  // Product Media
  thumbnail: z.string().trim().min(1, 'Thumbnail is required.'),

  // Dimensions - Optional number: allows an empty value or a number greater than or equal to 0.
  height: z.union([z.literal(''), z.coerce.number().min(0)]).optional(),
  width: z.union([z.literal(''), z.coerce.number().min(0)]).optional(),
  depth: z.union([z.literal(''), z.coerce.number().min(0)]).optional(),
});

export const editProduct = addProductSchema;

export type AddProductDto = z.infer<typeof addProductSchema>;
export type UpdateProductDto = z.infer<typeof editProduct>;
//Components
import ProductPagination from '@/components/product-pagination';
import ProductDeleteButton from '@/components/product-delete-button';
import ProductEditButton from '@/components/product-edit-button';

//Actions
import { deleteProduct } from '@/actions/product-action';

//Types
import type { Category, Product } from '@/app/types';

import Image from 'next/image';

type Props = {
  products: Product[];
  currentPage: number;
  totalPage: number;
  categoryParam?: string;
  stockParam?: string;
  categories: Category[];
  queryParam?: string;
};

export default function ProductList({ products, currentPage, totalPage, categoryParam, categories, stockParam, queryParam }: Props) {
  return (
    <section aria-labelledby="products-heading" className="mt-6 rounded-xl border border-gray-200 bg-white">
      <h2 id="products-heading" className="sr-only">
        Products
      </h2>

      <div className="mt-6 rounded-xl border border-gray-200 bg-whit">
        <table className="w-full">
          <caption className="sr-only">List of products with title, brand, category, stock, price and available actions</caption>
          <thead className="border-b border-gray-200 text-left bg-gray-100">
            <tr className="text-xs uppercase tracking-wide text-gray-500">
              <th className="px-6 py-4" scope="col">
                Title
              </th>
              <th className="px-6 py-4" scope="col">
                Brand
              </th>
              <th className="px-6 py-4" scope="col">
                Category
              </th>
              <th className="px-6 py-4" scope="col">
                Stock
              </th>
              <th className="px-6 py-4 text-right" scope="col">
                Price
              </th>
              <th className="px-6 py-4 text-center" scope="col">
                Actions
              </th>
            </tr>
          </thead>
          <tbody>
            {products.map((product) => {
              const stock = product.stock ?? 0;

              const stockStatus = stock > 10 ? `In stock: ${stock}` : stock > 0 ? `Low stock: ${stock}` : 'Out of stock';

              return (
                <tr
                  key={product.id}
                  tabIndex={0}
                  aria-label={`${product.title}, SKU ${product.sku}, Brand ${product.brand}, Category ${product.category?.name ?? 'No category'}, ${stockStatus}, Price ${product.price} euros`}
                  className="border-b border-gray-100 hover:bg-gray-50"
                >
                  {/* Product  */}
                  <th scope="row" className="px-6 py-4 text-left font-bold text-black">
                    <div className="flex items-center gap-3">
                      <Image
                        src={product.thumbnail}
                        alt={`${product.title} product image`}
                        width={50}
                        height={50}
                        className="h-10 w-10 rounded-md border border-gray-300 object-cover"
                      />

                      <div>
                        <p className="font-semibold text-gray-900">{product.title}</p>

                        <p className="text-xs text-gray-500">SKU: {product.sku}</p>
                      </div>
                    </div>
                  </th>

                  {/* Brand */}
                  <td className="px-6 py-4 text-black">{product.brand}</td>

                  {/* Category */}
                  <td className="px-6 py-4 text-black">{product.category?.name ?? 'No category'}</td>

                  {/* Stock */}
                  <td className="px-6 py-4" aria-label={stockStatus}>
                    {stock > 10 ? (
                      <span className="font-medium text-green-600">In Stock ({stock})</span>
                    ) : stock > 0 ? (
                      <span className="font-medium text-orange-500">Low Stock ({stock})</span>
                    ) : (
                      <span className="font-medium text-red-500">Out of Stock</span>
                    )}
                  </td>

                  {/* Price */}
                  <td className="px-6 py-4 text-right text-black">€{product.price}</td>

                  {/* Products Actions */}
                  <td className="px-6 py-4 text-center text-black">
                    <div className="flex justify-center gap-4" aria-label={`Actions for ${product.title}`}>
                      <ProductDeleteButton productId={product.id} deleteProduct={deleteProduct} productTitle={product.title} />
                      <ProductEditButton product={product} categories={categories} />
                    </div>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
        <ProductPagination currentPage={currentPage} totalPages={totalPage} categoryParam={categoryParam} stockParam={stockParam} queryParam={queryParam} />
      </div>
    </section>
  );
}

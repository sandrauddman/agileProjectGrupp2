//Components
import ProductPagination from '@/components/product-pagination';
import ProductDeleteButton from '@/components/product-delete-button';
import ProductEditButton from '@/components/product-edit-button';

//Actions
import { deleteProduct } from '@/actions/product-action';

//Types
import type { Category, Product } from '@/app/types';

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
    <div className="mt-6 rounded-xl border border-gray-200 bg-whit">
      <table className="w-full">
        <thead className="border-b border-gray-200 text-left bg-gray-100">
          <tr className="text-xs uppercase tracking-wide text-gray-500">
            <th className="px-6 py-4">Title</th>
            <th className="px-6 py-4 hidden md:table-cell">Brand</th>
            <th className="px-6 py-4">Category</th>
            <th className="px-6 py-4">Stock</th>
            <th className="px-6 py-4 text-right">Price</th>
            <th className="px-6 py-4 text-center">Actions</th>
          </tr>
        </thead>
        <tbody>
          {products.map((product) => (
            <tr key={product.id} className="border-b border-gray-100 hover:bg-gray-50">
              <td className="px-6 py-4 text-black font-bold">
                <div className="flex items-center gap-3">
                  <img width={50} height={50} src={product.thumbnail} alt={product.title} className="h-10 w-10 rounded-md border border-gray-300 object-cover" />
                  <div>
                    <p className="font-semibold text-gray-900">{product.title}</p>
                    <p className="text-xs text-gray-500">SKU: {product.sku}</p>
                  </div>
                </div>
              </td>
              <td className="px-6 py-4 text-black hidden md:table-cell">{product.brand}</td>
              <td className="px-6 py-4 text-black">{product.category?.name}</td>
              <td className="px-6 py-4">
                {(product.stock ?? 0) > 10 ? (
                  <span className="font-medium text-green-600">In Stock ({product.stock})</span>
                ) : (product.stock ?? 0) > 0 ? (
                  <span className="font-medium text-orange-500">Low Stock ({product.stock})</span>
                ) : (
                  <span className="font-medium text-red-500">Out of Stock</span>
                )}
              </td>
              <td className="px-6 py-4 text-right text-black">€{product.price}</td>

              {/*Product Actions */}
              <td className="px-6 py-4 text-center text-black">
                <div className="md:flex justify-center gap-4 grid">
                  {/*Delete Product */}
                  <ProductDeleteButton productId={product.id} deleteProduct={deleteProduct} />

                  {/*Edit Product */}
                  <ProductEditButton product={product} categories={categories} />
                </div>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      <ProductPagination currentPage={currentPage} totalPages={totalPage} categoryParam={categoryParam} stockParam={stockParam} queryParam={queryParam} />

    </div>
  );
}

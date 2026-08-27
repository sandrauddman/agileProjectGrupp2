import { Package, CircleCheck, TriangleAlert, CircleX } from 'lucide-react';

export default function InventoryStatistics() {
  return (
    <section aria-labelledby="inventory-statistics-heading" className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
      <h2 id="inventory-statistics-heading" className="sr-only">
        Inventory overview
      </h2>
      <article tabIndex={0} aria-label="Products: 193" className="flex items-center justify-between rounded-xl border border-gray-200 bg-white p-5 shadow-sm">
        <div>
          <p className="text-xs font-medium uppercase tracking-wide text-gray-500">Products</p>
          <p className="mt-1 text-3xl font-bold text-violet-600">193</p>
        </div>
        <Package className="size-6 text-violet-500" aria-hidden="true" />
      </article>

      <article tabIndex={0} aria-label="In stock: 169" className="flex items-center justify-between rounded-xl border border-gray-200 bg-white p-5 shadow-sm">
        <div>
          <p className="text-xs font-medium uppercase tracking-wide text-gray-500">In Stock</p>
          <p className="mt-1 text-3xl font-bold text-green-600">169</p>
        </div>
        <CircleCheck className="size-6 text-green-500" aria-hidden="true" />
      </article>

      <article tabIndex={0} aria-label="Low stock: 20" className="flex items-center justify-between rounded-xl border border-gray-200 bg-white p-5 shadow-sm">
        <div>
          <p className="text-xs font-medium uppercase tracking-wide text-gray-500">Low Stock</p>
          <p className="mt-1 text-3xl font-bold text-orange-500">20</p>
        </div>
        <TriangleAlert className="size-6 text-orange-500" aria-hidden="true" />
      </article>

      <article tabIndex={0} aria-label="Out of stock: 4" className="flex items-center justify-between rounded-xl border border-gray-200 bg-white p-5 shadow-sm">
        <div>
          <p className="text-xs font-medium uppercase tracking-wide text-gray-500">Out of Stock</p>
          <p className="mt-1 text-3xl font-bold text-red-500">4</p>
        </div>
        <CircleX className="size-6 text-red-500" aria-hidden="true" />
      </article>
    </section>
  );
}

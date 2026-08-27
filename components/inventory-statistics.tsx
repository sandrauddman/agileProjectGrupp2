import StockService from "@/services/stock-service";
import { Package, CircleCheck, TriangleAlert, CircleX } from "lucide-react";

export default async function InventoryStatistics() {

  const inventoryStats= await StockService.getStock();

  return (
    <section className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
      <article className="flex items-center justify-between rounded-xl border border-gray-200 bg-white p-5 shadow-sm">
        <div>
          <p className="text-xs font-medium uppercase tracking-wide text-gray-500">
            Products
          </p>
          <p className="mt-1 text-3xl font-bold text-violet-600">{inventoryStats.total}</p>
        </div>
        <Package className="size-6 text-violet-500" aria-hidden="true" />
      </article>

      <article className="flex items-center justify-between rounded-xl border border-gray-200 bg-white p-5 shadow-sm">
        <div>
          <p className="text-xs font-medium uppercase tracking-wide text-gray-500">
            In Stock
          </p>
          <p className="mt-1 text-3xl font-bold text-green-600">{inventoryStats.inStock}</p>
        </div>
        <CircleCheck className="size-6 text-green-500" aria-hidden="true" />
      </article>

      <article className="flex items-center justify-between rounded-xl border border-gray-200 bg-white p-5 shadow-sm">
        <div>
          <p className="text-xs font-medium uppercase tracking-wide text-gray-500">
            Low Stock
          </p>
          <p className="mt-1 text-3xl font-bold text-orange-500">{inventoryStats.lowStock}</p>
        </div>
        <TriangleAlert className="size-6 text-orange-500" aria-hidden="true" />
      </article>

      <article className="flex items-center justify-between rounded-xl border border-gray-200 bg-white p-5 shadow-sm">
        <div>
          <p className="text-xs font-medium uppercase tracking-wide text-gray-500">
            Out of Stock
          </p>
          <p className="mt-1 text-3xl font-bold text-red-500">{inventoryStats.outOfStock}</p>
        </div>
        <CircleX className="size-6 text-red-500" aria-hidden="true" />
      </article>
    </section>
  );
}

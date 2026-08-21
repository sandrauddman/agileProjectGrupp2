import { Category, Product } from '@/app/types';

type Props = {
  categories: Category[];
  product?: Product;
};

export default function ProductInfoForm({ categories, product }: Props) {
  return (
    <section>
      <div className="mt-4 grid grid-cols-1 gap-4 md:grid-cols-3">
        <div className="col-span-1 md:col-span-3">
          <label htmlFor="title" className="block text-sm font-medium text-foreground">
            Title
          </label>

          <input
            id="title"
            name="title"
            type="text"
            defaultValue={product?.title ?? ''}
            className="mt-1 w-full rounded-lg border border-gray-300 px-3 py-2"
          />
        </div>

        <div className="col-span-1 md:col-span-3">
          <label htmlFor="description" className="block text-sm font-medium text-foreground">
            Description
          </label>

          <textarea
            id="description"
            name="description"
            rows={2}
            defaultValue={product?.description ?? ''}
            className="mt-1 w-full rounded-lg border border-gray-300 px-3 py-2"
          />
        </div>

        <div>
          <label htmlFor="brand" className="block text-sm font-medium text-foreground">
            Brand
          </label>

          <input
            id="brand"
            name="brand"
            type="text"
            defaultValue={product?.brand ?? ''}
            className="mt-1 w-full rounded-lg border border-gray-300 px-3 py-2"
          />
        </div>

        <div>
          <label htmlFor="tags" className="block text-sm font-medium text-foreground">
            Tags
          </label>

          <input
            id="tags"
            name="tags"
            type="text"
            placeholder="e.g. beauty, mascara"
            defaultValue={product?.tags?.join(', ') ?? ''}
            className="mt-1 w-full rounded-lg border border-gray-300 px-3 py-2"
          />
        </div>

        <div>
          <label htmlFor="category" className="block text-sm font-medium text-foreground">
            Category
          </label>

          <select
            name="category"
            id="category"
            defaultValue={product?.categoryId?.toString() ?? '0'}
            className="mt-1 w-full rounded-lg border border-gray-300 bg-background px-3 py-2 text-foreground"
          >
            <option value="0" disabled>
              Select Category
            </option>

            {categories.map((category) => (
              <option value={category.id} key={category.id}>
                {category.name}
              </option>
            ))}
          </select>
        </div>
      </div>
    </section>
  );
}
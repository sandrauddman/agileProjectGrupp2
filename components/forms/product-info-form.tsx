import { Category, Product } from '@/app/types';
import type { ProductFormValues } from '@/actions/product-action';

type Props = {
  categories: Category[];
  product?: Product;
  formValues?: ProductFormValues;
};

export default function ProductInfoForm({ categories, product, formValues }: Props) {
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
            defaultValue={formValues?.title ?? product?.title ?? ''}
            onChange={() => { }}
            className="mt-1 w-full rounded-lg border border-gray-300 px-3 py-2 text-foreground"
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
            defaultValue={formValues?.description ?? product?.description ?? ''}
            onChange={() => { }}
            className="mt-1 w-full rounded-lg border border-gray-300 px-3 py-2 text-foreground"
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
            defaultValue={formValues?.brand ?? product?.brand ?? ''}
            onChange={() => { }}
            className="mt-1 w-full rounded-lg border border-gray-300 px-3 py-2 text-foreground"
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
            placeholder="Tags separated by commas"
            defaultValue={formValues?.tags ?? product?.tags?.join(', ') ?? ''}
            onChange={() => { }}
            className="mt-1 w-full rounded-lg border border-gray-300 px-3 py-2 text-foreground"
          />
        </div>

        <div>
          <label htmlFor="categoryId" className="block text-sm font-medium text-foreground">
            Category
          </label>

          <select
            name="categoryId"
            id="categoryId"
            defaultValue={formValues?.categoryId ?? product?.categoryId?.toString() ?? '0'}
            onChange={() => { }}
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
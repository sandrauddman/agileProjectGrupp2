import { Category } from '@/app/types';

type Props = {
  categories: Category[];
};

export default function ProductInfoForm({ categories }: Props) {
  return (
    <section>
      <div className="mt-4 grid grid-cols-1 gap-4 md:grid-cols-2">
        <div className="col-span-1 md:col-span-2">
          <label htmlFor="title" className="block text-sm font-medium text-foreground">
            Title
          </label>

          <input
            id="title"
            name="title"
            type="text"
            className="mt-1 w-full rounded-lg border border-gray-300 px-3 py-2"
          />
        </div>

        <div className="col-span-1 md:col-span-2">
          <label htmlFor="description" className="block text-sm font-medium text-foreground">
            Description
          </label>

          <textarea
            id="description"
            name="description"
            rows={2}
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
            className="mt-1 w-full rounded-lg border border-gray-300 px-3 py-2"
          />
        </div>
        <div>
          <select
            name="category"
            id="category"
            defaultValue={'0'}
            className="border-1 border-zinc-200 rounded-sm p-2 grow-2"
          >
            <option value="0" disabled>
              Select Categories
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

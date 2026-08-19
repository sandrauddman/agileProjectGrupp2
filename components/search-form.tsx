import { Funnel } from 'lucide-react';
import { Category } from '@/app/types';

type Props = {
  categories: Category[];
  selectedCategory: string;
};

export default function SearchForm({ categories, selectedCategory }: Props) {
  return (
    <form action="/" method="GET" className="bg-white border-1 border-zinc-200 rounded-sm flex p-4 gap-4 mt-6 text-sm">
      <label htmlFor="search" hidden>
        Search
      </label>
      <input type="text" name="search" id="search" placeholder="Search products..." className="border-1 border-zinc-200 rounded-sm p-2 grow-7" />
      <label htmlFor="category" hidden>
        Select Category
      </label>

      {/* Filter on categories*/}
      <select name="category" id="category" defaultValue={selectedCategory} className="border-1 border-zinc-200 rounded-sm p-2 grow-2">
        <option value="">All Categories</option>
        {categories.map((category) => (
          <option value={category.id} key={category.id}>
            {category.name}
          </option>
        ))}
      </select>

      <label htmlFor="stock" hidden>
        Select Stock amount
      </label>
      <select name="stock" id="stock" defaultValue={'0'} className="border-1 border-zinc-200 rounded-sm p-2 grow-2">
        <option value="0" disabled>
          All Stock
        </option>
        <option value="2">In stock</option>
        <option value="3">Low stock</option>
        <option value="4">Out of Stock</option>
      </select>

      <button className="border-1 border-zinc-200 hover:bg-zinc-300 rounded-sm flex gap-2 p-2  justify-center">
        {' '}
        <Funnel size={18} fill="black" />
        Filter
      </button>
    </form>
  );
}

import { Funnel } from 'lucide-react';
import { Category } from '@/app/types';

type Props = {
  categories: Category[];
  selectedCategory: string;
  selectedStock: string;
};

export default function SearchForm({ categories, selectedCategory, selectedStock }: Props) {
  return (
    <section className="container" aria-labelledby="search-heading">
      <h2 id="search-heading" className="sr-only">
        Search and filter products
      </h2>
      <form action="/" method="GET" className="bg-white border border-zinc-200 rounded-sm flex p-4 gap-4 mt-6 text-sm">
        {/* Search */}
        <label htmlFor="search" className="sr-only">
          Search
        </label>
        <input type="search" name="search" id="search" placeholder="Search products..." className="border border-zinc-200 rounded-sm p-2 grow-7" />

        {/* Filter on categories */}
        <label htmlFor="category" className="sr-only">
          Filter by category
        </label>
        <select name="category" id="category" defaultValue={selectedCategory} className="border border-zinc-200 rounded-sm p-2 grow-2">
          <option value="">All Categories</option>
          {categories.map((category) => (
            <option value={category.id} key={category.id}>
              {category.name}
            </option>
          ))}
        </select>

        {/* Stock */}
        <label htmlFor="stock" className="sr-only">
          Filter by stock status
        </label>
        <select name="stock" id="stock" defaultValue={selectedStock} className="border border-zinc-200 rounded-sm p-2 grow-2">
          <option value="">All Stock</option>
          <option value="inStock">In stock</option>
          <option value="lowStock">Low stock</option>
          <option value="outofStock">Out of Stock</option>
        </select>

        <button type="submit" className="border border-zinc-200 hover:bg-zinc-300 rounded-sm flex gap-2 p-2  justify-center">
          {' '}
          <Funnel size={18} fill="black" aria-hidden="true" />
          Filter
        </button>
      </form>
    </section>
  );
}

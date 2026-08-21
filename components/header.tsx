'use client';

import { useState } from 'react';
import { Plus } from 'lucide-react';
import ProductModal from './product-modal';
import { Category } from '@/app/types';

type Props = {
  categories: Category[];
};

export default function Header({ categories }: Props) {
  //Controls whether the product modal is open
  const [isModalOpen, setIsModalOpen] = useState(false);
  return (
    <div>
      <header className="border-b border-gray-300 bg-background">
        <div className="container mx-auto flex max-w-7xl items-center justify-between px-6 py-5">
          <div>
            <h1 className="text-xl font-extrabold text-foreground">Inventory Management</h1>
            <p className="text-sm text-gray-600 dark:text-gray-400">
              Manage and track your global product catalogue across all categories
            </p>
          </div>

          <button
            type="button"
            //Open product modal
            onClick={() => setIsModalOpen(true)}
            className="flex items-center gap-2 rounded-lg bg-indigo-600 px-4 py-2 font-medium text-white hover:bg-indigo-700 cursor-pointer"
          >
            <Plus strokeWidth={3} size={18} />
            Add Product
          </button>
        </div>
      </header>

      {/* Display product modal when open */}
      {isModalOpen && (
        <ProductModal categories={categories} mode="add" onClose={() => setIsModalOpen(false)} />
      )}
    </div>
  );
}

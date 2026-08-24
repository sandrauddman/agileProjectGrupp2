"use client";

import { useState } from 'react';
import { Pencil } from 'lucide-react';

import ProductModal from './product-modal';
import type { Category, Product } from '@/app/types';

type Props = {
    product: Product;
    categories: Category[];
};

export default function ProductEditButton({ product, categories }: Props) {
    const [isModalOpen, setIsModalOpen] = useState(false);
    return (
        <div>
            <button
                type="button"
                onClick={() => setIsModalOpen(true)}
                className="cursor-pointer flex"
                aria-label={`Edit ${product.title}`}
            >
                <Pencil size={18} />
            </button>

            {isModalOpen && (
                <ProductModal
                    categories={categories}
                    product={product}
                    mode="edit"
                    onClose={() => setIsModalOpen(false)}
                />
            )}
        </div>
    );
}
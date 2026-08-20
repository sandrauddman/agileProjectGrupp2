import ProductInfoForm from './forms/product-info-form';
import { Category, Product } from '@/app/types';
import { X } from 'lucide-react';

import PricingInventoryForm from "./forms/pricing-inventory-form";
import ProductMediaForm from './forms/product-media-form';
type ProductModalProps = {
    mode: 'add' | 'edit';
    onClose: () => void;
    categories: Category[];
    product?: Product;
};

export default function ProductModal({ mode, onClose, categories, product }: ProductModalProps) {
    const title = mode === 'add' ? 'Add Product' : 'Edit Product';
    return (
        <div className="fixed inset-0 flex items-center justify-center bg-black/50">
            <section
                role="dialog"
                aria-modal="true"
                aria-labelledby="product-modal-title"
                className="relative w-full max-w-4xl rounded-lg bg-background p-6 text-left shadow-xl"
            >
                <button
                    type="button"
                    onClick={onClose}
                    className="absolute right-4 top-4 rounded-md p-2 text-foreground hover:bg-foreground/10 cursor-pointer"
                    aria-label="Close"
                >
                    <X strokeWidth={3} size={20} />
                </button>

                <header>
                    <h2 id="product-modal-title" className="text-xl font-bold text-foreground">
                        {title}
                    </h2>
                </header>

                <form className="mt-6 space-y-6">
                    {/* forms components here */}
                    <ProductInfoForm categories={categories} product={product} />
                    <PricingInventoryForm product={product} />
                    <ProductMediaForm product={product} />
                    <div className="flex justify-end gap-3">
                        <button
                            type="button"
                            onClick={onClose}
                            className="rounded-lg border border-foreground/20 px-4 py-2 text-foreground hover:bg-foreground/10 cursor-pointer"
                        >
                            Cancel
                        </button>

                        <button
                            type="submit"
                            className="rounded-lg bg-indigo-600 px-4 py-2 font-medium text-white hover:bg-indigo-700 cursor-pointer"
                        >
                            Save Product
                        </button>
                    </div>
                </form>
            </section>
        </div>
    );
}

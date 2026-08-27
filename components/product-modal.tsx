'use client';

import { useActionState, useEffect } from 'react';
import { useFormStatus } from 'react-dom';

import ProductInfoForm from './forms/product-info-form';
import { Category, Product } from '@/app/types';
import { X } from 'lucide-react';

import PricingInventoryForm from './forms/pricing-inventory-form';
import ProductMediaForm from './forms/product-media-form';
import { createProduct, updateProduct } from '@/actions/product-action';
import { toast } from 'sonner';

type ProductModalProps = {
  mode: 'add' | 'edit';
  onClose: () => void;
  categories: Category[];
  product?: Product;
};

function SaveProductButton() {
  const { pending } = useFormStatus();

  return (
    <button
      type="submit"
      disabled={pending}
      className="rounded-lg bg-indigo-600 px-4 py-2 font-medium text-white hover:bg-indigo-700 disabled:cursor-not-allowed disabled:opacity-50 cursor-pointer"
    >
      {pending ? 'Saving...' : 'Save Product'}
    </button>
  );
}

export default function ProductModal({ mode, onClose, categories, product }: ProductModalProps) {
  const title = mode === 'add' ? 'Add Product' : 'Edit Product';

  // choose the server action based on whether the modal is adding or editing a product
  const action = mode === 'edit' && product ? updateProduct.bind(null, product.id) : createProduct;

  //useActionState connects form to server action and tracks its result
  const [state, formAction] = useActionState(action, {
    success: false,
    message: '',
  });

  //show feedback after server action finishes
  useEffect(() => {
    if (!state.message) {
      return;
    }

    if (state.success) {
      toast.success(state.message);
      onClose();
    } else {
      toast.error(state.message);
    }
  }, [state, onClose]);

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black/50">
      <section role="dialog" aria-modal="true" aria-labelledby="product-modal-title" className="relative w-full max-w-4xl rounded-lg bg-background p-6 text-left shadow-xl">
        <h2 id="product-modal-title" className="sr-only">
          {title}
        </h2>
        <button type="button" onClick={onClose} className="absolute right-4 top-4 rounded-md p-2 text-foreground hover:bg-foreground/10 cursor-pointer" aria-label="Close">
          <X strokeWidth={3} size={20} aria-hidden="true" />
        </button>

        <header>
          <h2 id="product-modal-title" className="text-xl font-bold text-foreground">
            {title}
          </h2>
        </header>

        <form action={formAction} className="mt-6 space-y-6">
          {/* forms components here */}
          <ProductInfoForm categories={categories} product={product} />
          <PricingInventoryForm product={product} />
          <ProductMediaForm product={product} />

          <div className="flex justify-end gap-3">
            <button type="button" onClick={onClose} className="rounded-lg border border-foreground/20 px-4 py-2 text-foreground hover:bg-foreground/10 cursor-pointer">
              Cancel
            </button>

            <SaveProductButton />
          </div>
        </form>
      </section>
    </div>
  );
}

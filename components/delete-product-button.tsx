'use client';

import { Trash2 } from 'lucide-react';
import { toast } from 'sonner';

type Props = {
  productId: number;
  deleteProduct: (productId: number) => Promise<void>;
};

export default function DeleteProductButton({ productId, deleteProduct }: Props) {
  const handleDelete = async () => {
    //Delete confirmation
    toast('Are you sure you want to delete the product?', {
      action: {
        label: 'Delete',
        onClick: async () => {
          //Run the server action
          await deleteProduct(productId);
        },
      },
      cancel: {
        label: 'Cancel',
        onClick: () => {},
      },
    });
  };

  return (
    <button type="button" onClick={handleDelete} className="cursor-pointer">
      <Trash2 size={18} />
    </button>
  );
}

'use client';

import { Trash2 } from 'lucide-react';
import { toast } from 'sonner';

type Props = {
  productId: number;
  deleteProduct: (productId: number) => Promise<{
    success: boolean;
    message: string;
  }>;
};

export default function DeleteProductButton({ productId, deleteProduct }: Props) {
  const handleDelete = async () => {
    //Delete confirmation
    toast('Are you sure you want to delete the product?', {
      action: {
        label: 'Delete',
        onClick: async () => {
          const response = await deleteProduct(productId);

          if (response.success) {
            toast.success(response.message);
          } else {
            toast.error(response.message);
          }
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

import { X } from "lucide-react";

type ProductModalProps = {
    onClose: () => void;
};

export default function ProductModal({ onClose }: ProductModalProps) {
    return (
        <div className="fixed inset-0 flex items-center justify-center bg-black/50">
            <section
                role="dialog"
                aria-modal="true"
                aria-labelledby="product-modal-title"
                className="relative w-full max-w-4xl rounded-lg bg-background p-6 shadow-xl"
            >
                <button
                    type="button"
                    onClick={onClose}
                    className="absolute right-4 top-4 text-foreground hover:text-foreground/50"
                    aria-label="Close"
                >
                    <X strokeWidth={3} size={20} />
                </button>

                <header>
                    <h2
                        id="product-modal-title"
                        className="text-xl font-bold text-foreground"
                    >
                        Product Modal
                    </h2>
                </header>

                <div className="mt-6">
                    <p className="text-sm text-gray-600 dark:text-gray-400">
                        Product forms
                    </p>
                </div>
            </section>
        </div>
    );
}
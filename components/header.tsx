import { Plus } from "lucide-react";

export default function Header() {
    return (
        <header className="flex items-center justify-between border-b border-gray-300 bg-[var(--background)] px-12 py-6">
            <div>
                <h1 className="text-3xl font-bold text-[var(--foreground)]">
                    Inventory Management
                </h1>

                <p className="text-gray-600">
                    Manage and track your global product catalogue across all categories
                </p>
            </div>

            <button className="flex items-center gap-2 rounded-lg bg-indigo-600 px-5 py-3 font-medium text-white hover:bg-indigo-700">
                <Plus size={18} />
                Add Product
            </button>
        </header>
    );
}
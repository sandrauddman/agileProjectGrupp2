import { Plus } from "lucide-react";

export default function Header() {
    return (
        <header className="border-b border-gray-300 bg-background">
            <div className="container mx-auto flex max-w-7xl items-center justify-between px-6 py-5">
                <div>
                    <h1 className="text-xl font-extrabold text-foreground">
                        Inventory Management
                    </h1>
                    <p className="text-sm text-gray-600">
                        Manage and track your global product catalogue across all categories
                    </p>
                </div>
                <button className="flex items-center gap-2 rounded-lg bg-indigo-600 px-4 py-2 font-medium text-white hover:bg-indigo-700">
                    <Plus strokeWidth={3} size={18} />
                    Add Product
                </button>
            </div>
        </header>
    );
}
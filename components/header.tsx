import { Plus } from "lucide-react";

export default function Header() {
    return (
        <header className="border-b border-gray-300 bg-background">
            <div className="container mx-auto flex max-w-7xl items-center justify-between px-6 py-6">
                <div>
                    <h1 className="text-3xl font-bold text-foreground">
                        Inventory Management
                    </h1>
                    <p className="text-gray-600">
                        Manage and track your global product catalogue across all categories
                    </p>
                </div>
                <button className="flex items-center gap-2 rounded-lg bg-indigo-600 px-5 py-3 font-medium text-white hover:bg-indigo-700">
                    <Plus strokeWidth={3} size={18} />
                    Add Product
                </button>
            </div>
        </header>
    );
}
export default function PricingInventoryForm() {
    return (
        <section>
            <div className="mt-4 grid grid-cols-2 gap-4 md:grid-cols-4">
                <div>
                    <label
                        htmlFor="price"
                        className="block text-sm font-medium text-foreground"
                    >
                        Price
                    </label>

                    <input
                        id="price"
                        name="price"
                        type="number"
                        step="0.01"
                        min="0"
                        className="mt-1 w-full rounded-lg border border-gray-300 px-3 py-2"
                    />
                </div>

                <div>
                    <label
                        htmlFor="discountPercentage"
                        className="block text-sm font-medium text-foreground"
                    >
                        Discount %
                    </label>

                    <input
                        id="discountPercentage"
                        name="discountPercentage"
                        type="number"
                        step="1"
                        min="0"
                        max="100"
                        className="mt-1 w-full rounded-lg border border-gray-300 px-3 py-2"
                    />
                </div>

                <div>
                    <label
                        htmlFor="stock"
                        className="block text-sm font-medium text-foreground"
                    >
                        Stock
                    </label>

                    <input
                        id="stock"
                        name="stock"
                        type="number"
                        step="1"
                        min="0"
                        className="mt-1 w-full rounded-lg border border-gray-300 px-3 py-2"
                    />
                </div>

                <div>
                    <label
                        htmlFor="minimumOrderQuantity"
                        className="block text-sm font-medium text-foreground"
                    >
                        Min. Order
                    </label>

                    <input
                        id="minimumOrderQuantity"
                        name="minimumOrderQuantity"
                        type="number"
                        step="1"
                        min="1"
                        className="mt-1 w-full rounded-lg border border-gray-300 px-3 py-2"
                    />
                </div>
            </div>
        </section>
    );
}
export default function ProductInfoForm() {
    return (
        <section>
            <div className="mt-4 grid grid-cols-1 gap-4 md:grid-cols-2">
                <div className="col-span-1 md:col-span-2">
                    <label
                        htmlFor="title"
                        className="block text-sm font-medium text-foreground"
                    >
                        Title
                    </label>

                    <input
                        id="title"
                        name="title"
                        type="text"
                        className="mt-1 w-full rounded-lg border border-gray-300 px-3 py-2"
                    />
                </div>

                <div className="col-span-1 md:col-span-2">
                    <label
                        htmlFor="description"
                        className="block text-sm font-medium text-foreground"
                    >
                        Description
                    </label>

                    <textarea
                        id="description"
                        name="description"
                        rows={2}
                        className="mt-1 w-full rounded-lg border border-gray-300 px-3 py-2"
                    />
                </div>

                <div>
                    <label
                        htmlFor="brand"
                        className="block text-sm font-medium text-foreground"
                    >
                        Brand
                    </label>

                    <input
                        id="brand"
                        name="brand"
                        type="text"
                        className="mt-1 w-full rounded-lg border border-gray-300 px-3 py-2"
                    />
                </div>

                <div>
                    <label
                        htmlFor="tags"
                        className="block text-sm font-medium text-foreground"
                    >
                        Tags
                    </label>

                    <input
                        id="tags"
                        name="tags"
                        type="text"
                        placeholder="e.g. beauty, mascara"
                        className="mt-1 w-full rounded-lg border border-gray-300 px-3 py-2"
                    />
                </div>

            </div>
        </section>
    );
}
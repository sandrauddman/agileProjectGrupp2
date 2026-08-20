import type { Product } from '@/app/types';

type Props = {
    product?: Product;
};

export default function ProductMediaForm({ product }: Props) {

    return (
        <section className="grid gap-5">
            <div>
                <label htmlFor="thumbnail" className="block text-sm font-medium text-foreground">Thumbnail</label>
                <input
                    type="text"
                    name="thumbnail"
                    id="thumbnail"
                    placeholder="add URL for small picture"
                    defaultValue={product?.thumbnail ?? ''}
                    className="mt-1 w-full rounded-lg border border-gray-300 px-3 py-2"
                />
            </div>
            <div>
                <label htmlFor="images" className="block text-sm font-medium text-foreground">Images</label>
                <input
                    type="text"
                    name="images"
                    id="images"
                    placeholder="add URL's for images. Separate by comma. "
                    defaultValue={product?.images?.join(', ') ?? ''}
                    className="mt-1 w-full rounded-lg border border-gray-300 px-3 py-2"
                />
            </div>
            <fieldset>
                <legend className="mb-5 font-semibold">
                    Dimensions (optional)
                </legend>
                <div className="grid grid-cols-1 gap-4 sm:grid-cols-3">
                    {/* Height */}
                    <div>
                        <label htmlFor="height" className="mb-2 block text-sm font-medium text-gray-700">
                            Height cm
                        </label>
                        <input
                            id="height"
                            type="number"
                            min="0"
                            placeholder="0"
                            defaultValue={product?.dimensions?.height ?? ''}
                            className="w-full rounded-lg border border-gray-300 px-3 py-2 text-sm text-gray-900 outline-none transition placeholder:text-gray-400 focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20"
                        />
                    </div>

                    {/* Width */}
                    <div>
                        <label htmlFor="width" className="mb-2 block text-sm font-medium text-gray-700">
                            Width cm
                        </label>

                        <input
                            id="width"
                            type="number"
                            min="0"
                            placeholder="0"
                            defaultValue={product?.dimensions?.width ?? ''}
                            className="w-full rounded-lg border border-gray-300 px-3 py-2 text-sm text-gray-900 outline-none transition placeholder:text-gray-400 focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20"
                        />
                    </div>

                    {/* Depth */}
                    <div>
                        <label htmlFor="depth" className="mb-2 block text-sm font-medium text-gray-700">
                            Depth cm
                        </label>

                        <input
                            id="depth"
                            type="number"
                            min="0"
                            placeholder="0"
                            defaultValue={product?.dimensions?.depth ?? ''}
                            className="w-full rounded-lg border border-gray-300 px-3 py-2 text-sm text-gray-900 outline-none transition placeholder:text-gray-400 focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20"
                        />
                    </div>
                </div>

            </fieldset>



        </section>
    )
}
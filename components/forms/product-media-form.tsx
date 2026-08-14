


export default function ProductMediaForm() {

    return (
        <section className="grid gap-5">
            <div>
                <label htmlFor="thumbnail" className="block text-sm font-medium text-foreground">Thumbnail</label>
                <input 
                    type="text" 
                    name="thumbnail" 
                    id="thumbnail" 
                    placeholder="add URL for small picture" 
                    className="border-1 border-zinc-200 rounded-sm p-2 w-full" 
                />
            </div>
            <div>
                <label htmlFor="images" className="block text-sm font-medium text-foreground">Images</label>
                <input
                    type="text"
                    name="images"
                    id="images"
                    placeholder="add URL's for images. Separate by comma. "
                    className="border-1 border-zinc-200 rounded-sm p-2 w-full"
                />
            </div>
        </section>
    )
}
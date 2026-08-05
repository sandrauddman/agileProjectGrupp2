//Services
import ProductService from "@/services/product-service";

//Components
import ProductListComponent from "@/components/product-list";

export default async function Home() {
  //Call Product Service for API Call
  const products = await ProductService.getProducts();

  return (
    <main>
      <div className="mt-5">
        <ProductListComponent products={products} />
      </div>
    </main>
  );
}

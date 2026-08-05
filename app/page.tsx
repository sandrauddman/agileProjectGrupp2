//Services
import ProductService from "@/services/product-service";

//Components
import ProductListComponent from "@/components/product-list";

export default async function Home() {
  //Call Product Service for API Call
  const products = await ProductService.getProducts();

  return (
    <main className="min-h-screen bg-gray-50">
      <div className="max-w-7xl mx-auto px-6">
        {/*Header Component */}

        {/*Inventory statics contianer*/}

        {/*Inventory statics contianer*/}

        <div className="mt-5">
          <ProductListComponent products={products} />
        </div>
      </div>
    </main>
  );
}

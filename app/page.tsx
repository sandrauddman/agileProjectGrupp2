//Services
import ProductService from "@/services/product-service";

//Components
import ProductListComponent from "@/components/product-list";

export default async function Home() {
  //Call Product Service for API Call
  const response = await ProductService.getProducts();
  const products = response.products;
  console.log(response);

  return (
    <main className="min-h-screen bg-gray-50">
      <div className="container max-w-7xl mx-auto px-6">
        {/*Header Component */}

        {/*Inventory statics Component*/}

        {/*SEARCH  Component*/}

        <section className="mt-5">
          <ProductListComponent
            products={products}
            currentPage={response.page}
            totalPage={response.pages}
          />
        </section>
      </div>
    </main>
  );
}

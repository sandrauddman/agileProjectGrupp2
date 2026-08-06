//Services
import ProductService from '@/services/product-service';

//Components
import ProductListComponent from '@/components/product-list';

import InventoryStatistics from '@/components/inventory-statistics';

type PageProps = {
  searchParams: Promise<{
    page?: string;
  }>;
};

export default async function Home({ searchParams }: PageProps) {
  const params = await searchParams;

  //Set default current page to 1 if params.page is undefined.
  const currentPage = Number(params.page ?? '1');

  //Call Product Service for API Call
  const response = await ProductService.getProducts(currentPage);
  const products = response.products;

  return (
    <main className="min-h-screen bg-gray-50">
      <div className="container max-w-7xl mx-auto px-6">
        {/*Header Component */}

        <InventoryStatistics />

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
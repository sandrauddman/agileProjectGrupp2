//Services
import ProductService from '@/services/product-service';
import CategoryService from '@/services/category-service';

//Components
import ProductListComponent from '@/components/product-list';
import Header from '@/components/header';
import InventoryStatistics from '@/components/inventory-statistics';
import SearchForm from '@/components/search-form';
import { Category } from './types';

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

  //Call Category Service for API CALL
  const categoryResponse = await CategoryService.getAllCategories();
  const categories: Category[] = categoryResponse.success ? categoryResponse.categories : [];

  return (
    <main className="min-h-screen bg-gray-50">
      <Header />

      <div className="container max-w-7xl mx-auto px-6 py-6">
        <InventoryStatistics />
        <SearchForm categories={categories} />
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

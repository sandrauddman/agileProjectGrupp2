//Services
import ProductService from '@/services/product-service';
import CategoryService from '@/services/category-service';

//Components
import ProductListComponent from '@/components/product-list';
import Header from '@/components/header';
import InventoryStatistics from '@/components/inventory-statistics';
import SearchForm from '@/components/search-form';
import { Category, Product } from './types';
import { Suspense } from 'react';
import LoadingSpinner from '@/app/loading';

type PageProps = {
  searchParams: Promise<{
    page?: string;
    category?: string;
    stock?: string;
  }>;
};

export default async function Home({ searchParams }: PageProps) {
  const params = await searchParams;

  //Set default current page to 1 if params.page is undefined.
  const currentPage = Number(params.page ?? '1');

  //Filter on category with params
  const categoryParams = params.category ?? '';

  //Filter on stock with params
  const stockParams = params.stock ?? '';

  //Call Product Service for API Call
  const productResponse = await ProductService.getProducts(currentPage, categoryParams, stockParams);
  const products: Product[] = productResponse.success ? productResponse.data.products : [];

  //Call Category Service for API CALL
  const categoryResponse = await CategoryService.getAllCategories();
  const categories: Category[] = categoryResponse.success ? categoryResponse.data.categories : [];

  return (
    <main className="min-h-screen bg-gray-50">
      <Header categories={categories} />

      <div className="container max-w-7xl mx-auto px-6 py-6">
        <InventoryStatistics />

        <SearchForm categories={categories} selectedCategory={categoryParams} selectedStock={stockParams} />
        <section className="mt-5">
          <ProductListComponent
            products={products}
            categories={categories}
            categoryParam={categoryParams}
            stockParam={stockParams}
            currentPage={productResponse.success ? productResponse.data.page : currentPage}
            totalPage={productResponse.success ? productResponse.data.pages : 0}
          />
        </section>
      </div>
    </main>
  );
}

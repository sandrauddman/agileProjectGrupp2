//Services
import ProductService from '@/services/product-service';
import CategoryService from '@/services/category-service';

//Components
import ProductListComponent from '@/components/product-list';
import Header from '@/components/header';
import InventoryStatistics from '@/components/inventory-statistics';
import SearchForm from '@/components/search-form';

type PageProps = {
  searchParams: Promise<{
    page?: string;
    category?: string;
    stock?: string;
    search?: string;
  }>;
};

export default async function Home({ searchParams }: PageProps) {
  const params = await searchParams;

  //Set default current page to 1 if params.page is undefined.
  const currentPage = Number(params.page ?? '1');

  //Filter on category with params
  const categoryParams = params.category ?? '';

  const queryParams = params.search ?? '';

  //Filter on stock with params
  const stockParams = params.stock ?? '';

  const [productResponse, categoryResponse] = await Promise.all([
    ProductService.getProducts(currentPage, categoryParams, stockParams, queryParams),
    CategoryService.getAllCategories(),
  ]);

  const products = productResponse.success ? productResponse.data.products : [];
  const categories = categoryResponse.success ? categoryResponse.data.categories : [];
  const pages = productResponse.success ? productResponse.data.pages : 0;

  return (
    <main className="min-h-screen bg-gray-50">
      <Header categories={categories} />

      <div className="container max-w-7xl mx-auto px-6 py-6">
        <InventoryStatistics />

        <SearchForm categories={categories} selectedCategory={categoryParams} selectedStock={stockParams} />

        <ProductListComponent
          products={products}
          categories={categories}
          categoryParam={categoryParams}
          stockParam={stockParams}
          queryParam={queryParams}
          currentPage={currentPage}
          totalPage={pages}
        />
      </div>
    </main>
  );
}

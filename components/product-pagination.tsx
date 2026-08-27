import { ChevronLeft, ChevronRight } from 'lucide-react';
import Link from 'next/link';

type Props = {
  currentPage: number;
  totalPages: number;
  categoryParam?: string;
  stockParam?: string;
  queryParam?: string;
};

export default function ProductPagination({ currentPage, totalPages, categoryParam, stockParam, queryParam }: Props) {
  return (
    <nav aria-label="Product pagination" className="flex justify-center border-t border-gray-200 px-6 py-5">
      <div className="flex items-center gap-2">
        {/* Previous page */}
        {currentPage > 1 && (
          <Link
            aria-label="Previous page"
            className="flex h-10 w-10 items-center justify-center rounded-md border border-gray-300 bg-white text-gray-600 hover:bg-gray-100"
            href={`/?page=${currentPage - 1}&category=${categoryParam}&stock=${stockParam}&search=${queryParam}`}
          >
            <ChevronLeft size={18} aria-hidden="true" />
          </Link>
        )}

        {/* First page */}
        {currentPage > 1 && (
          <Link
            aria-label="Page 1"
            href={`/?page=1&category=${categoryParam}&stock=${stockParam}&search=${queryParam}`}
            className="flex h-10 w-10 items-center justify-center rounded-md border border-gray-300 bg-white text-gray-600 hover:bg-gray-100"
          >
            1
          </Link>
        )}

        {/* Current page */}
        <span aria-current="page" className="flex h-10 w-10 items-center justify-center rounded-md bg-gray-700 font-medium text-white">
          {currentPage}
        </span>

        {/* Current page + 1 */}
        {currentPage + 1 <= totalPages && (
          <Link
            aria-label={`Page ${currentPage + 1}`}
            href={`/?page=${currentPage + 1}&category=${categoryParam}&stock=${stockParam}&search=${queryParam}`}
            className="flex h-10 w-10 items-center justify-center rounded-md border border-gray-300 bg-white text-gray-700 hover:bg-gray-100"
          >
            {currentPage + 1}
          </Link>
        )}

        {/* Current page + 2 */}
        {currentPage + 2 <= totalPages && (
          <Link
            aria-label={`Page ${currentPage + 2}`}
            href={`/?page=${currentPage + 2}&category=${categoryParam}&stock=${stockParam}&search=${queryParam}`}
            className="flex h-10 w-10 items-center justify-center rounded-md border border-gray-300 bg-white text-gray-700 hover:bg-gray-100"
          >
            {currentPage + 2}
          </Link>
        )}

        {/* Last page */}
        {currentPage + 2 < totalPages && (
          <Link
            aria-label={`Page ${totalPages}`}
            href={`/?page=${totalPages}&category=${categoryParam}&stock=${stockParam}&search=${queryParam}`}
            className="flex h-10 w-10 items-center justify-center rounded-md border border-gray-300 bg-white text-gray-700 hover:bg-gray-100"
          >
            {totalPages}
          </Link>
        )}

        {/* Next page */}
        {currentPage < totalPages && (
          <Link
            aria-label="Next page"
            href={`/?page=${currentPage + 1}&category=${categoryParam}&stock=${stockParam}&search=${queryParam}`}
            className="flex h-10 w-10 items-center justify-center rounded-md border border-gray-300 bg-white text-gray-600 hover:bg-gray-100"
          >
            <ChevronRight size={18} aria-hidden="true" />
          </Link>
        )}
      </div>
    </nav>
  );
}

import { ChevronLeft, ChevronRight } from 'lucide-react';
import Link from 'next/link';

type Props = {
  currentPage: number;
  totalPages: number;
};

export default function ProductPagination({ currentPage, totalPages }: Props) {
  return (
    <div className="flex justify-end border-t border-gray-200 px-6 py-5">
      <div className="flex items-center gap-2">
        {/*Left arrow */}
        {currentPage > 1 && (
          <Link
            className="flex h-10 w-10 items-center justify-center rounded-md border border-gray-300 bg-white text-gray-600 hover:bg-gray-100"
            href={`/?page=${currentPage - 1}`}
          >
            <ChevronLeft size={18} />
          </Link>
        )}

        {/*Current Page*/}
        <button className="flex h-10 w-10 items-center justify-center rounded-md bg-gray-700 text-white font-medium">
          {currentPage}
        </button>

        {/*Number Current page + 1 */}
        {currentPage + 1 <= totalPages && (
          <Link
            href={`/?page=${currentPage + 1}`}
            className="flex h-10 w-10 items-center justify-center rounded-md border border-gray-300 bg-white text-gray-700 hover:bg-gray-100"
          >
            {currentPage + 1}
          </Link>
        )}

        {/*Number Current page + 2 */}
        {currentPage + 2 <= totalPages && (
          <Link
            href={`/?page=${currentPage + 2}`}
            className="flex h-10 w-10 items-center justify-center rounded-md border border-gray-300 bg-white text-gray-700 hover:bg-gray-100"
          >
            {currentPage + 2}
          </Link>
        )}

        {/*Number of total page */}
        {currentPage + 1 <= totalPages && (
          <Link
            href={`/?page=${totalPages}`}
            className="flex h-10 w-10 items-center justify-center rounded-md border border-gray-300 bg-white text-gray-700 hover:bg-gray-100"
          >
            {totalPages}
          </Link>
        )}

        {/*Right arrow */}
        <Link
          href={`/?page=${currentPage + 1}`}
          className="flex h-10 w-10 items-center justify-center rounded-md border border-gray-300 bg-white text-gray-600 hover:bg-gray-100"
        >
          <ChevronRight size={18} />
        </Link>
      </div>
    </div>
  );
}

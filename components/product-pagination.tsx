import { ChevronLeft, ChevronRight } from "lucide-react";
import Link from "next/link";

type Props = {
  currentPage: number;
  totalPages: number;
};

export default function ProductPagination({ currentPage, totalPages }: Props) {
  return (
    <div className="flex justify-end border-t border-gray-200 px-6 py-5">
      <div className="flex items-center gap-2">
        {currentPage > 1 && (
          <Link
            className="flex h-10 w-10 items-center justify-center rounded-md border border-gray-300 bg-white text-gray-600 hover:bg-gray-100"
            href={`/?page=${currentPage - 1}`}
          >
            <ChevronLeft size={18} />
          </Link>
        )}

        <button className="flex h-10 w-10 items-center justify-center rounded-md bg-gray-700 text-white font-medium">
          {currentPage}
        </button>
        <Link
          href={`/?page=${currentPage + 1}`}
          className="flex h-10 w-10 items-center justify-center rounded-md border border-gray-300 bg-white text-gray-700 hover:bg-gray-100"
        >
          {currentPage + 1}
        </Link>
        <Link
          href={`/?page=${currentPage + 2}`}
          className="flex h-10 w-10 items-center justify-center rounded-md border border-gray-300 bg-white text-gray-700 hover:bg-gray-100"
        >
          {currentPage + 2}
        </Link>
        <span className="px-2 text-gray-500">...</span>
        <button className="flex h-10 w-10 items-center justify-center rounded-md border border-gray-300 bg-white text-gray-700 hover:bg-gray-100">
          {totalPages}
        </button>
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

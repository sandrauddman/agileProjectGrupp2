import { ChevronLeft, ChevronRight } from "lucide-react";

type Props = {
  currentPage: number;
  totalPages: number;
};

export default function ProductPagination({ currentPage, totalPages }: Props) {
  return (
    <div className="flex justify-end border-t border-gray-200 px-6 py-5">
      <div className="flex items-center gap-2">
        <button className="flex h-10 w-10 items-center justify-center rounded-md border border-gray-300 bg-white text-gray-600 hover:bg-gray-100">
          <ChevronLeft size={18} />
        </button>
        <button className="flex h-10 w-10 items-center justify-center rounded-md bg-gray-700 text-white font-medium">
          1
        </button>
        <button className="flex h-10 w-10 items-center justify-center rounded-md border border-gray-300 bg-white text-gray-700 hover:bg-gray-100">
          2
        </button>
        <button className="flex h-10 w-10 items-center justify-center rounded-md border border-gray-300 bg-white text-gray-700 hover:bg-gray-100">
          3
        </button>
        <span className="px-2 text-gray-500">...</span>
        <button className="flex h-10 w-10 items-center justify-center rounded-md border border-gray-300 bg-white text-gray-700 hover:bg-gray-100">
          {totalPages}
        </button>
        <button className="flex h-10 w-10 items-center justify-center rounded-md border border-gray-300 bg-white text-gray-600 hover:bg-gray-100">
          <ChevronRight size={18} />
        </button>
      </div>
    </div>
  );
}

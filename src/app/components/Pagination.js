import React from "react";

const Pagination = ({ totalPages, currentPage, onPageChange, loading }) => {
  // If there is only one page or no pages, do not render the pagination component.
  if (totalPages <= 1) return null;

  // Define the maximum number of page buttons to display at once.
  const maxVisiblePages = 5;

  // Calculate the range of page numbers to display.
  const startPage = Math.max(1, currentPage - Math.floor(maxVisiblePages / 2));
  const endPage = Math.min(totalPages, startPage + maxVisiblePages - 1);

  // Adjust the start page if the end page is at the upper limit.
  const adjustedStartPage = Math.max(1, endPage - maxVisiblePages + 1);

  // Create an array of visible page numbers.
  const visiblePages = Array.from(
    { length: endPage - adjustedStartPage + 1 },
    (_, index) => adjustedStartPage + index
  );

  return (
    <div className="relative mt-6"> {/* Wrapper for spinner overlay */}
      {/* Overlay spinner when loading */}
      {loading && (
        <div className="absolute inset-0 flex items-center justify-center bg-gray-500 bg-opacity-50 z-10">
          <div className="w-8 h-8 border-4 border-t-4 border-t-blue-500 border-white rounded-full animate-spin"></div>
        </div>
      )}

      {/* Pagination controls */}
      <div className="text-left flex items-center space-x-2">
        {/* First Page Button */}
        <button
          onClick={() => onPageChange(1)}
          disabled={currentPage === 1}
          className={`px-3 py-1 border ${
            currentPage === 1 ? "text-gray-400 cursor-not-allowed" : "text-black"
          }`}
        >
          First
        </button>

        {/* Previous Page Button */}
        <button
          onClick={() => onPageChange(currentPage - 1)}
          disabled={currentPage === 1}
          className={`px-3 py-1 border ${
            currentPage === 1 ? "text-gray-400 cursor-not-allowed" : "text-black"
          }`}
        >
          Prev
        </button>

        {/* Page Number Buttons */}
        {visiblePages.map((page) => (
          <button
            key={page}
            onClick={() => onPageChange(page)}
            className={`px-3 py-1 border ${
              currentPage === page
                ? "bg-blue-500 text-white" // Active page styling.
                : "bg-white text-black" // Inactive page styling.
            }`}
          >
            {page}
          </button>
        ))}

        {/* Next Page Button */}
        <button
          onClick={() => onPageChange(currentPage + 1)}
          disabled={currentPage === totalPages}
          className={`px-3 py-1 border ${
            currentPage === totalPages ? "text-gray-400 cursor-not-allowed" : "text-black"
          }`}
        >
          Next
        </button>

        {/* Last Page Button */}
        <button
          onClick={() => onPageChange(totalPages)}
          disabled={currentPage === totalPages}
          className={`px-3 py-1 border ${
            currentPage === totalPages ? "text-gray-400 cursor-not-allowed" : "text-black"
          }`}
        >
          Last
        </button>
      </div>
    </div>
  );
};

export default Pagination;

import React from "react";

const PaginationPage = ({
  onPageChange,
  currentPage,
  totalBlogs,
  pagesize,
}) => {
  // Calculate total pages
  const totalPages = Math.ceil(totalBlogs / pagesize);

  // Create an array of page numbers
  const pageNumbers = [];
  for (let i = 1; i <= totalPages; i++) {
    pageNumbers.push(i);
  }

  // Helper function to render pagination
  const renderPagination = () => {
    const items = [];

    // Previous Button
    items.push(
      <button
        key="prev"
        onClick={() => onPageChange(currentPage - 1)}
        disabled={currentPage === 1}
        className={`px-4 py-2 rounded transition-colors duration-300 
          ${currentPage === 1 ? "text-gray-400 cursor-not-allowed" : "text-black cursor-pointer hover:text-orange-500"}`}
      >
        &lt; Previous
      </button>
    );

    // Page Numbers
    pageNumbers.forEach((page) => {
      items.push(
        <button
          key={page}
          onClick={() => onPageChange(page)}
          className={`mx-1 px-2 py-1 rounded transition-colors duration-300 
            ${page === currentPage ? "bg-orange-500 text-white" : "bg-white text-black hover:bg-gray-100"}`}
        >
          {page}
        </button>
      );
    });

    // Next Button
    items.push(
      <button
        key="next"
        onClick={() => onPageChange(currentPage + 1)}
        disabled={currentPage === totalPages}
        className={`px-4 py-2 rounded transition-colors duration-300 
          ${currentPage === totalPages ? "text-gray-400 cursor-not-allowed" : "text-black cursor-pointer hover:text-orange-500"}`}
      >
        Next &gt;
      </button>
    );

    return items;
  };

  return (
    <div className="flex flex-wrap items-center justify-center mt-4 mb-6">
      {renderPagination()}
    </div>
  );
};

export default PaginationPage;

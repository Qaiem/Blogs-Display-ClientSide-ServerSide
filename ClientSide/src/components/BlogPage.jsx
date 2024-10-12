import React, { useEffect, useState } from "react";
import BlogCards from './BlogCards';
import PaginationPage from "./PaginationPage";
import CategorySelection from "./CategorySelection";
import Sidebars from "./Sidebars";

const BlogPage = () => {
  const [blogs, setBlogs] = useState([]);
  const [totalBlogs, setTotalBlogs] = useState(0);  // Total number of blogs for pagination
  const [currentPage, setCurrentPage] = useState(1);
  const pagesize = 12;
  const [selectedCategory, setSelectedCategory] = useState(null);
  const [activeCategory, setActiveCategory] = useState(null);

  useEffect(() => {
    async function fetchBlogs() {
      let url = `http://localhost:5000/blogs?page=${currentPage}&limit=${pagesize}`;
  
      if (selectedCategory) {
        url += `&category=${selectedCategory}`;
      }
  
      try {
        const response = await fetch(url);
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        const data = await response.json();
        console.log("Fetched blogs:", data); // Log the fetched data
        setBlogs(data);
      } catch (error) {
        console.error('Failed to fetch blogs:', error);
      }
    }
  
    fetchBlogs(); // Call the function to fetch blogs
  }, [currentPage, pagesize, selectedCategory]);
  

  // Handle page change
  const handlePageChange = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  // Handle category change
  const handleCategoryChange = (category) => {
    setSelectedCategory(category);
    setCurrentPage(1);  // Reset to first page when category changes
    setActiveCategory(category);
  };

  return (
    <div>
      {/* Category Section */}
      <div>
        <CategorySelection onSelectCategory={handleCategoryChange} selectedCategory={selectedCategory} activeCategory={activeCategory}/>
      </div>

      {/* Blog Cards Section */}
      <div className="flex flex-col lg:flex-row gap-12">
        <BlogCards blogs={blogs} currentPage={currentPage} selectedCategory={selectedCategory} pagesize={pagesize} />

        {/* {Side bar Section} */}
        <div className=""> 
            <Sidebars />
        </div>
      </div>

      {/* Pagination Section */}
      <div>
        <PaginationPage 
          onPageChange={handlePageChange} 
          currentPage={currentPage} 
          totalBlogs={blogs.length}  // Pass the total number of blogs
          pagesize={pagesize} 
        />
      </div>
    </div>
  );
};

export default BlogPage;

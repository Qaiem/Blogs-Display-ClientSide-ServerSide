import { useEffect, useState } from "react";
import BlogCards from './BlogCards';
import PaginationPage from "./PaginationPage";
import CategorySelection from "./CategorySelection";
import Sidebars from "./Sidebars";

const BlogPage = () => {
  const [blogs, setBlogs] = useState([]);
  const [totalBlogs , setTotalBlogs] = useState(0);  // Total number of blogs for pagination
  const [currentPage, setCurrentPage] = useState(1);
  const pageSize = 12;
  const [selectedCategory, setSelectedCategory] = useState(null);
  const [activeCategory, setActiveCategory] = useState(null);

  useEffect(() => {
    async function fetchBlogs() {
      let url = `http://localhost:5000/blogs?page=${currentPage}&limit=${pageSize}`;
  
      if (selectedCategory) {
        url += `&category=${selectedCategory}`;
      }
  
      try {
        const response = await fetch(url);
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        const data = await response.json();
        // console.log("Fetched blogs:", data); // Log the fetched data
        
        // Adjust based on your API response structure
        setBlogs(data || []);  // Use 'data.blogs' if your API response has a 'blogs' field
        setTotalBlogs(data.length); // Use the correct field for total number of blogs
        
      } catch (error) {
        console.error('Failed to fetch blogs:', error);
      }
    }
    
    fetchBlogs(); // Call the function to fetch blogs
  }, [currentPage, pageSize, selectedCategory]);
  
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
        <CategorySelection onSelectCategory={handleCategoryChange} selectedCategory={selectedCategory} activeCategory={activeCategory} />
      </div>

      {/* Blog Cards Section */}
      <div className="flex flex-col lg:flex-row gap-12">
        {blogs.length === 0 ? (
          <p>No blogs available.</p>
        ) : (
          <BlogCards blogs={blogs} currentPage={currentPage} selectedCategory={selectedCategory} pagesize={pageSize} />
        )}

        {/* Side bar Section */}
        <div>
          <Sidebars />
        </div>
      </div>

      {/* Pagination Section */}
      <div>
        <PaginationPage 
          onPageChange={handlePageChange} 
          currentPage={currentPage} 
          totalBlogs={totalBlogs}  // Pass the total number of blogs
          pageSize={pageSize} 
        />
      </div>
    </div>
  );
};

export default BlogPage;
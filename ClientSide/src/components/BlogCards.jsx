import React from 'react';
import { FaUser } from 'react-icons/fa6';
import { Link } from 'react-router-dom';

const BlogCards = ({ blogs, currentPage, selectedCategory, pagesize }) => {
  // Ensure blogs is defined and is an array before filtering
  const blogsFilter = (blogs && Array.isArray(blogs) ? blogs : [])
    .filter((blog) => !selectedCategory || blog.category === selectedCategory)
    .slice((currentPage - 1) * pagesize, currentPage * pagesize);

  return (
    <div className="max-w-screen-lg mx-auto px-4 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"> 
      {blogsFilter.length === 0 ? ( 
        <div className="col-span-full text-center">No blogs available</div>
      ) : (
        blogsFilter.map((blog) => (
          <Link 
            key={blog.id} 
            to={`/blogs/${blog.id}`} 
            className="block border border-gray-200 p-2 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300 h-full"
          > 
            <div>
              <img 
                src={blog.image} 
                alt={blog.title} 
                className="w-full h-50 object-cover rounded" // Adjusted height
              /> 
            </div>
            <h3 className="mt-2 mb-1 text-base font-semibold hover:text-blue-600 transition-colors cursor-pointer">
              {blog.title}
            </h3>
            <p className="text-sm text-gray-600 mb-1 flex items-center">
              <FaUser className="mr-1 text-gray-500" />
              {blog.author}
            </p>
            <p className="text-xs text-gray-500">Published: {blog.published_date}</p>
          </Link>
        ))
      )}
    </div>
  );
};

export default BlogCards;

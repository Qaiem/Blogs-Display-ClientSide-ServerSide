import { useEffect, useState } from "react";
import { FaArrowRight } from "react-icons/fa6";
import { Link } from "react-router-dom";

const Sidebar = () => {
  const [popularblogs, setPopularBlogs] = useState([]);

  useEffect(() => {
    fetch("http://localhost:5000/blogs")
      .then((res) => res.json())
      .then((data) => setPopularBlogs(data.slice(0, 15)));
  }, []);

  return (
    <div className="bg-white shadow-lg rounded-lg p-6 w-64">
      {/* Latest Blog Section */}
      <div className="mb-8">
        <h3 className="text-xl font-bold text-gray-800 mb-4 border-b pb-2">Latest Blogs</h3>
        {popularblogs.slice(0, 5).map((blog) => (
          <div key={blog.id} className="mb-6">
            <h4 className="font-semibold text-gray-700 mb-1">{blog.title}</h4>
            <Link
              to="/"
              className="text-orange-500 text-sm flex items-center hover:text-orange-600 transition-colors duration-200"
            >
              Read more <FaArrowRight className="ml-2" />
            </Link>
          </div>
        ))}
      </div>

      {/* Popular Blogs Section */}
      <div>
        <h3 className="text-xl font-bold text-gray-800 mb-4 border-b pb-2 mt-10">Popular Blogs</h3>
        {popularblogs.slice(6, 10).map((blog) => (
          <div key={blog.id} className="mb-6">
            <h4 className="font-semibold text-gray-700 mb-1">{blog.title}</h4>
            <Link
              to="/"
              className="text-orange-500 text-sm flex items-center hover:text-orange-600 transition-colors duration-200"
            >
              Read more <FaArrowRight className="ml-2" />
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Sidebar;

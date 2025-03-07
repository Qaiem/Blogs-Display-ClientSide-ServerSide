import { FaClock, FaUser } from "react-icons/fa";
import { useLoaderData } from "react-router-dom";
import Sidebars from "../components/Sidebars";

const SingleBlogs = () => {
  const data = useLoaderData();
  // console.log("Loaded Blog Data:", data);
  // console.log("Type of data:", typeof data);
  // console.log("Is data an array?", Array.isArray(data));
  // console.log("First item in data:", data?.[0]);

  const {
    image,
    category,
    published_date,
    author,
    reading_time,
    content,
    title,
  } = data;

  return (
    <div className="container mx-auto my-8 p-4 sm:p-6 lg:p-8 bg-white shadow-lg rounded">
      <div className="flex flex-col lg:flex-row lg:space-x-8">
        {/* Main Blog Content */}
        <div className="lg:w-3/4">
          {/* Image on Top */}
          <div className="flex justify-center mb-4">
            <img
              src={image}
              alt={title}
              className="w-full sm:w-3/4 lg:w-[95%] h-auto rounded-lg shadow-md mt-10"
            />
          </div>

          {/* Title and Author Info */}
          <h1 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold mb-4 mt-4 text-center lg:text-left">
            {title}
          </h1>
          <p className="text-gray-600 mb-2 flex items-center justify-center lg:justify-start text-xs sm:text-sm md:text-base lg:text-lg">
            <FaUser className="mr-1 text-xs sm:text-sm md:text-base lg:text-lg" />{" "}
            {author} on {new Date(published_date).toLocaleDateString()} |{" "}
            <FaClock className="mx-1 text-xs sm:text-sm md:text-base lg:text-lg" />{" "}
            {reading_time} read
          </p>

          {/* Blog Content */}
          <div className="text-gray-800 text-base md:text-lg lg:text-xl leading-relaxed space-y-4 text-center lg:text-left">
            <p>{content}</p>
            {Array.from({ length: 8 }, (_, index) => (
              <p key={index}>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Nam
                voluptatem facere ex, ullam esse, quos maiores repudiandae unde
                architecto accusamus vitae quia cumque cum deserunt totam
                necessitatibus. Aliquid, consequatur laudantium?
              </p>
            ))}
          </div>
          <p className="text-sm text-gray-500 mt-4 text-center lg:text-left">
            Category: {category}
          </p>
        </div>

        {/* Sidebar */}
        <div className="lg:w-1/4 mt-8 lg:mt-0">
          <Sidebars />
        </div>
      </div>
    </div>
  );
};

export default SingleBlogs;

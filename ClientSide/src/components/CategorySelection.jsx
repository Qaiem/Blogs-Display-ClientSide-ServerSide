import React from 'react';

const CategorySelection = ({ onSelectCategory, activeCategory }) => {
  const categories = ["Startups", "Security", "Apps", "AI", "Tech"];

  return (
    <div className="px-4 mb-8 py-5 border-b-2 text-gray-900 font-serif">
      <div className="flex flex-wrap justify-center gap-2"> {/* Centering the buttons */}
        {/* All Blogs Button */}
        <button
          onClick={() => onSelectCategory(null)} // Passing null to reset the selection
          className={`px-4 py-2 rounded border transition-colors duration-300 ${
            activeCategory === null
              ? 'bg-orange-500 text-black border-black'
              : 'bg-white text-black hover:bg-orange-400'
          }`}
        >
          All 
        </button>

        {/* Category Buttons */}
        {categories.map((category) => (
          <button
            key={category}
            onClick={() => onSelectCategory(category)}
            className={`px-4 py-2 rounded border transition-colors duration-300 ${
              activeCategory === category
                ? 'bg-orange-500 text-black border-black'
                : 'bg-white text-black hover:bg-orange-400'
            }`}
          >
            {category}
          </button>
        ))}
      </div>
    </div>
  );
};

export default CategorySelection;

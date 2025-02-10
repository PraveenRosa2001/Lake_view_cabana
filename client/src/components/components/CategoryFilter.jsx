import React from "react";
import PropTypes from "prop-types";

const CategoryFilter = ({ categories, selectedCategory, onCategoryChange }) => {
  return (
    <select
      value={selectedCategory}
      onChange={(e) => onCategoryChange(e.target.value)}
      className="p-2 border border-gray-300 dark:border-gray-700 dark:bg-gray-800 dark:text-white rounded-md w-full md:w-auto focus:outline-none focus:ring-2 focus:ring-blue-500 ml-0 mt-2 md:mt-0 md:ml-2"
    >
      {categories.map((category) => (
        <option key={category} value={category}>
          {category}
        </option>
      ))}
    </select>
  );
};

CategoryFilter.propTypes = {
  categories: PropTypes.arrayOf(PropTypes.string).isRequired,
  selectedCategory: PropTypes.string.isRequired,
  onCategoryChange: PropTypes.func.isRequired,
};

export default CategoryFilter;

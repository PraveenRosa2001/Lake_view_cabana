import React from "react";
import PropTypes from "prop-types";

const SearchBar = ({ searchTerm, onSearchChange }) => {
  return (
    <input
      type="text"
      placeholder="Search for food items..."
      value={searchTerm}
      onChange={(e) => onSearchChange(e.target.value)}
      className="p-2 border border-gray-300 dark:border-gray-700 rounded-md w-full md:w-auto focus:outline-none focus:ring-2 focus:ring-blue-500"
    />
  );
};

SearchBar.propTypes = {
  searchTerm: PropTypes.string.isRequired,
  onSearchChange: PropTypes.func.isRequired,
};

export default SearchBar;
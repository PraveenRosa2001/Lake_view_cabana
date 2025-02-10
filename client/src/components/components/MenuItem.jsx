import React from "react";
import PropTypes from "prop-types";

const MenuItem = ({ item, onOpenModal }) => {
  return (
    <div
      className={`bg-white dark:bg-gray-800 rounded-xl shadow-lg p-4 cursor-pointer hover:scale-105 transition-transform duration-200 ease-in-out ${
        !item.available ? "opacity-50" : ""
      }`}
      onClick={() => onOpenModal(item)}
    >
      <img
        src={item.image}
        alt={item.name}
        className="w-full h-40 object-cover rounded-md mb-2"
      />
      <h2 className="text-lg font-semibold">{item.name}</h2>
      <p className="text-gray-600 dark:text-gray-300">
        ${item.price.toFixed(2)}
      </p>
      {!item.available && <p className="text-red-500">Not Available</p>}
    </div>
  );
};

MenuItem.propTypes = {
  item: PropTypes.shape({
    id: PropTypes.number.isRequired,
    name: PropTypes.string.isRequired,
    price: PropTypes.number.isRequired,
    image: PropTypes.string.isRequired,
    available: PropTypes.bool.isRequired,
  }).isRequired,
  onOpenModal: PropTypes.func.isRequired,
};

export default MenuItem;
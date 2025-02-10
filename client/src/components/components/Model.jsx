import React from "react";
import PropTypes from "prop-types";

const Modal = ({ item, onClose, onAddToCart }) => {
  return (
    <div
      className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center"
      onClick={onClose}
    >
      <div
        className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-2xl w-full max-w-md transition-opacity duration-300 ease-in-out"
        onClick={(e) => e.stopPropagation()}
      >
        <img
          src={item.image}
          alt={item.name}
          className="w-full h-48 object-cover rounded-md mb-4"
        />
        <h2 className="text-2xl font-semibold mb-2">{item.name}</h2>
        <p className="text-gray-600 dark:text-gray-300 mb-2">
          ${item.price.toFixed(2)}
        </p>
        <p className="text-gray-700 dark:text-gray-200 mb-4">
          {item.description}
        </p>
        <p className="text-sm text-gray-500 dark:text-gray-400">
          Ingredients: {item.ingredients.join(", ")}
        </p>
        <div className="mt-4 flex justify-between">
          <button
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
            onClick={() => {
              onAddToCart(item);
              onClose();
            }}
          >
            Add to Cart
          </button>
          <button
            className="bg-gray-500 hover:bg-gray-700 text-white font-bold py-2 px-4 rounded"
            onClick={onClose}
          >
            Close
          </button>
        </div>
      </div>
    </div>
  );
};

Modal.propTypes = {
  item: PropTypes.shape({
    id: PropTypes.number.isRequired,
    name: PropTypes.string.isRequired,
    price: PropTypes.number.isRequired,
    image: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    ingredients: PropTypes.arrayOf(PropTypes.string).isRequired,
  }).isRequired,
  onClose: PropTypes.func.isRequired,
  onAddToCart: PropTypes.func.isRequired,
};

export default Modal;

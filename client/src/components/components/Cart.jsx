import React from "react";
import PropTypes from "prop-types";

const Cart = ({ cart, onRemoveFromCart }) => {
  const totalPrice = cart.reduce((acc, item) => acc + item.price, 0);

  return (
    <div className="absolute top-16 right-4 p-4 bg-white dark:bg-gray-800 rounded-xl shadow-lg w-80">
      <h2 className="text-2xl font-semibold mb-4">Shopping Cart</h2>
      {cart.length === 0 ? (
        <p>Your cart is empty.</p>
      ) : (
        <div>
          {cart.map((item) => (
            <div
              key={item.id}
              className="flex items-center justify-between border-b border-gray-200 dark:border-gray-700 py-2"
            >
              <span className="font-medium">{item.name}</span>
              <div className="flex items-center">
                <span className="text-gray-600 dark:text-gray-300 mr-4">
                  ${item.price.toFixed(2)}
                </span>
                <button
                  className="bg-red-500 hover:bg-red-700 text-white font-bold py-1 px-2 rounded"
                  onClick={() => onRemoveFromCart(item)}
                >
                  Remove
                </button>
              </div>
            </div>
          ))}
          <div className="mt-4">
            <span className="font-bold">Total:</span>{" "}
            <span className="text-green-600 dark:text-green-400">
              ${totalPrice.toFixed(2)}
            </span>
          </div>
        </div>
      )}
    </div>
  );
};

Cart.propTypes = {
  cart: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      name: PropTypes.string.isRequired,
      price: PropTypes.number.isRequired,
    })
  ).isRequired,
  onRemoveFromCart: PropTypes.func.isRequired,
};

export default Cart;
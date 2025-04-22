import React, { useMemo } from "react";
import { useSelector, useDispatch } from "react-redux";
import { addItem, removeItem, updateQuantity } from "../shoppingcart/cartSlice";

function ShoppingCart() {

    const cartItems = useSelector((state) => state.cart.cartItems);
    const dispatch = useDispatch();
  
    const totalQuantity = useMemo(() => {
      return cartItems.reduce((total, item) => total + item.quantity, 0);
    }, [cartItems]);
  
    const totalPrice = useMemo(() => {
      return cartItems.reduce((total, item) => total + item.quantity * item.price, 0);
    }, [cartItems]);
  
    const handleAddItem = () => {
      const randomId = Math.floor(Math.random() * 1000);
      dispatch(addItem({ id: randomId, name: `Product ${randomId}`, price: Math.floor(Math.random() * 100) + 1 }));
    };
  
    const handleUpdateQuantity = (id, quantity) => {
      if (quantity >= 1) {
        dispatch(updateQuantity({ id, quantity }));
      }
    };
  
  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100 p-4">
    <div className="bg-white p-6 rounded-lg shadow-lg w-full max-w-2xl">
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-2xl font-bold">Shopping Cart</h1>
        <button
          onClick={handleAddItem}
          className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 transition"
        >
          Add Random Item
        </button>
      </div>

      <ul className="space-y-4 mb-6">
        {cartItems.map((item) => (
          <li key={item.id} className="flex items-center justify-between p-4 bg-gray-50 rounded">
            <div className="flex-1">
              <h2 className="font-semibold">{item.name}</h2>
              <p className="text-sm text-gray-500">${item.price.toFixed(2)}</p>
            </div>

            <div className="flex items-center gap-2">
              <button
                onClick={() => handleUpdateQuantity(item.id, item.quantity - 1)}
                className="px-2 py-1 bg-gray-300 rounded"
              >
                -
              </button>
              <input
                type="number"
                min="1"
                value={item.quantity}
                onChange={(e) => handleUpdateQuantity(item.id, parseInt(e.target.value))}
                className="w-12 text-center border rounded"
              />
              <button
                onClick={() => handleUpdateQuantity(item.id, item.quantity + 1)}
                className="px-2 py-1 bg-gray-300 rounded"
              >
                +
              </button>
              <button
                onClick={() => dispatch(removeItem(item.id))}
                className="px-3 py-1 bg-red-500 text-white rounded hover:bg-red-600 transition"
              >
                Remove
              </button>
            </div>
          </li>
        ))}
      </ul>

      <div className="flex justify-between font-semibold text-lg">
        <div>Total Quantity: {totalQuantity}</div>
        <div>Total Price: ${totalPrice.toFixed(2)}</div>
      </div>
    </div>
  </div>
);
}

export default ShoppingCart
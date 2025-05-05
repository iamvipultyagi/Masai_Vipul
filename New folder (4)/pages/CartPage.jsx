import React from 'react';
import { useCart } from '../context/CartContext';
import { Link } from 'react-router-dom';

function CartPage() {
  const { cartItems, removeFromCart, updateQuantity, total } = useCart();

  return (
    <div className="p-4">
      <h2 className="text-2xl font-bold mb-4">Shopping Cart</h2>

      {cartItems.length === 0 ? (
        <p>Your cart is empty. <Link to="/">Go shopping</Link>.</p>
      ) : (
        <>
          <div className="space-y-4">
            {cartItems.map(item => (
              <div key={item.id} className="flex items-center border p-4 rounded gap-4">
                <img src={item.thumbnail} alt={item.title} className="w-20 h-20 object-cover rounded" />
                <div className="flex-1">
                  <p className="font-semibold">{item.title}</p>
                  <p className="text-sm text-gray-500">${item.price} x {item.quantity}</p>
                  <div className="mt-2">
                    <button
                      onClick={() => updateQuantity(item.id, item.quantity - 1)}
                      className="px-2 py-1 border rounded-l"
                    >-</button>
                    <span className="px-4">{item.quantity}</span>
                    <button
                      onClick={() => updateQuantity(item.id, item.quantity + 1)}
                      className="px-2 py-1 border rounded-r"
                    >+</button>
                    <button
                      onClick={() => removeFromCart(item.id)}
                      className="ml-4 text-red-600"
                    >
                      Remove
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-6 text-right">
            <p className="text-lg font-bold">Total: ${total.toFixed(2)}</p>
            <Link to="/checkout" className="inline-block mt-4 bg-green-600 text-white px-4 py-2 rounded">
              Proceed to Checkout
            </Link>
          </div>
        </>
      )}
    </div>
  );
}

export default CartPage;

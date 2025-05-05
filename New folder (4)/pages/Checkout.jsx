import { useCart } from "../context/CartContext";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

const Checkout = () => {
  const { cart, total } = useCart();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    address: "",
    paymentMethod: "Credit Card", // Default payment method
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const navigate = useNavigate();

  // Handle form data changes
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();

    // Basic validation
    if (!formData.name || !formData.email || !formData.address) {
      alert("Please fill in all required fields.");
      return;
    }

    setIsSubmitting(true);

    // Simulate an API request and redirect after submission
    setTimeout(() => {
      alert("Checkout successful! Thank you for your purchase.");
      navigate("/");
    }, 2000);
  };

  return (
    <div className="max-w-lg mx-auto p-4">
      <h2 className="text-2xl font-bold mb-6">Checkout</h2>

      {cart.length === 0 ? (
        <p>Your cart is empty. Please add items to the cart before proceeding.</p>
      ) : (
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label htmlFor="name" className="block text-sm font-semibold">
              Full Name
            </label>
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              required
              className="w-full p-2 border rounded-md"
            />
          </div>

          <div>
            <label htmlFor="email" className="block text-sm font-semibold">
              Email Address
            </label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
              className="w-full p-2 border rounded-md"
            />
          </div>

          <div>
            <label htmlFor="address" className="block text-sm font-semibold">
              Shipping Address
            </label>
            <textarea
              id="address"
              name="address"
              value={formData.address}
              onChange={handleChange}
              required
              className="w-full p-2 border rounded-md"
              rows="4"
            />
          </div>

          <div>
            <label htmlFor="paymentMethod" className="block text-sm font-semibold">
              Payment Method
            </label>
            <select
              id="paymentMethod"
              name="paymentMethod"
              value={formData.paymentMethod}
              onChange={handleChange}
              className="w-full p-2 border rounded-md"
            >
              <option value="Credit Card">Credit Card</option>
              <option value="PayPal">PayPal</option>
              <option value="Cash on Delivery">Cash on Delivery</option>
            </select>
          </div>

          <div className="my-4">
            <h3 className="font-semibold">Order Summary:</h3>
            <ul>
              {cart.map((item) => (
                <li key={item.id} className="flex justify-between">
                  <span>{item.title} (x{item.qty})</span>
                  <span>₹{item.price * item.qty}</span>
                </li>
              ))}
            </ul>
            <div className="flex justify-between mt-2 font-semibold">
              <span>Total:</span>
              <span>₹{total}</span>
            </div>
          </div>

          <button
            type="submit"
            disabled={isSubmitting}
            className={`w-full p-2 bg-blue-600 text-white rounded-md ${
              isSubmitting ? "opacity-50 cursor-not-allowed" : ""
            }`}
          >
            {isSubmitting ? "Processing..." : "Place Order"}
          </button>
        </form>
      )}
    </div>
  );
};

export default Checkout;

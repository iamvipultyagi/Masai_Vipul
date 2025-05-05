<nav>
  <Link to="/">Home</Link>
  <Link to="/cart">Cart ({cart.length})</Link>
  <Link to="/categories">Categories</Link>
</nav>
import { useCart } from '../context/CartContext';
import { Link } from 'react-router-dom';

const { cartItems } = useCart();

<Link to="/cart" className="relative">
  🛒
  {cartItems.length > 0 && (
    <span className="absolute top-0 right-0 bg-red-600 text-white rounded-full text-xs px-2">
      {cartItems.length}
    </span>
  )}
</Link>

import { Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import ProductDetails from './pages/ProductDetails';
import Cart from './pages/Cart';
import Checkout from './pages/Checkout';
import Categories from './pages/Categories';
import Header from './components/Header';
import { CartProvider } from './contexts/CartContext';

function App() {
  return (
    <CartProvider>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/product/:id" element={<ProductDetails />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/checkout" element={<Checkout />} />
        <Route path="/categories" element={<Categories />} />
      </Routes>
    </CartProvider>
  );
}
import CartPage from './pages/CartPage';

<Route path="/cart" element={<CartPage />} />


export default App;

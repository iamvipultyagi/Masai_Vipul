import { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import ProductCard from "../components/ProductCard";

const Categories = () => {
  const [categories, setCategories] = useState([]);
  const [selected, setSelected] = useState("");
  const [products, setProducts] = useState([]);
  const [loadingCategories, setLoadingCategories] = useState(true);
  const [loadingProducts, setLoadingProducts] = useState(false);

  // Fetch all categories
  useEffect(() => {
    const fetchCategories = async () => {
      try {
        const res = await axios.get("https://dummyjson.com/products/categories");
        setCategories(res.data);
      } catch (err) {
        console.error("Error fetching categories:", err);
      } finally {
        setLoadingCategories(false);
      }
    };
    fetchCategories();
  }, []);

  // Fetch products by selected category
  useEffect(() => {
    const fetchProductsByCategory = async () => {
      if (!selected) return;
      setLoadingProducts(true);
      try {
        const res = await axios.get(`https://dummyjson.com/products/category/${selected}`);
        setProducts(res.data.products);
      } catch (err) {
        console.error("Error fetching products for category:", err);
      } finally {
        setLoadingProducts(false);
      }
    };
    fetchProductsByCategory();
  }, [selected]);

  return (
    <div className="p-4">
      <h2 className="text-2xl font-bold mb-4">Browse by Categories</h2>

      {loadingCategories ? (
        <p>Loading categories...</p>
      ) : (
        <div className="flex flex-wrap gap-2 mb-6">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setSelected(cat)}
              className={`px-4 py-2 rounded border ${
                selected === cat ? "bg-blue-600 text-white" : "bg-gray-100"
              }`}
            >
              {cat}
            </button>
          ))}
        </div>
      )}

      {selected && <h3 className="text-xl font-semibold mb-4">Category: {selected}</h3>}

      {loadingProducts ? (
        <p>Loading products...</p>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {products.length > 0 ? (
            products.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))
          ) : (
            <p>No products found in this category.</p>
          )}
        </div>
      )}
    </div>
  );
};

export default Categories;

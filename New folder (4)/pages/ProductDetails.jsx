import React, { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import axios from 'axios';

function ProductDetail() {
  const { id } = useParams();
  const [product, setProduct] = useState(null);
  const [related, setRelated] = useState([]);

  useEffect(() => {
    const fetchProduct = async () => {
      try {
        const res = await axios.get(`https://dummyjson.com/products/${id}`);
        setProduct(res.data);

        // Fetch related products (same category)
        const relatedRes = await axios.get(`https://dummyjson.com/products/category/${res.data.category}`);
        setRelated(relatedRes.data.products.filter(p => p.id !== res.data.id));
      } catch (error) {
        console.error('Error loading product:', error);
      }
    };

    fetchProduct();
  }, [id]);

  if (!product) return <p className="p-4">Loading product...</p>;

  return (
    <div className="p-4">
      <div className="flex flex-col md:flex-row gap-6">
        <img
          src={product.thumbnail}
          alt={product.title}
          className="w-full md:w-1/3 object-cover rounded"
        />
        <div>
          <h2 className="text-2xl font-bold mb-2">{product.title}</h2>
          <p className="text-gray-700 mb-2">{product.description}</p>
          <p className="text-lg font-semibold text-green-600">${product.price}</p>
          <p className="text-yellow-600">Rating: {product.rating} ⭐</p>
          <p className="text-sm text-gray-500 mb-4">Category: {product.category}</p>
          <button className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700">
            Add to Cart
          </button>
        </div>
      </div>

      {related.length > 0 && (
        <>
          <h3 className="text-xl font-bold mt-8 mb-4">Related Products</h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
            {related.slice(0, 3).map(r => (
              <Link
                to={`/product/${r.id}`}
                key={r.id}
                className="border p-3 rounded hover:shadow"
              >
                <img src={r.thumbnail} alt={r.title} className="h-40 w-full object-cover mb-2 rounded" />
                <p className="font-semibold">{r.title}</p>
                <p className="text-sm text-gray-600">${r.price}</p>
              </Link>
            ))}
          </div>
        </>
      )}
    </div>
  );
}

export default ProductDetail;


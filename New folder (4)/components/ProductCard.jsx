import React from 'react';
import { Link } from 'react-router-dom';

function ProductCard({ product }) {
  return (
    <div className="border rounded p-3 shadow hover:shadow-lg transition">
      <Link to={`/product/${product.id}`}>
        <img src={product.thumbnail} alt={product.title} className="h-40 w-full object-cover mb-2 rounded" />
        <h3 className="text-lg font-semibold">{product.title}</h3>
        <p className="text-gray-700">${product.price}</p>
        <p className="text-sm text-yellow-600">Rating: {product.rating}</p>
      </Link>
    </div>
  );
}

export default ProductCard;

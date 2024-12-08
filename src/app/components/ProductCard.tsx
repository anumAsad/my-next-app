import React from 'react'

interface Product {
    image: string;
    name: string;
    rating: number;
    price: number;
  }

  export default function ProductCard({ product }: { product: Product }) {
    return (
    <div className="border rounded-lg p-4 shadow-sm hover:shadow-lg transition">
      <img src={product.image} alt={product.name} width={295} height={298} className="w-full h-48 object-cover rounded-md" />
      <h2 className="text-lg font-semibold mt-2">{product.name}</h2>
      <div className="flex items-center">
      <div className="flex text-yellow-400">
      {"★".repeat(Math.round(product.rating))}
      {"☆".repeat(5 - Math.round(product.rating))}
                </div>
        <span className="text-gray-500 text-sm ml-2">{product.rating}/5</span>
      </div>
      <div className="mt-2 text-lg font-bold">${product.price}</div>
    </div>
  );
}
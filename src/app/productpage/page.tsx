'use client';

import Image from 'next/image';
import React, { useState } from 'react';
import ProductDetailsReviews from '../components/ProductDetailsReviews';
import AlsoLike from '../components/AlsoLike';

const ProductDetails = () => {
  const [selectedColor, setSelectedColor] = useState('olive');
  const [selectedSize, setSelectedSize] = useState('Large');
  const [quantity, setQuantity] = useState(1);

  // Define colors with Tailwind-safe static class names
  const colors = [
    { name: 'olive', colorClass: 'bg-green-700' },
    { name: 'navy', colorClass: 'bg-blue-800' },
    { name: 'black', colorClass: 'bg-black' },
  ];

  const sizes = ['Small', 'Medium', 'Large', 'X-Large'];

  const handleQuantityChange = (type: 'increase' | 'decrease') => {
    if (type === 'decrease' && quantity > 1) setQuantity(quantity - 1);
    if (type === 'increase') setQuantity(quantity + 1);
  };

  return (
    <div className="max-w-screen-lg mx-auto p-4">
      {/* Breadcrumb */}
      <p className="text-sm text-gray-600 mb-4">
        <a href="/" className="text-blue-500 hover:underline">
          Home
        </a>{' '}
        / Product Details
      </p>

      {/* Product Details Section */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {/* Left: Image Gallery */}
        <div className="flex justify-evenly">
          <div className="mb-4">
            <div>
              <div className="grid grid-cols-3 gap-4">
                <Image
                  src="/image2.png"
                  alt="Thumbnail"
                  width={152}
                  height={167}
                  className="w-full h-auto rounded-lg border hover:border-black"
                />
                <Image
                  src="/image3.png"
                  alt="Thumbnail"
                  width={152}
                  height={167}
                  className="w-full h-auto rounded-lg border hover:border-black"
                />
                <Image
                  src="/image4.png"
                  alt="Thumbnail"
                  width={152}
                  height={167}
                  className="w-full h-auto rounded-lg border hover:border-black"
                />
              </div>
            </div>
            <Image
              src="/image1.png"
              alt="T-shirt"
              width={444}
              height={530}
              className="w-full h-auto rounded-lg mt-4"
            />
          </div>
        </div>

        {/* Right: Product Details */}
        <div>
          <h1 className="text-2xl font-bold mb-2">ONE LIFE GRAPHIC T-SHIRT</h1>
          <div className="flex items-center mb-4">
            <div className="flex items-center text-yellow-500 mr-2">
              {[...Array(4)].map((_, i) => (
                <span key={i}>★</span>
              ))}
              <span className="text-gray-400">★</span>
            </div>
            <span className="text-gray-700 text-sm">(4.5/5)</span>
          </div>

          {/* Price */}
          <div className="flex items-center mb-4">
            <span className="text-2xl font-bold">$260</span>
            <span className="line-through text-gray-400 ml-4">$300</span>
            <span className="text-red-600 font-bold ml-4">-40%</span>
          </div>

          {/* Description */}
          <p className="text-gray-700 mb-6">
            This graphic t-shirt is perfect for any occasion. Crafted from a soft
            and breathable fabric, it offers superior comfort and style.
          </p>

          {/* Select Colors */}
          <div className="mb-6">
            <h3 className="text-sm font-bold mb-2">Select Colors</h3>
            <div className="flex space-x-4">
              {colors.map((color) => (
                <div
                  key={color.name}
                  className={`w-8 h-8 rounded-full cursor-pointer border ${
                    selectedColor === color.name ? 'border-black' : 'border-gray-300'
                  } ${color.colorClass}`}
                  onClick={() => setSelectedColor(color.name)}
                ></div>
              ))}
            </div>
          </div>

          {/* Choose Size */}
          <div className="mb-6">
            <h3 className="text-sm font-bold mb-2">Choose Size</h3>
            <div className="flex space-x-4">
              {sizes.map((size) => (
                <button
                  key={size}
                  onClick={() => setSelectedSize(size)}
                  className={`px-4 py-2 border rounded-lg ${
                    selectedSize === size
                      ? 'bg-black text-white'
                      : 'bg-white text-gray-700 border-gray-300'
                  }`}
                >
                  {size}
                </button>
              ))}
            </div>
          </div>

          {/* Quantity and Add to Cart */}
          <div className="flex items-center space-x-4">
            <div className="flex items-center border rounded-lg">
              <button
                className="px-4 py-2 text-gray-700"
                onClick={() => handleQuantityChange('decrease')}
              >
                -
              </button>
              <span className="px-4">{quantity}</span>
              <button
                className="px-4 py-2 text-gray-700"
                onClick={() => handleQuantityChange('increase')}
              >
                +
              </button>
            </div>
            <button className="px-6 py-2 bg-black text-white rounded-lg">
              Add to Cart
            </button>
          </div>
        </div>
      </div>

      {/* Tabs Section */}
      <ProductDetailsReviews />
      <AlsoLike />
    </div>
  );
};

export default ProductDetails;

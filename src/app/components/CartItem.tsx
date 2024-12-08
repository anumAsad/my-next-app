import Image from 'next/image';
import React from 'react'

type CartItemProps = {
  image: string; // Path or URL to the image
  name: string;  // Name of the item
  size: string;  // Size of the item
  color: string; // Color of the item
  price: number; // Price of the item
};

const CartItem: React.FC<CartItemProps> = ({ image, name, size, color, price }) => (    <div className="flex items-center justify-between border-b py-4">
      <div className="flex items-center gap-4">
        <Image src={image} alt={name}width={124} height={124} className="w-16 h-16 rounded-md" />
        <div>
          <h3 className="text-lg font-semibold">{name}</h3>
          <p className="text-sm text-gray-500">Size: {size}</p>
          <p className="text-sm text-gray-500">Color: {color}</p>
        </div>
      </div>
      <div className="flex items-center gap-4">
        <p className="text-lg font-semibold">${price}</p>
        <div className="flex items-center border rounded-md">
          <button className="px-2 text-gray-700">-</button>
          <input
            type="text"
            readOnly
            value="1"
            className="w-8 text-center border-l border-r"
          />
          <button className="px-2 text-gray-700">+</button>
        </div>
        <button className="text-red-500">
          <span>&#x1F5D1;</span>
        </button>
      </div>
    </div>
  );
  
  export default CartItem;
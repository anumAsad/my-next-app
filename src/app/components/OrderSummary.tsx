import React from 'react'
// Define prop types for the component
type OrderSummaryProps = {
  subtotal: number; // Subtotal of the order
  discount: number; // Discount amount
  deliveryFee: number; // Delivery fee
  total: number; // Total amount
};

const OrderSummary: React.FC<OrderSummaryProps> = ({
  subtotal,
  discount,
  deliveryFee,
  total,
}) => (

    <div className="p-4 bg-gray-100 rounded-lg">
      <h2 className="text-xl font-semibold mb-4">Order Summary</h2>
      <div className="flex justify-between mb-2">
        <p>Subtotal</p>
        <p>${subtotal}</p>
      </div>
      <div className="flex justify-between mb-2 text-red-500">
        <p>Discount</p>
        <p>-${discount}</p>
      </div>
      <div className="flex justify-between mb-2">
        <p>Delivery Fee</p>
        <p>${deliveryFee}</p>
      </div>
      <div className="flex justify-between font-bold text-lg">
        <p>Total</p>
        <p>${total}</p>
      </div>
      <div className="mt-4">
        <input
          type="text"
          placeholder="Add promo code"
          className="w-full p-2 border rounded-md mb-4"
        />
        <button className="w-full py-2 bg-black text-white rounded-md">
          Go to Checkout
        </button>
      </div>
    </div>
  );
  
  export default OrderSummary;
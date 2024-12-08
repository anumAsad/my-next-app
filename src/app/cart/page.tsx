import CartItem from '../components/CartItem'
import OrderSummary from '../components/OrderSummary';

const Cart = () => {
  const cartItems = [
    {
      image: '/t-shirt.png',
      name: 'Gradient Graphic T-shirt',
      size: 'Large',
      color: 'White',
      price: 145,
    },
    {
      image: '/shirt.png',
      name: 'Checkered Shirt',
      size: 'Medium',
      color: 'Red',
      price: 180,
    },
    {
      image: '/jeans.png',
      name: 'Skinny Fit Jeans',
      size: 'Large',
      color: 'Blue',
      price: 240,
    },
  ];

  const subtotal = 565;
  const discount = 113;
  const deliveryFee = 15;
  const total = subtotal - discount + deliveryFee;

  return (
    <div className="container mx-auto p-4 md:p-8">
      <h1 className="text-2xl font-bold mb-6">Your Cart</h1>
      <div className="flex flex-col md:flex-row gap-8">
        <div className="flex-1">
          {cartItems.map((item, index) => (
            <CartItem key={index} {...item} />
          ))}
        </div>
        <div className="w-full md:w-1/3">
          <OrderSummary
            subtotal={subtotal}
            discount={discount}
            deliveryFee={deliveryFee}
            total={total}
          />
        </div>
      </div>
    </div>
  );
};

export default Cart;
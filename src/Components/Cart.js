import { useDispatch, useSelector } from "react-redux";
import { clearCart, addItem, removeItem } from "../utilis/cartSlice";

const Cart = () => {
  const cartItems = useSelector((store) => store.cart.items);
  //   console.log(cartItems);
  const dispatch = useDispatch();
  const totalItems = cartItems.reduce(
    (total, item) => total + item.quantity,
    0,
  );
  const handleClearCart = () => {
    dispatch(clearCart());
  };
  const handleIncrease = (item) => {
    dispatch(addItem(item));
  };

  const handleDecrease = (id) => {
    dispatch(removeItem(id));
  };

  const totalAmount = cartItems.reduce(
    (total, item) =>
      total + ((item.price || item.defaultPrice) / 100) * item.quantity,
    0,
  );

  if (cartItems.length === 0) {
    return (
      <div className="text-center mt-20">
        <h1 className="text-3xl font-bold">Your Cart is Empty</h1>

        <p className="text-gray-500 mt-2">Add some delicious food 🍕</p>
      </div>
    );
  }

  return (
    <div className="max-w-6xl mx-auto p-6">
      <h1 className="text-4xl font-bold text-center mb-8">Cart</h1>

      <div className="grid grid-cols-3 gap-8">
        {/* Left Section */}
        <div className="col-span-2 bg-white shadow-lg rounded-lg p-6">
          <div className="flex justify-between items-center mb-5">
            <h2 className="text-2xl font-semibold">Cart Items</h2>

            <button
              onClick={handleClearCart}
              className="bg-red-500 text-white px-4 py-2 rounded-md"
            >
              Clear Cart
            </button>
          </div>

          {cartItems.length === 0 ? (
            <h2 className="text-center text-gray-500">Cart is Empty</h2>
          ) : (
            cartItems.map((item, index) => (
              <div
                key={`${item.id}-${index}`}
                className="flex justify-between border-b py-4"
              >
                <h3>{item.name}</h3>
                <div className="flex items-center gap-3">
                  <button
                    onClick={() => handleDecrease(item.id)}
                    className="bg-red-500 text-white px-2 py-1 rounded"
                  >
                    -
                  </button>

                  <span className="font-bold">{item.quantity || 1}</span>

                  <button
                    onClick={() => handleIncrease(item)}
                    className="bg-green-500 text-white px-2 py-1 rounded"
                  >
                    +
                  </button>

                  <span className="font-semibold">
                    ₹{(item.price || item.defaultPrice) / 100}
                  </span>
                </div>{" "}
              </div>
            ))
          )}
        </div>
        {/* Right Section */}
        <div className="bg-gray-100 rounded-lg p-6 h-fit shadow-md">
          <h2 className="text-xl font-bold mb-4">Bill Details</h2>

          <div className="flex justify-between mb-2">
            <span>Items</span>
            <span>{totalItems}</span>
          </div>

          <div className="flex justify-between mb-2">
            <span>Delivery Fee</span>
            <span>₹40</span>
          </div>

          <hr className="my-3" />

          <div className="flex justify-between font-bold text-lg">
            <span>Total</span>
            <span>
              ₹
              {totalAmount + 40}
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cart;

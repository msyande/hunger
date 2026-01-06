import { useDispatch, useSelector } from "react-redux";
import { clearCart } from "../utils/redux/cartSlice";

const Cart = () => {
  const dispatch = useDispatch();
  const cartItems = useSelector((store) => store.cart.items);
  const handleClearCart = () => {
    dispatch(clearCart());
  };

  return (
    <div className="text-center m-5 p-5">
      <h1 className="font-bold text-2xl">Cart</h1>
      <div>
        {cartItems.length === 0 && (
          <h2>Your cart is empty! Add Items to cart</h2>
        )}
        {cartItems.map((item) => {
          return (
            <li key={item.id}>
              {item.name} - ₹{item.price / 100}
            </li>
          );
        })}
      </div>
      <button
        className="p-2 m-2 bg-black text-white rounded-xl"
        onClick={handleClearCart}
      >
        Clear Cart
      </button>
    </div>
  );
};

export default Cart;

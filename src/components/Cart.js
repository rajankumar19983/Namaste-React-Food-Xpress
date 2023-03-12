import { useSelector } from "react-redux";
import "../styles/Cart.css";
import store from "../utils/store";

// const cartItems = useSelector(store => store.cart.items);

const Cart = () => {
  return (
    <div className="cart-component">
      <h1>This is cart page</h1>
      <p>Comming soon....</p>
    </div>
  );
}

export default Cart;
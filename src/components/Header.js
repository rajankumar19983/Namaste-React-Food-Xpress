import logo from "../assets/img/food-xpress-logo.png";
import { FiShoppingCart } from 'react-icons/fi';
import { useState, useContext } from "react";
import { Link } from "react-router-dom";
import "../styles/Header.css"
import UserContext from "../utils/UserContext";
import { useSelector } from "react-redux";

const title = (
  <Link to="/">
    <img className="logo" src={logo} alt="logo" />
  </Link>
);


const Header = () => {

  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const { user } = useContext(UserContext);

  const cartItems = useSelector(store => store.cart.items);
  console.log(cartItems);

  return (
    <div className="header">
      <div className="header-elements">
        {title}
        <h3>{user.name}</h3>
        <div className="nav-items">
          <ul>
            <Link to="/" className="link">
              <li key="nav-1">Home</li>
            </Link>
            <Link to="/about" className="link">
              <li key="nav-2">About</li>
            </Link>
            <Link to="/contact" className="link">
              <li key="nav-3">Contact</li>
            </Link>
            <Link to="/cart" className="link">
              <li key="nav-4" id="cart">
                <div className="cart-group">
                  <div className="cart-item-count">
                    {cartItems.length}
                  </div>
                  <FiShoppingCart />
                </div>
                Cart
              </li>
            </Link>
            <Link to="/instamart" className="link">
              <li key="nav-5" id="instamart">Instamart</li>
            </Link>
          </ul>
          {
            isLoggedIn
              ? <button onClick={() => setIsLoggedIn(false)} style={{ backgroundColor: "red" }}>
                Logout</button>
              : <button onClick={() => setIsLoggedIn(true)} style={{ backgroundColor: "green", color: "white" }}>
                Login</button>
          }
        </div>
      </div >
    </div >
  );
};

export default Header;

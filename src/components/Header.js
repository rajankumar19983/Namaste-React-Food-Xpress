import logo from "../assets/img/food-xpress-logo.png";
import { FiShoppingCart } from 'react-icons/fi';
import { useState } from "react";
import { Link } from "react-router-dom";
import "../styles/Header.css"


const title = (
  <Link to="/">
    <img className="logo" src={logo} alt="logo" />
  </Link>
);


const Header = () => {

  const [isLoggedIn, setIsLoggedIn] = useState(false);

  return (
    <div className="header">
      <div className="header-elements">
        {title}
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
            <Link to="/" className="link">
              <li key="nav-4" id="cart"><FiShoppingCart />Cart</li>
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

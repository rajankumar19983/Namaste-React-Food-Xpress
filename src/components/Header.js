import logo from "../../food-xpress-logo.png";
import { FiShoppingCart } from 'react-icons/fi';

const title = (
  <a href="/">
    <img className="logo" src={logo} alt="logo" />
  </a>
);


const Header = () => {
  return (
    <div className="header">
      <div className="header-elements">
        {title}
        <div className="nav-items">
          <ul>
            <li key="nav-1">Home</li>
            <li key="nav-2">About</li>
            <li key="nav-3">Contact</li>
            <li key="nav-4" id="cart"><FiShoppingCart />Cart</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Header;

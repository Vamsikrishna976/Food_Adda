import { useState, useContext } from "react";
import { Link } from "react-router-dom";
// import { CartContext } from "../utilis/CartContext";
import { useSelector } from "react-redux";

const logo = new URL("../utilis/assets/logo.png", import.meta.url);

const Header = () => {
  const [btnName, setBtnName] = useState("Login");
  // sucbribing to the context to get the cart items using useContext hook selector
  const cartItems = useSelector((state) => state.cart.items);
  return (
    <div className="Header">
      <div className="logo-container">
        <img className="logo-image" src={logo.href} alt="Food Adda" />
      </div>
      <div className="Nav-items">
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/about">About</Link>
          </li>
          <li>
            <Link to="/cart" className="flex items-center gap-1 text-white">
              🛒
              <span style={{fontSize: "14px"}}>({cartItems.length})</span>
            </Link>
          </li>
          {/* <li>
            <Link to="/cart">Cart</Link>
          </li> */}
          <li>
            <Link to="/user">User</Link>
          </li>
          <button
            className="login-btn"
            onClick={() => {
              btnName === "Login" ? setBtnName("Logout") : setBtnName("Login");
            }}
          >
            {btnName}
          </button>
        </ul>
      </div>
    </div>
  );
};

export default Header;

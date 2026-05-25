
import { useState } from "react";
import { Link } from "react-router-dom";

const logo = new URL("../utilis/assets/logo.png", import.meta.url);

const Header = () => {

const [btnName, setBtnName] = useState("Login");

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
            <Link to="/contact">Contact us</Link>
          </li>
          <li>
            <Link to="/cart">Cart</Link>
          </li>
          <button className="login-btn" 
          onClick={() => {
            btnName === "Login" ? setBtnName("Logout") :
            setBtnName("Login");
          }}
            >{btnName}
            </button>
        </ul>
      </div>
    </div>
  );
};

export default Header;
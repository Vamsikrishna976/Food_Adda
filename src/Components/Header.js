
import { useState } from "react";
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
            <a href="/">Home</a>
          </li>
          <li>
            <a href="/about">About</a>
          </li>
          <li>
            <a href="/contact">Contact us</a>
          </li>
          <li>
            <a href="/cart">Cart</a>
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
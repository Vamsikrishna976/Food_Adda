import { useState, useContext } from "react";
import { useNavigate, Link } from "react-router-dom";
// import { CartContext } from "../utilis/CartContext";
import { useDispatch, useSelector } from "react-redux";
import { logout } from "../utilis/authSlice";

const logo = new URL("../utilis/assets/logo.png", import.meta.url);

const Header = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { isLoggedIn, user } = useSelector((store) => store.auth);
  console.log(user);
  
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
            <Link to="/contact">Contact</Link>
          </li>
          <li>
            <Link to="/cart" className="flex items-center gap-1 text-white">
              🛒
              <span style={{ fontSize: "14px" }}>({cartItems.length})</span>
            </Link>
          </li>
          {/* <button
            className="login-btn"
            onClick={() => {
              if (isLoggedIn) {
                dispatch(logout());
              } else {
                dispatch(login());
              }
            }}
          >
            {isLoggedIn ? "Logout" : "Login"}
          </button> */}

          <li>
            {isLoggedIn ? (
              <div className="flex items-center gap-3">
                <span className="font-semibold text-white">
                  👋 {user?.name}
                </span>

                <button
                  className="login-btn"
                  onClick={() => dispatch(logout())}
                >
                  Logout
                </button>
              </div>
            ) : (
              <Link to="/login">
                <button className="login-btn">Login</button>
              </Link>
            )}
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Header;

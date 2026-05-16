
import { LOGO_URL } from "../utilis/constants";

const Header = () => {
  return (
    <div className="Header">
      <div className="logo-container">
        <img
          className="logo-image"
          src={LOGO_URL}
          alt="logo"
        />
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
        </ul>
      </div>
    </div>
  );
};

export default Header;
import "./Header.scss";
import { NavLink } from "react-router-dom";
import logo from "../../images/logo.png";

export const Header = () => {
  return (
    <header className="header-wrapper">
      <ul className="header-links">
        <li>
          <img className="logo" src={logo} alt="" />
        </li>
        <div className="links">
          <li className="header-link">
            <NavLink to="/">Shop</NavLink>
          </li>
          <li className="header-link">
            <NavLink to="/cart">Shopping Cart</NavLink>
          </li>
          <li className="header-link">
            <NavLink to="/history">History</NavLink>
          </li>
          <li className="header-link">
            <NavLink to="/coupons">Coupons</NavLink>
          </li>
        </div>
      </ul>
    </header>
  );
};

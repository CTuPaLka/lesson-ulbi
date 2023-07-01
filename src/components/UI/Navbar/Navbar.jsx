import { NavLink } from "react-router-dom";
import css from "./Navbar.module.css";

const setActive = props => {
  return ({ isActive }) =>
    isActive
      ? `${css.navbar__linksItem} ${css.navbar__active}`
      : `${css.navbar__linksItem}`;
};

function Navbar() {
  return (
    <div className="navbar">
      <nav className="navbar-links">
        <NavLink className={setActive()} to="/about">
          About
        </NavLink>
        <NavLink className={setActive()} to="/posts">
          Posts
        </NavLink>
      </nav>
    </div>
  );
}

export default Navbar;

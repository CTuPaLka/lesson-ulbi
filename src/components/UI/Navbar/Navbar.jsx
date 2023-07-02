import { NavLink } from "react-router-dom";
import css from "./Navbar.module.css";
import { useContext } from "react";
import { AuthContext } from "../../../context/context";
import Button from "../button/Button";

const setActive = props => {
  return ({ isActive }) =>
    isActive
      ? `${css.navbar__linksItem} ${css.navbar__active}`
      : `${css.navbar__linksItem}`;
};

function Navbar() {
  const { setisAuth } = useContext(AuthContext);

  const login = () => {
    localStorage.removeItem("auth");
    setisAuth(false);
  };

  return (
    <div className={css.navbar__wrapper}>
      <Button onClick={login}>Exit</Button>
      <nav className={css.navbarLinks}>
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

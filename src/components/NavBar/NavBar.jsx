// css
import styles from "./NavBar.module.css";

// react router dom imports
import { NavLink } from "react-router-dom";

const NavBar = () => {
  return (
    <nav className={styles.navBar}>
      <NavLink to="/" className={styles.brand}>
        DEV <span>Blog</span>
      </NavLink>
      <ul className={styles.links_list}>
        <li>
          <NavLink
            to="/"
            className={({ isActive }) => (isActive ? styles.active : "")}
          >
            Home
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/about"
            className={({ isActive }) => (isActive ? styles.active : "")}
          >
            Sobre
          </NavLink>
        </li>
      </ul>
    </nav>
  );
};

export default NavBar;

// CSS
import styles from "./NavBar.module.css";

// React imports
import { useState, useEffect } from "react";

// hooks
import { useAuthentication } from "../../hooks/useAuthentication";

import { useAuthValue } from "../../context/AuthContext";

// React router dom imports
import { NavLink } from "react-router-dom";

// Fontawesome library
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars, faTimes } from "@fortawesome/free-solid-svg-icons";

// AOS library
import "aos/dist/aos.css";

const NavBar = () => {
  const { user } = useAuthValue();
  const { logout } = useAuthentication();

  const [isMobileMenuVisible, setMobileMenuVisible] = useState(false);

  const toggleMobileMenu = () => {
    setMobileMenuVisible(!isMobileMenuVisible);
  };

  const closeMobileMenu = () => {
    setMobileMenuVisible(false);
  };

  return (
    <div className={styles.navBar}>
      <div className={styles.nav}>
        <NavLink to="/" className={styles.brand}>
          DEV <span>Blog</span>
        </NavLink>
        <ul
          className={`${styles.linksList} ${
            isMobileMenuVisible ? styles.active : ""
          }`}
        >
          <li>
            <NavLink
              to="/"
              className={({ isActive }) => (isActive ? styles.active : "")}
              onClick={closeMobileMenu}
            >
              Home
            </NavLink>
          </li>
          {!user && (
            <>
              <li>
                <NavLink
                  to="/login"
                  className={({ isActive }) => (isActive ? styles.active : "")}
                  onClick={closeMobileMenu}
                >
                  Entrar
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/register"
                  className={({ isActive }) => (isActive ? styles.active : "")}
                  onClick={closeMobileMenu}
                >
                  Cadastrar
                </NavLink>
              </li>
            </>
          )}
          {user && (
            <>
              <li>
                <NavLink
                  to="/posts/create"
                  className={({ isActive }) => (isActive ? styles.active : "")}
                  onClick={closeMobileMenu}
                >
                  Novo Post
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/dashboard"
                  className={({ isActive }) => (isActive ? styles.active : "")}
                  onClick={closeMobileMenu}
                >
                  Dashboard
                </NavLink>
              </li>
            </>
          )}
          <li>
            <NavLink
              to="/about"
              className={({ isActive }) => (isActive ? styles.active : "")}
              onClick={closeMobileMenu}
            >
              Sobre
            </NavLink>
          </li>
          {user && (
            <li>
              <button onClick={logout}>Sair</button>
            </li>
          )}
        </ul>
        <div className={styles.mobileMenuButton} onClick={toggleMobileMenu}>
          {isMobileMenuVisible ? (
            <FontAwesomeIcon icon={faTimes} />
          ) : (
            <FontAwesomeIcon icon={faBars} />
          )}
        </div>
      </div>
    </div>
  );
};

export default NavBar;

import React from "react";
import { Link } from "react-scroll";
import { useNavigate } from "react-router";
import styles from "./Header.module.css"; // 👈 Import CSS Module

function Header() {
  const navigate = useNavigate();
  return (
    <nav
      className="navbar navbar-expand-lg bg-light shadow"
      style={{ position: "fixed", top: 0, width: "100%", zIndex: 999 }}
    >
      <div className="container-fluid">
        <Link className="navbar-brand" to="#">
          <img src="../assets/Logo.png" alt="Logo" width="160" height="50" />
        </Link>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className={`navbar-nav ms-auto ${styles.navbarNav}`}>
            <li className="nav-item">
              <Link
                className="nav-link"
                to="home"
                spy={true}
                smooth={true}
                offset={-50}
                duration={200}
                activeClass={styles.active}
              >
                Home
              </Link>
            </li>
            <li className="nav-item">
              <Link
                className="nav-link"
                to="prime"
                spy={true}
                smooth={true}
                offset={-50}
                duration={200}
                activeClass={styles.active}
              >
                Prime
              </Link>
            </li>
            <li className="nav-item">
              <Link
                className="nav-link"
                to="sos"
                spy={true}
                smooth={true}
                offset={-50}
                duration={200}
                activeClass={styles.active}
              >
                SOS
              </Link>
            </li>
            <li className="nav-item">
              <button
                className="nav-link btn btn-link"
                onClick={() => navigate("/login")}
              >
                Login
              </button>
            </li>
            <li className="nav-item">
              <button
                className="nav-link btn btn-link"
                onClick={() => navigate("/signup")}
              >
                Sign In
              </button>
            </li>
            <li className="nav-item">
              <button
                className="nav-link btn btn-link"
                onClick={() => navigate("/admin")}
              >
                Admin
              </button>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default Header;

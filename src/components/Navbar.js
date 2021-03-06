import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";

import { GoOctoface } from "react-icons/go";
import { IconContext } from "react-icons/lib";
import { FaBars, FaTimes } from "react-icons/fa";

function Navbar() {
  const [click, setClick] = useState(false);
  const [button, setButton] = useState(true);

  const handleClick = () => setClick(!click);
  const closeMobileMenu = () => setClick(false);

  const showButton = () => {
    if (window.innerWidth <= 960) {
      setButton(false);
    } else {
      setButton(true);
    }
  };
  window.addEventListener("resize", showButton);

  useEffect(() => {
    showButton();
  }, []);

  return (
    <>
      <IconContext.Provider value={{ color: "#fff" }}>
        <div className="navbar">
          <div className="navbar-container container">
            <Link to="/" className="navbar-logo" onClick={closeMobileMenu}>
              <GoOctoface className="navbar-icon" />
              SHUNG
            </Link>
            <div className="menu-icon" onClick={handleClick}>
              {click ? <FaTimes /> : <FaBars />}
            </div>
            <ul className={click ? "nav-menu active" : "nav-menu"}>
              <li className="nav-item">
                <Link to="/home" className="nav-links" onClick={closeMobileMenu}>Home</Link>
              </li>
              <li className="nav-item">
                <Link to="/blog" className="nav-links" onClick={closeMobileMenu}>Blog</Link>
              </li>
              {/* <li className="nav-btn">
                {button ? (
                  <Link to="/signup" className="btn-link">
                    <Button buttonStyle="btn--outline">SIGN UP</Button>
                  </Link>
                ) : (
                  <Link to="/signup" className="btn-link" onClick={closeMobileMenu}>
                    <Button buttonStyle="btn--outline" buttonSize="btn--mobile">
                      SIGN UP
                    </Button>
                  </Link>
                )}
              </li> */}
            </ul>
          </div>
        </div>
      </IconContext.Provider>
    </>
  );
}

export default Navbar;

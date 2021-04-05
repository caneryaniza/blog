import React, { useContext } from "react";
import { NavLink } from "react-router-dom";

import { AuthContext } from "../../context/auth-context";

import "./NavLinks.css";
const NavLinks = (props) => {
  const auth = useContext(AuthContext);
  let content;
  if (!props.isMobile) {
    content = (
      <div className="nav__container  container">
        <ul className="nav__list">
          <li className="nav__item">
            <NavLink to="/" exact>
              Anasayfa
            </NavLink>
          </li>
          <li className="nav__item">
            <NavLink to="/blogs" exact>
              Bloglar
            </NavLink>
          </li>
          <li className="nav__item">
            <NavLink to="/about" exact>
              Hakkımda
            </NavLink>
          </li>
          <li className="nav__item">
            <NavLink to="/contact" exact>
              İletişim
            </NavLink>
          </li>
          {auth.isLoggedIn && (
            <li className="nav__item">
              <NavLink to="/contact" exact>
                Admin Paneli
              </NavLink>
            </li>
          )}
        </ul>
      </div>
    );
  } else {
    content = (
      <div className="nav__container  container">
        <div className="slicknav_menu">
          <ul className="slicknav_nav">
            <li className="nav__item">
              <NavLink to="/" exact>
                Anasayfa
              </NavLink>
            </li>
            <li className="nav__item">
              <NavLink to="/blogs" exact>
                Bloglar
              </NavLink>
            </li>
            <li className="nav__item">
              <NavLink to="/about" exact>
                Hakkımda
              </NavLink>
            </li>
            <li className="nav__item">
              <NavLink to="/contact" exact>
                İletişim
              </NavLink>
            </li>
            {auth.isLoggedIn && (
              <li className="nav__item">
                <NavLink to="/contact" exact>
                  Admin Paneli
                </NavLink>
              </li>
            )}
          </ul>
        </div>
      </div>
    );
  }

  return content;
};

export default NavLinks;

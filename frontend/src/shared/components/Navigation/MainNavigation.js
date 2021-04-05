import React, { useState } from "react";

import Backdrop from "../UIElements/Backdrop";
import SideDrawer from "./SideDrawer";
import NavLinks from "./NavLinks";

import { AiOutlineMenu } from "react-icons/ai";

import "./MainNavigation.css";

const MainNavigation = () => {
  const [drawerIsOpen, setDrawerIsOpen] = useState(false);
  const openDrawerHandler = () => {
    setDrawerIsOpen(true);
  };
  const closeDrawerHandler = () => {
    setDrawerIsOpen(false);
  };

  return (
    <React.Fragment>
      {drawerIsOpen && <Backdrop isOpen={drawerIsOpen} onClick={closeDrawerHandler} />}
      <SideDrawer show={drawerIsOpen} onClick={closeDrawerHandler}>
        <nav className="nav--mobile">
          <NavLinks isMobile={true} />
        </nav>
      </SideDrawer>

      <div className="col-md-12 nav-toggle">
        <AiOutlineMenu
          className="nav-toggle__icon"
          onClick={openDrawerHandler}
        />
      </div>
      <nav className="nav">
        <NavLinks isMobile={false} />
      </nav>
    </React.Fragment>
  );
};

export default MainNavigation;

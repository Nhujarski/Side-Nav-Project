import React, { useState } from "react";
import "./Layout.css";
import SideNav from "../SideNav/SideNav";

function Layout() {
  const [isOpen, setIsOpen] = useState(false);

  //   function to open nav and set state to true
  const openNav = () => {
    setIsOpen(true);
  };

  // function to close nav and set state to false
  const closeNav = () => {
    setIsOpen(false);
  };

  return (
    <div className="app-layout">
      <SideNav isOpen={isOpen} closeNav={closeNav} />
      <span className="app-open-nav" onClick={openNav}>
        &#9776; Open
      </span>
    </div>
  );
}

export default Layout;

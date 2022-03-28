import React from "react";
import "./SideNav.css";

function SideNav({ isOpen, closeNav }) {
  return (
    <div className={isOpen ? "app-side-nav-open" : "app-side-nav-closed"}>
      {isOpen && (
        <>
          <a href="#" className="closebtn" onClick={closeNav}>
            &times;
          </a>
          <a href="#">About</a>
          <a href="#">Services</a>
          <a href="#">Clients</a>
          <a href="#">Contact</a>
        </>
      )}
    </div>
  );
}

export default SideNav;

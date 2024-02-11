import React from "react";
import { NavLink, Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="navbar">
      <input type="checkbox" id="toggle" />
      <label htmlFor="toggle" className="checkbtn"></label>
      <Link className="logo" to="/">
        Zoran
      </Link>
      <ul>
        <li>
          <NavLink to="/">HOME</NavLink>
        </li>
        <li>
          <NavLink to="/about">ABOUT</NavLink>
        </li>
        <li>
          <NavLink to="/cv">CV</NavLink>
        </li>
        <li>
          <NavLink to="/portfolio">PORTFOLIO</NavLink>
        </li>
        <li>
          <NavLink to="/contact">CONTACT</NavLink>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;

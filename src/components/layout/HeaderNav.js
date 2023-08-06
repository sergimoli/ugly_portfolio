import React from "react";
import { NavLink } from "react-router-dom";

function HeaderNav() {
  return (
    <header className="header">
      <div className="logo">
        <span>S</span>
        <h3>ergi Molina FULLSTACK</h3>
      </div>
      <nav>
        <ul>
          <li>
            <NavLink
              to="/start"
              className={({ isActive }) => (isActive ? "active" : "")}
            >
              Start
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/portfolio"
              className={({ isActive }) => (isActive ? "active" : "")}
            >
              Portfolio
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/services"
              className={({ isActive }) => (isActive ? "active" : "")}
            >
              Services
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/curriculum"
              className={({ isActive }) => (isActive ? "active" : "")}
            >
              Curriculum
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/contact"
              className={({ isActive }) => (isActive ? "active" : "")}
            >
              Contact
            </NavLink>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default HeaderNav;

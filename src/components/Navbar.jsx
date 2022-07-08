import React from "react";
import {NavLink} from "react-router-dom"

const Navbar = () => {
  return (
    <>
      <nav className="navbar navbar-expand-lg bg-light">
        <div className="container-fluid">
          <NavLink className="navbar-brand" to="/">
            Reack Hooks
          </NavLink>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNav"
            aria-controls="navbarNav"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon" />
          </button>
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav">
              <li className="nav-item">
                <NavLink className={window.location.pathname === "/hooks" ? "nav-link active" : "nav-link"} aria-current="page" to="/hooks">
                  Hooks
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink className={window.location.pathname === "/sumando" ? "nav-link active" : "nav-link"} to="/sumando">
                  Sumando
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink className={window.location.pathname === "/compartir-estado" ? "nav-link active" : "nav-link"} to="/compartir-estado">
                  Compartir Estado
                </NavLink>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navbar;

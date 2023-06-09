import React from "react";

const Navbar = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
      <div className="container-fluid">
        <a className="navbar-brand" href="#">
          Logo
        </a>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <a className="nav-link active" aria-current="page" href="#">
                Meet out Practitioners
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">
                Learn & Grow
              </a>
            </li>
            <li className="nav-item ">
              <a className="nav-link" href="#">
                Get Inspired
              </a>
            </li>
            <li className="nav-item">
              <a
                className="nav-link "
                href="#"
                tabindex="-1"
                aria-disabled="true"
              >
                Join Our Community
              </a>
            </li>
          </ul>
          <div className="d-flex">
            <button className="btn btn-outline-success" type="submit">
              Sign In
            </button>
            <button className="btn btn-outline-success" type="submit">
              Sign Up
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;

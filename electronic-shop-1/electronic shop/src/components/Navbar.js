import React from "react";
import { NavLink } from "react-router-dom";

function Navbar() {
  return (
    <div>
      {/* <-- top navbar --> */}
      <div class="top-navbar">
        <p>WELCOME TO OUR SHOP</p>
        <div class="icons">
          <NavLink to='/login'>
            <img src="./assets/register.png" alt="" width="18px" />
            Login
          </NavLink>
          <NavLink to='/register'>
            <img src="./assets/register.png" alt="" width="18px" />
            Register
          </NavLink>
         
        </div>
      </div>
      {/* <-- top navbar --> */}
      {/* <!-- navbar --> */}
      <nav class="navbar navbar-expand-lg" id="navbar">
        <div class="container-fluid">
          <NavLink  className="navbar-brand " id="logo">
            <span id="span1">E</span>Lectronic <span>Shop</span>
          </NavLink>
          <button
            class="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span>
              <img src="./assets/menu.png" alt="" width="30px" />
            </span>

          </button>
          <div class="collapse navbar-collapse" id="navbarSupportedContent">
            <ul class="navbar-nav me-auto mb-2 mb-lg-0">
              <li class="nav-item">
                <NavLink to="/" className="nav-link">
                  Home
                </NavLink>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="#">
                  Product
                </a>
              </li>
              <li class="nav-item dropdown">
                <a
                  class="nav-link dropdown-toggle"
                  href="#"
                  id="navbarDropdown"
                  role="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  Category
                </a>
                <ul class="dropdown-menu" aria-labelledby="navbarDropdown">
                  <li>
                    <a class="dropdown-item" href="#">
                      Samrt Phone
                    </a>
                  </li>
                  <li>
                    <a class="dropdown-item" href="#">
                      Mobile Phone
                    </a>
                  </li>
                  <li>
                    <a class="dropdown-item" href="#">
                      Cameras
                    </a>
                  </li>
                  <li>
                    <a class="dropdown-item" href="#">
                      Fridge
                    </a>
                  </li>
                  <li>
                    <a class="dropdown-item" href="#">
                      AC
                    </a>
                  </li>
                  <li>
                    <a class="dropdown-item" href="#">
                      Samrt Watch
                    </a>
                  </li>
                  <li>
                    <a class="dropdown-item" href="#">
                      Headphone
                    </a>
                  </li>
                  <li>
                    <a class="dropdown-item" href="#">
                      Laptop
                    </a>
                  </li>
                  <li>
                    <a class="dropdown-item" href="#">
                      PC Moniter
                    </a>
                  </li>
                </ul>
              </li>
              <li class="nav-item">
                <NavLink to="/about" className="nav-link">
                  About
                </NavLink>
              </li>
              <li class="nav-item">
                <NavLink to="/contact" className="nav-link">
                  Contact
                </NavLink>
              </li>
            </ul>
            <form class="d-flex" id="search">
              <input
                class="form-control me-2"
                type="search"
                placeholder="Search"
                aria-label="Search"
              />
              <button class="btn btn-outline-success" type="submit">
                Search
              </button>
            </form>
          </div>
        </div>
      </nav>
      {/* <!-- navbar --> */}
    </div>
  );
}

export default Navbar;

import React, { useState } from 'react'
import './Navbar.css'
import { Link } from 'react-router-dom'
import { FiShoppingCart } from "react-icons/fi";


const Navbar = () => {

 
  
  return (
    <>

 <nav className="navbar navbar-expand-lg navbar-dark" id="navbar1">
        <div className="container-fluid">

          {/* BRAND */}
          <Link className="navbar-brand brandname" to="/">
            TRENDY <span className="brandname2">SWAG</span>
          </Link>

          {/* MOBILE TOGGLE */}
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="offcanvas"
            data-bs-target="#mobileMenu"
          >
            <span className="navbar-toggler-icon"></span>
          </button>

          {/* DESKTOP MENU */}
          <div className="collapse navbar-collapse d-none d-lg-flex">

            <ul className="navbar-nav mx-auto linkitems">

              <li className="nav-item">
                <Link to="/" className="nav-link">Home</Link>
              </li>

              <li className="nav-item">
                <Link to="/about" className="nav-link">About</Link>
              </li>

              <li className="nav-item">
                <Link to="/contact" className="nav-link">Contact</Link>
              </li>

              {/* ✅ FIXED PRODUCTS */}
              <li className="nav-item dropdown">
                <a role='button'
                  
                  className="nav-link dropdown-toggle"
                  data-bs-toggle="dropdown"
                >
                  Products
                </a>
                <ul className="dropdown-menu dropdown-menu-dark">
                  <li><Link to="/shirts" className="dropdown-item">Shirts</Link></li>
                  <li><Link to="/tshirts" className="dropdown-item">T-shirts</Link></li>
                  <li><Link to="/jeans" className="dropdown-item">Jeans</Link></li>
                  <li><Link to="/formals" className="dropdown-item">Formal Pants</Link></li>
                </ul>
              </li>

              {/* ✅ FIXED ADMIN */}
              <li className="nav-item dropdown">
                <a
                  role='button'
                  className="nav-link dropdown-toggle"
                  data-bs-toggle="dropdown"
                >
                  Admin
                </a>
                <ul className="dropdown-menu dropdown-menu-dark">
                  <li><Link to="/upload" className="dropdown-item">Upload</Link></li>
                  <li><Link to="/update" className="dropdown-item">Update</Link></li>
                </ul>
              </li>

            </ul>

            {/* RIGHT SIDE */}
            <form className="d-flex me-3">
              <input className="form-control me-2" placeholder="Search..." />
              <button className="btn btn-warning">Search</button>
            </form>

            <button className="btn btn-warning me-3" data-bs-toggle="modal"
              data-bs-target="#exampleModal">Sign In</button>

            <Link to="/cart" className="cart-icon">
              <FiShoppingCart />
              {/* <span id="cart-count">{cartCount}</span> */}
            </Link>
          </div>
        </div>
      </nav>

      {/* ✅ MOBILE OFFCANVAS */}
      <div className="offcanvas offcanvas-start" id="mobileMenu">
        <div className="offcanvas-header">
          <h5>Menu</h5>
          <button className="btn-close" data-bs-dismiss="offcanvas"></button>
        </div>

        <div className="offcanvas-body">
          <ul className="navbar-nav">

            <li className="nav-item">
              <Link to="/" className="nav-link">Home</Link>
            </li>

            <li className="nav-item">
              <Link to="/about" className="nav-link">About</Link>
            </li>

            <li className="nav-item">
              <Link to="/contact" className="nav-link">Contact</Link>
            </li>

            {/* PRODUCTS */}
            <li className="nav-item dropdown">
              <a className="nav-link dropdown-toggle" data-bs-toggle="dropdown">
                Products
              </a>
              <ul className="dropdown-menu">
                <li><Link to="/shirts" className="dropdown-item">Shirts</Link></li>
                <li><Link to="/tshirts" className="dropdown-item">T-shirts</Link></li>
                <li><Link to="/jeans" className="dropdown-item">Jeans</Link></li>
                <li><Link to="/formals" className="dropdown-item">Formal Pants</Link></li>
              </ul>
            </li>

            {/* ADMIN */}
            <li className="nav-item dropdown">
              <a className="nav-link dropdown-toggle" data-bs-toggle="dropdown">
                Admin
              </a>
              <ul className="dropdown-menu">
                <li><Link to="/upload" className="dropdown-item">Upload</Link></li>
                <li><Link to="/update" className="dropdown-item">Update</Link></li>
              </ul>
            </li>

          </ul>
        </div>
      </div>

      <form action="">
        <div
          className="modal fade"
          id="exampleModal"
          tabIndex="-1"
          aria-labelledby="exampleModalLabel"
          aria-hidden="true"
        >
          <div className="modal-dialog modal-dialog-centered modal-dialog-scrollable">
            <div className="modal-content">
              <div className="modal-header">
                <h1 className="modal-title fs-5 text-dark " id="exampleModalLabel">Login Page</h1>
                <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
              </div>
              <div className="modal-body bg-warning-subtle">
                <input type="text" className="form-control" placeholder="Enter Your Name" required />
                <br />
                <input type="email" className="form-control" placeholder="Email address" required />
                <br />
                <input type="password" className="form-control" placeholder="Password" required />
                <br />
                <input type="text" className="form-control" placeholder="Location" required />
                <br />
              </div>
              <div className="modal-footer ">
                <button type="button" className="btn btn-dark text-white" data-bs-dismiss="modal">Close</button>
                <button type="submit" className="btn btn-dark text-white" aria-required="true">Submit</button>
              </div>
            </div>
          </div>
        </div>
      </form>
    </>
  );
};

export default Navbar;

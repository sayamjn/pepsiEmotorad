import React from 'react';
import "./Header.css"
function Header() {
  return (
      <nav  className="nav navbar d-flex justify-content-between align-items-center  navbar-expand-lg">
        <a href="#" className="navbar-brand">
          <img src="/img/logo.png" alt="Pepsi Logo" className="logo nav__logo" />
        </a>
        <ul className="navbar-nav nav__menu  d-flex justify-content-between align-items-center   ">
          <li className="nav-item">
            <a className="nav-link text-white fw-bold mx-4" href="#">Product</a>
          </li>
          <li className="nav-item">
            <a className="nav-link text-white fw-bold mx-4" href="#">What's new</a>
          </li>
          <li className="nav-item">
            <a className="nav-link text-white fw-bold mx-4" href="#">Newsletter</a>
          </li>
          <li className="nav-item">
            <a className="nav-link text-white fw-bold mx-4" href="#">Contact Us</a>
          </li>
        </ul>

        <button className="btn navBtn  px-4 rounded-5 border-2 border-white nav__btn text-white fw-bold">Buy Products</button>
      </nav>
  );
}

export default Header;

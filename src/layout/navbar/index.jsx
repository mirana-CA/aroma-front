import React from "react";
import "./index.scss";
import { NavLink } from "react-router-dom";
import { CiSearch, CiShoppingCart } from "react-icons/ci";
import { RiMenu3Fill } from "react-icons/ri";

const Navbar = () => {
  return (
    <>
      <header>
        <div className="header_container">
        <div className="logo">
          <img
            src="https://preview.colorlib.com/theme/aroma/img/logo.png.webp"
            alt="logo"
          />
        </div>
        <nav>
          <ul>
            <li>
              <NavLink to="/">Home</NavLink>
            </li>
            <li>
              <NavLink to="/wishlist">Wishlist</NavLink>
            </li>
            <li>
              <NavLink to="/basket">Basket</NavLink>
            </li>
            <li>
              <NavLink to="/">Pages</NavLink>
            </li>
            <li>
              <NavLink to="/">Contact</NavLink>
            </li>
          </ul>
        </nav>
        <div className="header_buttons">
          <div className="icons">
            <CiSearch />
            <CiShoppingCart />
          </div>
          <button>Buy Now</button>
        </div>
        <div className="mobile_menu">
        <RiMenu3Fill />
        </div>
        </div>
   
      </header>
    </>
  );
};

export default Navbar;

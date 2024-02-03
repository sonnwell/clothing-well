import React from "react";
import { Outlet, Link } from "react-router-dom";
import SiteLogo from "../../assets/company-logo.png";
import userIcon from "../../assets/user-solid.png"
import cart from "../../assets/cart-shopping.png"
import "./Navigation.scss";

const Navigation = () => {
  return (
    <div className="container">
      <nav class="navbar navbar-expand-lg navbar-light bg-white">
        <div class="container-fluid">
          <Link className="logo-container navbar-brand" to="/">
            <img src={SiteLogo} className="logo" />
          </Link>
          <button
            class="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNav"
            aria-controls="navbarNav"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span class="navbar-toggler-icon"></span>
          </button>
          <div class="collapse navbar-collapse" id="navbarNav">
            <ul class="navbar-nav">
              <li class="nav-item">
                <Link className="navLink" to="/shop">
                  Mens
                </Link>
              </li>
              <li class="nav-item">
                <Link className="navLink" to="/shop">
                  Womens
                </Link>
              </li>
              <li class="nav-item">
                <Link className="navLink" to="/shop">
                  Sale
                </Link>
              </li>
            </ul>
          </div>
          <div class="collapse navbar-collapse" id="navbarNav">
            <ul class="navbar-nav" id="iconWrapper">
              <li class="nav-item">
                <Link className="navLinkIcon" to="/shop">
                  <img src={cart} alt="" className="navIcon"/>
                </Link>
              </li>
              <li class="nav-item">
                <Link className="navLinkIcon" to="/auth">
                  <img src={userIcon} alt="" className="navIcon"/>
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
      <Outlet />
    </div>
  );
};

export default Navigation;

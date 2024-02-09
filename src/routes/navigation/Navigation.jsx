import { useContext } from "react";
import { Outlet, Link } from "react-router-dom";
import SiteLogo from "../../assets/company-logo.png";
import userIcon from "../../assets/user-solid.png";
import cart from "../../assets/cart-shopping.png";

import { UserContext } from "../../contexts/User.Context";
import { signOutUser } from "../../utils/firebase.utils";

import "./Navigation.scss";

const Navigation = () => {
  const { currentUser } = useContext(UserContext);
  console.log(currentUser);

  return (
    <div className="container">
      <nav className="navbar navbar-expand-lg navbar-light bg-white">
        <div className="container-fluid">
          <Link className="logo-container navbar-brand" to="/">
            <img src={SiteLogo} className="logo" />
          </Link>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNav"
            aria-controls="navbarNav"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav">
              <li className="nav-item">
                <Link className="navLink" to="/shop">
                  Shop
                </Link>
              </li>
              <li className="nav-item">
                <Link className="navLink" to="/shop">
                  Sale
                </Link>
              </li>
            </ul>
          </div>
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav" id="iconWrapper">
              <li className="nav-item">
                <Link className="navLinkIcon" to="/shop">
                  <img src={cart} alt="" className="navIcon" />
                </Link>
              </li>
              <li className="nav-item">
                {currentUser ? (
                  <span className="navLink" onClick={signOutUser}>
                    Sign Out
                  </span>
                ) : (
                  <Link className="navLink" to="/auth">
                    Sign In
                  </Link>
                )}
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

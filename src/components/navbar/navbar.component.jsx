import React from "react";

const Navbar = () => {
  return (
    <div className="z-navbar">
      <div className="container">
        <div class="columns is-vcentered">
          <div class="column is-2">
            <figure className="image">
              <img src="/images/logo.png" alt="Placeholderimage" className="is-rounded" />
            </figure>
            </div>
          <div class="column">
            <ul className="navbar-list">
              <li className="navbar-tab">
                <a href="#personal">
                  <i class="fa fa-circle"></i> Personal
                </a>
              </li>
              <li className="navbar-tab">
                <a href="#business">
                  <i class="fas fa-circle"></i> Business
                </a>
              </li>
            </ul>
          </div>
          <div class="column">
            <ul className="navbar-list">
              <li>
                <a href="#about"> About</a>
              </li>
              <li>
                <a href="#about"> Pricing</a>
              </li>
              <li>
                <a href="#about"> FAQ</a>
              </li>
              <li>
                <a href="#about"> Contact Us</a>
              </li>
            </ul>
          </div>
          <div class="column">
            <ul className="navbar-list">
              <li>
                <a href="#login"> Login</a>
              </li>
              <li className="navbar-btn">
                <a href="#register"> Join now</a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Navbar;

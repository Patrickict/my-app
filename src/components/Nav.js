import { Outlet, Link } from "react-router-dom";
import * as React from 'react';

const Nav = () => {

    return (

      <nav class="navbar">
        <div class="navbar-container container">
              <input type="checkbox" name="" id=""/>
              <div class="hamburger-lines">
                  <span class="line line1"></span>
                  <span class="line line2"></span>
                  <span class="line line3"></span>
              </div>
              <ul class="menu-items">
                <li>
                  <Link to="/">Home</Link>
                </li>
                <li>
                  <Link to="/about">About</Link>
                </li>
              </ul>
            </div>
        </nav>
      );
};

export default Nav;
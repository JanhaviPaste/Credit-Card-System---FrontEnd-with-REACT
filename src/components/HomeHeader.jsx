import React, { Component } from 'react'
import { NavLink, Link } from "react-router-dom";

class HomeHeader extends Component {
  render() {
    return (

      <div>
        <nav className="navbar navbar-expand-lg navbar-dark bg-primary ">
          <a className="navbar-brand"><b><i>Credit Card System</i></b></a>

          <div id="navbar" className="collapse navbar-collapse">
            <ul className="navbar-nav mr-auto">
              <li className="nav-item">
                <NavLink className="nav-link" exact to="/home">
                  Home
              </NavLink>
              </li>
              <li class="nav-item">
                <NavLink className="nav-link" exact to="/about">
                  About
              </NavLink>
              </li>
              <li class="nav-item">
                <NavLink className="nav-link" exact to="/contact">
                  Contact Us
              </NavLink>
              </li>
            </ul>
          </div>
        </nav>

      </div>
    )
  }
}

export default HomeHeader

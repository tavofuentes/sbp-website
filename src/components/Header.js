import React, { Component } from 'react'
import './header.css'
import { Link } from "gatsby"
import SBPLogo from "../images/SBP-Logo.svg"
import SBPSnail from "../images/SBP_Snail.svg"

class Header extends Component {
  state = {
    navActive: false
  };

  onNavStatusChange = () => {
    this.setState(initialState => ({
      navActive: !initialState.navActive,
    }));
  }

  render() {
    return (
      <header>
        <div className="nav-sm">
          <img className="nav-logo-sm" src={SBPSnail} alt="Snail Book Pals" />
          <label className="nav-menu-icon" htmlFor="nav-menu-btn">
            <input
              className="nav-menu-btn"
              type="checkbox"
              id="nav-menu-btn"
              checked={this.state.navActive}
              onChange={this.onNavStatusChange}
            />
            <span className="navicon">X</span>
          </label>
        </div>

        <div className={`nav-content ${this.state.navActive ? 'active' : ''}`}>
          <div className="nav-logo">
            <Link to="/"><img src={SBPLogo} alt="Snail Book Pals" /></Link>
          </div>
          <nav>
            <ul className="nav-list">
              <li>
                <Link className="nav-link" to="/">Home</Link>
              </li>
              <li>
                <Link className="nav-link" to="/faq/">Faq</Link>
              </li>
            </ul>
          </nav>
        </div>
        <div className="stain"></div>
      </header>
    )
  }
}

export default Header

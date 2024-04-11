import React from 'react';
import { NavLink } from 'react-router-dom';
import logo from '../assets/logo.png';
import './styles/navbar.css';

function Navbar({ textColor }) {
  return (
    <>
      <div className="navbar">
        <div className="nav-items">
          <NavLink to="/achievements" activeClassName="active">
            Achievements
          </NavLink>
          <NavLink to="/dotslash" activeClassName="active">
            Dotslash
          </NavLink>
          <NavLink to="/" activeClassName="active">
            <img src={logo} alt="Logo" />
          </NavLink>
          <NavLink to="/cscup" activeClassName="active">
            CS Cup
          </NavLink>
          <NavLink to="/newsletter" activeClassName="active">
            Newsletter
          </NavLink>
        </div>
      </div>
    </>
  );
}

export default Navbar;

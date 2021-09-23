import React from 'react';
import { NavLink } from 'react-router-dom';

function Navbar() {
  return (
    <>
      <nav>
        <h2>WikiCountries</h2>
        <ul>
          <li>
            <NavLink activeStyle={{ color: 'red' }} exact to="/">
              Home
            </NavLink>
          </li>
          <li>
            <NavLink activeStyle={{ color: 'red' }} exact to="/countries-list">
              Country List
            </NavLink>
          </li>
          <li>
            <NavLink activeStyle={{ color: 'red' }} exact to="/country-details">
              Country Details
            </NavLink>
          </li>
        </ul>
      </nav>
    </>
  );
}

export default Navbar;
